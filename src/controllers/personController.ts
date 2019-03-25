import {Request,Response} from 'express';
import pool from '../database';

export class PersonController {

    public async addPerson(req:Request,res:Response){
        await pool.query('INSERT INTO PERSONA SET ?',[req.body]);
        res.status(200).json({Message:'adding person'});
    }

}

export default PersonController;