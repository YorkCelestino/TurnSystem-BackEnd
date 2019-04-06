import { Request,Response } from 'express';
import pool from '../database';


class InfoInstitutionContoller{
   
    public async infoInstitution (req:Request,res:Response): Promise<void> { 
        const info = await pool.query('SELECT * FROM infoinstitucion');
   
          res.json(...info);
      }   
   
    public async updateInstitution (req:Request,res:Response){
        await pool.query('UPDATE infoinstitucion SET ?',[req.params]);
        res.json({update:'updatin Information ' + req.body.nombreInstitucion});
    }
}

export default InfoInstitutionContoller;
