"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class VerifyJwtToken {
    VerifyToken(req, res, next) {
        let token = req.headers['authorization'].split(' ')[1];
        if (!token) {
            return res.status(403).send({
                auth: false, message: 'No token provided.'
            });
        }
        jsonwebtoken_1.default.verify(token, req.app.get('SuperSecret'), (err, decoded) => {
            if (err) {
                res.status(500).send({
                    auth: false,
                    message: 'Fail to Authentication. Error -> ' + err
                });
                return;
            }
            req.id_usuario = decoded.id;
            next();
        });
    }
}
exports.default = VerifyJwtToken;
