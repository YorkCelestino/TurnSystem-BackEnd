import { Router } from "express";
import TurnsController from '../controllers/turnsController';

class TurnsRautes{
    turnsController = new TurnsController();
    

    public router: Router = Router();
   
    constructor(){
        this.config();
    }

    config(): void{
     
        this.router.post('/add-turn',this.turnsController.create);
        this.router.get('/get-turn',this.turnsController.turnList);
    }
}

const turnsRoutes = new TurnsRautes();

export default turnsRoutes.router;