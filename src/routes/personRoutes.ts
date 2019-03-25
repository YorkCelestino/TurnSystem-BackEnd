import { Router } from "express";
import verifySingUp from '../auth/verifySignUp';
import VerifyJwtToken from '../auth/verifyJwtToken';
import PersonController from "../controllers/personController";


class PersonRautes{
    personController = new PersonController;
   
    verifyJwtToken: VerifyJwtToken = new VerifyJwtToken();

    public router: Router = Router();
   
    constructor(){
        this.config();
    }

    config(): void{
       // this.router.get('/get-user-list', this.usersController.list);
        this.router.post('/add-person',this.personController.addPerson);
    }
}

const personRoutes = new PersonRautes();

export default personRoutes.router;