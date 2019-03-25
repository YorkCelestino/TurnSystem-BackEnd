import { Router } from "express";
import UsersController from '../controllers/usersController';
import verifySingUp from '../auth/verifySignUp';
import LoginController from "../controllers/loginController";
import VerifyJwtToken from '../auth/verifyJwtToken';


class UsersRautes{
    usersController = new UsersController();
    loginController = new LoginController();
    verifyJwtToken: VerifyJwtToken = new VerifyJwtToken();

    public router: Router = Router();
   
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/get-user-list', this.usersController.list);
        this.router.post('/add-user',[verifySingUp.VerifyCreatedUser],this.usersController.created);
        this.router.post('/update-user/:id',this.usersController.update)
        this.router.post('/delete-user',this.usersController.delete);
        this.router.get('/get-list-department'/*,verifyJwtToken.VerifyToken*/,this.usersController.listDepartment);
        this.router.post('/authenticate',this.loginController.login);
        this.router.get('/user-info', this.verifyJwtToken.VerifyToken, this.usersController.user);
        
    }
}

const usersRoutes = new UsersRautes();

export default usersRoutes.router;