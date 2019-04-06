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
class TurnsController {
    turnList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const turns = yield database_1.default.query('SELECT turno.id_Turno,turno.fecha,turno.estado,turno.id_Motivo,turno.id_Persona,motivo.id_Departamento,motivo.descripcion FROM turno INNER JOIN motivo WHERE turno.id_Motivo = motivo.id_Motivo and turno.estado = "A"');
            res.json(...turns);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO TURNO SET ?,ESTADO="A"', [req.body]);
            res.json({ msj: 'set turns' });
        });
    }
}
// const usersConteoller =new TurnsController();
// export default usersConteoller;
exports.default = TurnsController;
