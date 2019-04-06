"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnsController_1 = __importDefault(require("../controllers/turnsController"));
class TurnsRautes {
    constructor() {
        this.turnsController = new turnsController_1.default();
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/add-turn', this.turnsController.create);
        this.router.get('/get-turn', this.turnsController.turnList);
    }
}
const turnsRoutes = new TurnsRautes();
exports.default = turnsRoutes.router;
