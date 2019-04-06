"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const motivosContoller_1 = __importDefault(require("../controllers/motivosContoller"));
class UsersRautes {
    constructor() {
        this.MotivosController = new motivosContoller_1.default();
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/get-motivo/:id', this.MotivosController.listMotivo);
        this.router.get('/get-motivos', this.MotivosController.listMotivos);
        this.router.post('/add-motivo', this.MotivosController.created);
    }
}
const usersRoutes = new UsersRautes();
exports.default = usersRoutes.router;
