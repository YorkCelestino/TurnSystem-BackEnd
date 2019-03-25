import { NextFunction } from 'express-serve-static-core';
import { Request,Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config'
import sequelize from '../config/db.config';
import User from '../model/user.model';



class VerifyJwtToken{

     public VerifyToken(req:Request,res:Response,next:NextFunction){
    
     let token: string = req.headers['authorization'].split(' ')[1] ;
     
     if (!token){
         return res.status(403).send({
             auth: false, message: 'No token provided.' 
          });
     }
     jwt.verify(token, req.app.get('SuperSecret'), (err:any, decoded:any) => {
        if (err) {
             res.status(500).send({
                    auth: false,
                    message: 'Fail to Authentication. Error -> ' + err
                 });
             return;
        }
        req.id_usuario = decoded.id;
        next();
    });
     
    }
}

export default VerifyJwtToken;