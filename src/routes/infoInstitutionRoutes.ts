import { Router } from "express";
import InfoInstitutionContoller from "../controllers/infoInstitution";


class InfoInstitutionRoutes{
    infoInstitutionContoller = new InfoInstitutionContoller();
  
    public router: Router = Router();
   
    constructor(){
        this.config();
    }

    config(): void{
        
        this.router.get('/get-infoInstitution', this.infoInstitutionContoller.infoInstitution);
        this.router.post('/update-infoInstitution', this.infoInstitutionContoller.updateInstitution);
    }
}
const  infoInstitutionRoutes = new  InfoInstitutionRoutes();

export default infoInstitutionRoutes.router;