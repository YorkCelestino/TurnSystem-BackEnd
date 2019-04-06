import { Router } from "express";
import MotivosController from "../controllers/motivosContoller";



class UsersRautes{
    MotivosController = new MotivosController()
  

    public router: Router = Router();
   
    constructor(){
        this.config();
    }

    config(): void{
        
        this.router.get('/get-motivo/:id', this.MotivosController.listMotivo); 
        this.router.get('/get-motivos', this.MotivosController.listMotivos); 
        this.router.post('/add-motivo',this.MotivosController.created);
    }
}
const usersRoutes = new UsersRautes();

export default usersRoutes.router;