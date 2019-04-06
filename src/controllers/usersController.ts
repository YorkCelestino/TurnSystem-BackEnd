import { Request,Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import User from '../model/user.model';
//import { bcryptjs } from 'bcryptjs';

import pool from '../database';
import bcrypt from 'bcrypt';
import { domainToASCII } from 'url';

class UsersController{
   
    public async user (req:Request,res:Response): Promise<void> { 
        const users = await pool.query('SELECT Id_Usuario,nombre as name, apellido as lastName ,cedula,usuarios,password, Id_departamento ,Estado,role FROM usuario WHERE Id_Usuario =?',[req.id_usuario]);
   
          res.json(...users);
      }   
      public async list (req:Request,res:Response): Promise<void> { 
    
        const users = await pool.query('SELECT usuario.Id_Usuario, usuario.id_Departamento ,usuario.nombre,usuario.apellido,usuario.cedula,usuario.usuarios,usuario.password,departamento.nombreDepartamento,usuario.Estado,usuario.role FROM usuario INNER JOIN departamento WHERE usuario.Id_Departamento=departamento.Id_Departamento');
   
          res.json(users);
      }

    public async listDepartment (red:Request,res:Response):Promise<void> {

        const listdepartment = await pool.query ('SELECT Id_departamento,nombreDepartamento FROM departamento');
        res.json(listdepartment);
        
    }
    public async created(req:Request,res:Response):Promise<void>{
        await bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                req.body.password = hash;
                req.body.saltSecret = salt;
                pool.query('INSERT INTO USUARIO SET ?,ESTADO="A"',[req.body]);
                res.status(200).send({message:'user save',done:"Username is available!"});
            });
        });
        
        //saltSecret varchar(300)
       // res.json({message:'user save'});
    }

    public async changeStatus (req:Request, res:Response):Promise<void> {
        await pool.query('UPDATE USUARIO SET estado = ? WHERE Id_USUARIO = ? ',[req.body.status, req.body.id]);
        res.json({msj:'change Status User', update: req.body});
    }

    /**
     * For Update User
     */
    public async update (req:Request,res:Response){
     //   const {id} = req.params;
        await pool.query('UPDATE USUARIO SET ? WHERE Id_USUARIO = ?',[req.body,req.body.Id_Usuario]);
        res.json({msj:'updatin Deparment' ,update: req.body});
    }
}

// const usersConteoller =new UsersController();
// export default usersConteoller;
export default UsersController;
