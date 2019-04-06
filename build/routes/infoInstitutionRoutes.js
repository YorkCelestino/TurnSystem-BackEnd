"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const infoInstitution_1 = __importDefault(require("../controllers/infoInstitution"));
class InfoInstitutionRoutes {
    constructor() {
        this.infoInstitutionContoller = new infoInstitution_1.default();
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/get-infoInstitution', this.infoInstitutionContoller.infoInstitution);
        this.router.post('/update-infoInstitution', this.infoInstitutionContoller.updateInstitution);
    }
}
const infoInstitutionRoutes = new InfoInstitutionRoutes();
exports.default = infoInstitutionRoutes.router;
