"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departmentsController_1 = __importDefault(require("../controllers/departmentsController"));
class DepartmentsRautes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', departmentsController_1.default.list);
        this.router.post('/', departmentsController_1.default.created);
        this.router.delete('/:id', departmentsController_1.default.delete);
        this.router.put('/:id', departmentsController_1.default.update);
    }
}
const departmentsRoutes = new DepartmentsRautes();
exports.default = departmentsRoutes.router;
