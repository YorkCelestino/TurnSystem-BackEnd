import { Request,Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import User from '../model/user.model';
//import { bcryptjs } from 'bcryptjs';

import pool from '../database';
import bcrypt from 'bcrypt';

class TurnsController{
   public async turnList (req:Request,res:Response):Promise<void>{
       const turns = await pool.query('SELECT turno.id_Turno,turno.fecha,turno.estado,turno.id_Motivo,turno.id_Persona,motivo.id_Departamento,motivo.descripcion FROM turno INNER JOIN motivo WHERE turno.id_Motivo = motivo.id_Motivo and turno.estado = "A"');
       res.json(...turns);
   }
    public async create (req:Request,res:Response): Promise<void> { 
          await pool.query('INSERT INTO TURNO SET ?,ESTADO="A"',[req.body]);
          res.json({msj:'set turns'});
      }   
}

// const usersConteoller =new TurnsController();
// export default usersConteoller;
export default TurnsController;
