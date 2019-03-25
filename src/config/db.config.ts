import key from '../keys';
import Sequelize from 'sequelize';
//import User from '../model/user.model';

/**
 * configuration of sequelize
 */
const sequelize = new Sequelize(key.database.database,key.database.user,key.database.password,{
    host: key.database.host,
    dialect : key.database.dialect,
    operatorsAliases :false ,
    pool: {
        max: key.database.pool.max,
        min: key.database.pool.min,
        acquire: key.database.pool.acquire,
        idle: key.database.pool.idle
    },
    define: {
        timestamps: false,
        freezeTableName: true,
    }
});
 /**
  * Check authenticate sequelize
  */ 
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
/*
const User = sequelize.define('usuario',{
    Id_Usuario: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    Nombre:{
        type: Sequelize.STRING
    },
    Apellido: {
        type: Sequelize.STRING
    },
    Cedula:{
        type: Sequelize.STRING
    },
    usuarios :{
        type: Sequelize.STRING
    },
    Password: {
        type: Sequelize.STRING
    },
    Id_departamento:{
        type: Sequelize.INTEGER
    },

});

User.findOne({
    where:{
        Id_Usuario:1
    }
}).then((user)=>console.log(user));
/*User.findAll({
    where: {
      Id_Usuario:1
    }
  }).then((user)=>{
    console.log(user);
  });*/
 

export default sequelize;



