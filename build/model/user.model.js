"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db_config_1 = __importDefault(require("../config/db.config"));
const User = db_config_1.default.define('usuario', {
    Id_Usuario: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.default.INTEGER
    },
    nombre: {
        type: sequelize_1.default.STRING
    },
    apellido: {
        type: sequelize_1.default.STRING
    },
    cedula: {
        type: sequelize_1.default.STRING
    },
    usuarios: {
        type: sequelize_1.default.STRING
    },
    password: {
        type: sequelize_1.default.STRING
    },
    saltSecret: {
        type: sequelize_1.default.STRING
    },
    Id_departamento: {
        type: sequelize_1.default.INTEGER
    },
});
exports.default = User;
