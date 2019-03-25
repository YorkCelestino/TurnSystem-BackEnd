import { Request,Response } from 'express';
import User from '../model/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../database';
import config from '../config/config';

class LoginController{
  
  
  //   generateToken(data: any) {
  //   return jwt.sign({ id: data.Id_Usuario},
  //     config.secret,
  //   {
  //     expiresIn: "15m"
  //   });
  // }

  public async login (req:Request, res:Response){ 
    User.findOne({
        where:{
            usuarios: req.body.usuarios,
        }  
        
      }).then(user =>{
        
        if(!user){
           return res.status(404).send('User Not Found.');
        }else{
          if ( bcrypt.compareSync(req.body.password,user.password)){
            
            let  token = jwt.sign({ id: user.Id_Usuario}, config.secret, {
              //expiresIn: 86400 // expires in 24 hours
              expiresIn: "15m"
            });
            return res.send({
              "token": token});
          }
          else{
            return res.send({
              message: "invalid password"
            })
          }

        }
        
      });
      
    }
    
}

export default LoginController;