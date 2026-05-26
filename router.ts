import express from "express";

import { createUserController } from "./src/controllers/CreateUserController";


const router = express.Router();

router.post('/users', (req, res) => createUserController.handle(req,res));

export { router }