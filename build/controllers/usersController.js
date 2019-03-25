"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { bcryptjs } from 'bcryptjs';
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UsersController {
    user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT Id_Usuario,nombre as name, apellido as lastName ,cedula,usuarios,password, Id_departamento ,Estado,role FROM usuario WHERE Id_Usuario =?', [req.id_usuario]);
            res.json(...users);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT usuario.Id_Usuario,usuario.nombre,usuario.apellido,usuario.cedula,usuario.usuarios,usuario.password,departamento.nombreDepartamento,usuario.Estado,usuario.role FROM usuario INNER JOIN departamento WHERE usuario.Id_Departamento=departamento.Id_Departamento');
            res.json(users);
        });
    }
    listDepartment(red, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listdepartment = yield database_1.default.query('SELECT Id_departamento,nombreDepartamento FROM departamento');
            res.json(listdepartment);
        });
    }
    created(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield bcrypt_1.default.genSalt(10, (err, salt) => {
                bcrypt_1.default.hash(req.body.password, salt, (err, hash) => {
                    req.body.password = hash;
                    req.body.saltSecret = salt;
                    database_1.default.query('INSERT INTO USUARIO SET ?,ESTADO="A"', [req.body]);
                    res.status(200).send({ message: 'user save', done: "Username is available!" });
                });
            });
            //saltSecret varchar(300)
            // res.json({message:'user save'});
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM USUARIO WHERE Id_Usuario =?', [id]);
            res.json({ delete: 'deleting user ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE USUARIO SET ? WHERE Id_USUARIO = ?', [req.body, id]);
            res.json({ update: 'updatin Deparment' + req.params.id });
        });
    }
}
// const usersConteoller =new UsersController();
// export default usersConteoller;
exports.default = UsersController;
