"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyJwtToken_1 = __importDefault(require("../auth/verifyJwtToken"));
const personController_1 = __importDefault(require("../controllers/personController"));
class PersonRautes {
    constructor() {
        this.personController = new personController_1.default;
        this.verifyJwtToken = new verifyJwtToken_1.default();
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/get-user-list', this.usersController.list);
        this.router.post('/add-person', this.personController.addPerson);
    }
}
const personRoutes = new PersonRautes();
exports.default = personRoutes.router;
