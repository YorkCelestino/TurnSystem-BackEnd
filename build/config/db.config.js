"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("../keys"));
const sequelize_1 = __importDefault(require("sequelize"));
//import User from '../model/user.model';
/**
 * configuration of sequelize
 */
const sequelize = new sequelize_1.default(keys_1.default.database.database, keys_1.default.database.user, keys_1.default.database.password, {
    host: keys_1.default.database.host,
    dialect: keys_1.default.database.dialect,
    operatorsAliases: false,
    pool: {
        max: keys_1.default.database.pool.max,
        min: keys_1.default.database.pool.min,
        acquire: keys_1.default.database.pool.acquire,
        idle: keys_1.default.database.pool.idle
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
exports.default = sequelize;
