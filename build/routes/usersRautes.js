"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
const verifySignUp_1 = __importDefault(require("../auth/verifySignUp"));
const loginController_1 = require("../controllers/loginController");
class UsersRautes {
    constructor() {
        this.usersController = new usersController_1.default();
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', this.usersController.list);
        this.router.post('/', [verifySignUp_1.default.VerifyCreatedUser], this.usersController.created);
        this.router.put('/:id', this.usersController.update);
        this.router.delete('/:id', this.usersController.delete);
        this.router.get('/listdepartment' /*,verifyJwtToken.VerifyToken*/, this.usersController.listDepartment);
        this.router.post('/authenticate', loginController_1.loginConteoller.login);
    }
}
const usersRoutes = new UsersRautes();
exports.default = usersRoutes.router;
