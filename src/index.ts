import express, { Application } from 'express';
import  morgan  from 'morgan';
import cors from 'cors';
import bodyparse from 'body-parser';
import config from './config/config';

/**
 *Routes imports
 */
 
import indexRoutes from './routes/indexRoutes';
import usersRoutes from './routes/usersRoutes';
import departmentsRoutes from './routes/departmentsRautes';
import personRoutes from './routes/personRoutes';
import motivosRoutes from './routes/motivosRoutes';
import infoInstitutionRoutes from './routes/infoInstitutionRoutes';
import turnsRoutes from './routes/turnsRoutes';

class Server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
        
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(bodyparse.json());
        this.app.use(bodyparse.urlencoded({extended:false}));
        this.app.set('SuperSecret',config.secret);
    }

    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/api/users',usersRoutes);
        this.app.use('/api/departments',departmentsRoutes);
        this.app.use('/api/person',personRoutes);
        this.app.use('/api/motivos',motivosRoutes);
        this.app.use('/api/infoInstitution',infoInstitutionRoutes);
        this.app.use('/api/turns', turnsRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('server on port', this.app.get('port'))
        });
    }

}

const server = new Server();
server.start();