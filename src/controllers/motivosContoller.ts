import { Request,Response } from 'express';
import pool from '../database';


class MotivosController{
   
   public  async listMotivos(req:Request, res:Response){ 
      const motivos = await pool.query('SELECT motivo.id_Motivo,motivo.descripcion,departamento.id_Departamento,departamento.nombreDepartamento FROM motivo INNER JOIN departamento WHERE motivo.id_Departamento=departamento.id_Departamento');
      res.json(motivos);
    }
       
   public  async listMotivo(req:Request, res:Response){ 
      const {id}= req.params;
      const motivo = await pool.query('SELECT * FROM motivo where id_departamento = ? ',[id]);
      res.json(motivo);
    }

 
    public async created(req:Request,res:Response):Promise<void>{
      
      await pool.query('INSERT INTO motivo SET ?',[req.body]);
        
        res.json({message:'motivo save'});
    }

    
}


export default MotivosController;