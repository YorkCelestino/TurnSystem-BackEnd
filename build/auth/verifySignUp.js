"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../model/user.model"));
//import User from '../config/db.config';
const user = user_model_1.default;
class VerifySingUp {
    VerifyCreatedUser(req, res, next) {
        // -> Check user is already in use
        user.findOne({
            where: {
                usuarios: req.body.usuarios
            }
        }).then((user) => {
            if (user) {
                res.status(400).send("Username is already taken!");
                return;
            }
            // -> Check Cedula is already in use
            user_model_1.default.findOne({
                where: {
                    Cedula: req.body.Cedula
                }
            }).then(user => {
                if (user) {
                    res.status(400).send("Cedula is already in use!");
                    return;
                }
                next();
            });
        });
        // return res.status(500).send("Fail");
    }
}
const verifySingUp = new VerifySingUp();
exports.default = verifySingUp;
