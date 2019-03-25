import Sequelize from 'sequelize';
import  sequelize  from '../config/db.config';

 const User = sequelize.define('usuario',{
    Id_Usuario: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nombre:{
        type: Sequelize.STRING
    },
    apellido: {
        type: Sequelize.STRING
    },
    cedula:{
        type: Sequelize.STRING
    },
    usuarios :{
        type: Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    saltSecret: {
        type: Sequelize.STRING
    },
    Id_departamento:{
        type: Sequelize.INTEGER
    },
      
});

export default User;