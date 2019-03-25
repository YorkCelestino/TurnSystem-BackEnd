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
class DepartmentsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const departments = yield database_1.default.query('SELECT * FROM DEPARTAMENTO');
            res.json(departments);
        });
    }
    created(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO DEPARTAMENTO SET ?,ESTADO="A"', [req.body]);
            res.json({ message: 'department save' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM DEPARTAMENTO WHERE id_Departamento = ?', [id]);
            res.json({ delete: 'deleting Deparment ' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE DEPARTAMENTO set ? WHERE Id_Departamento = ?', [req.body, id]);
            res.json({ update: 'updatin Deparment' + req.params.id });
        });
    }
}
const departmentsController = new DepartmentsController();
exports.default = departmentsController;
