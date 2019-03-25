import { Request,Response } from 'express';

import pool from '../database';

class DepartmentsController{
   
   public async list (req:Request,res:Response): Promise<void> { 

     const departments = await pool.query('SELECT * FROM DEPARTAMENTO');

       res.json(departments);
   }

    public async created(req:Request,res:Response):Promise<void>{
      
      await pool.query('INSERT INTO DEPARTAMENTO SET ?,ESTADO="A"',[req.body]);
        
        res.json({message:'department save'});
    }

    public async delete (req:Request,res:Response):Promise<void>{
        const { id } = req.params;
        
        await pool.query('DELETE FROM DEPARTAMENTO WHERE id_Departamento = ?',[id]);
        
        res.json({delete:'deleting Deparment '});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE DEPARTAMENTO set ? WHERE Id_Departamento = ?',[req.body,id]);

        res.json({update:'updatin Deparment' + req.params.id});
    }
}

const departmentsController =new DepartmentsController();
export default departmentsController;