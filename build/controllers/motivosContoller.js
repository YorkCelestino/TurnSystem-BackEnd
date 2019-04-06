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
const database_1 = __importDefault(require("../database"));
class MotivosController {
    listMotivos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const motivos = yield database_1.default.query('SELECT motivo.id_Motivo,motivo.descripcion,departamento.id_Departamento,departamento.nombreDepartamento FROM motivo INNER JOIN departamento WHERE motivo.id_Departamento=departamento.id_Departamento');
            res.json(motivos);
        });
    }
    listMotivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const motivo = yield database_1.default.query('SELECT * FROM motivo where id_departamento = ? ', [id]);
            res.json(motivo);
        });
    }
    created(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO motivo SET ?', [req.body]);
            res.json({ message: 'motivo save' });
        });
    }
}
exports.default = MotivosController;
