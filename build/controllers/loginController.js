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
const user_model_1 = __importDefault(require("../model/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
class LoginController {
    //   generateToken(data: any) {
    //   return jwt.sign({ id: data.Id_Usuario},
    //     config.secret,
    //   {
    //     expiresIn: "15m"
    //   });
    // }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            user_model_1.default.findOne({
                where: {
                    usuarios: req.body.usuarios,
                }
            }).then(user => {
                if (!user) {
                    return res.status(404).send('User Not Found.');
                }
                else {
                    if (bcrypt_1.default.compareSync(req.body.password, user.password)) {
                        let token = jsonwebtoken_1.default.sign({ id: user.Id_Usuario }, config_1.default.secret, {
                            expiresIn: 86400 // expires in 24 hours
                            // expiresIn: "15m" // expires in 15 minutes
                        });
                        return res.send({
                            "token": token
                        });
                    }
                    else {
                        return res.send({
                            message: "invalid password"
                        });
                    }
                }
            });
        });
    }
}
exports.default = LoginController;
