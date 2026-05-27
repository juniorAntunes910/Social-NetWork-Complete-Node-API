import express from "express";
//user
import { createUserController } from "./src/controllers/users/CreateUserController";
import { readUserController } from "./src/controllers/users/ReadUserController";
import { updateUserController } from "./src/controllers/users/UpdateUserController";
import { deleteUserController } from "./src/controllers/users/DeleteUserController";
//profile
import { createProfileController } from "./src/controllers/profile/CreateProfileController";
const router = express.Router();


//users
router.post('/users', (req, res) => createUserController.handle(req,res));
router.get('/users', (req, res) => readUserController.handle(req,res));
router.put('/users/:id', (req, res) => updateUserController.handle(req,res));
router.delete('/users/:id', (req,res) => deleteUserController.handle(req, res));


//profile
router.post('/profiles', (req, res) => createProfileController.handle(req, res) );

export { router }