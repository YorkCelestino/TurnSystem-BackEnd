import { Router } from "express";
import departmentsController from '../controllers/departmentsController';


class DepartmentsRautes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', departmentsController.list);
        this.router.post('/', departmentsController.created);
        this.router.delete('/:id',departmentsController.delete);
        this.router.put('/:id',departmentsController.update);
    }
}

const departmentsRoutes = new DepartmentsRautes();

export default departmentsRoutes.router;