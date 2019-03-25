import { Request,Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import User from '../model/user.model';
//import User from '../config/db.config';


const user = User;

class VerifySingUp{
    
   public  VerifyCreatedUser (req:Request,res:Response,next:NextFunction) { 
     // -> Check user is already in use
    user.findOne({
        where:{
            usuarios: req.body.usuarios
        }
    }).then((user)=>{
        if(user){
            res.status(400).send("Username is already taken!");
           
            return;
        }
         // -> Check Cedula is already in use
         User.findOne({
            where: {
               Cedula: req.body.Cedula
            }
        }).then(user => {
            if (user) {
                
                res.status(400).send("Cedula is already in use!");
                return;
            }
            next();
        });
    });
       
      // return res.status(500).send("Fail");
       }
    
}
const verifySingUp =new VerifySingUp();
export default verifySingUp;
