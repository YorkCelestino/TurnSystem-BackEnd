import { Router } from "express";
import IndexController from "../controllers/indexController";



class IndexRoutes{

    public router: Router = Router();
    indexController: IndexController = new IndexController();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',  this.indexController.index);
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;