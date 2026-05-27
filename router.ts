import express from "express";

import { createUserController } from "./src/controllers/CreateUserController";
import { readUserController } from "./src/controllers/ReadUserController";
import { updateUserController } from "./src/controllers/UpdateUserController";
import { deleteUserController } from "./src/controllers/DeleteUserController";

const router = express.Router();

router.post('/users', (req, res) => createUserController.handle(req,res));
router.get('/users', (req, res) => readUserController.handle(req,res));
router.put('/users/:id', (req, res) => updateUserController.handle(req,res));
router.delete('/users/:id', (req,res) => deleteUserController.handle(req, res));
export { router }