"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
const verifySignUp_1 = __importDefault(require("../auth/verifySignUp"));
const loginController_1 = __importDefault(require("../controllers/loginController"));
const verifyJwtToken_1 = __importDefault(require("../auth/verifyJwtToken"));
class UsersRautes {
    constructor() {
        this.usersController = new usersController_1.default();
        this.loginController = new loginController_1.default();
        this.verifyJwtToken = new verifyJwtToken_1.default();
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/get-user-list', this.usersController.list);
        this.router.post('/add-user', [verifySignUp_1.default.VerifyCreatedUser], this.usersController.created);
        this.router.post('/update-user/:id', this.usersController.update);
        this.router.post('/delete-user', this.usersController.delete);
        this.router.get('/get-list-department' /*,verifyJwtToken.VerifyToken*/, this.usersController.listDepartment);
        this.router.post('/authenticate', this.loginController.login);
        this.router.get('/user-info', this.verifyJwtToken.VerifyToken, this.usersController.user);
    }
}
const usersRoutes = new UsersRautes();
exports.default = usersRoutes.router;
