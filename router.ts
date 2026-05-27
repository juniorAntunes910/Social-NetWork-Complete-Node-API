import express from "express";

import { createUserController } from "./src/controllers/CreateUserController";
import { readUserController } from "./src/controllers/ReadUserController";


const router = express.Router();

router.post('/users', (req, res) => createUserController.handle(req,res));
router.get('/users', (req, res) => readUserController.handle(req,res));
export { router }