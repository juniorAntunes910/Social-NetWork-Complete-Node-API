import express from "express";
//user
import { createUserController } from "./src/controllers/users/CreateUserController";
import { readUserController } from "./src/controllers/users/ReadUserController";
import { updateUserController } from "./src/controllers/users/UpdateUserController";
import { deleteUserController } from "./src/controllers/users/DeleteUserController";
//profile
import { createProfileController } from "./src/controllers/profile/CreateProfileController";
import { readProfileCOntroller } from "./src/controllers/profile/ReadProfileController";
import { updateProfileController } from "./src/controllers/profile/UpdateProfileController";
import { deleteProfileController } from "./src/controllers/profile/DeleteProfileController";
//Post
import { createPostController } from "./src/controllers/posts/CreatePostController";
import { readPostController } from "./src/controllers/posts/ReadPostController";
import { updatePostController } from "./src/controllers/posts/UpdatePostController";
import { deletePostController } from "./src/controllers/posts/DeletePostService";

const router = express.Router();


//users
router.post('/users', (req, res) => createUserController.handle(req,res));
router.get('/users', (req, res) => readUserController.handle(req,res));
router.put('/users/:id', (req, res) => updateUserController.handle(req,res));
router.delete('/users/:id', (req,res) => deleteUserController.handle(req, res));


//profile
router.post('/profiles', (req, res) => createProfileController.handle(req, res) );
router.get('/profiles', (req, res) => readProfileCOntroller.handle(req,res));
router.put('/profiles/:id', (req, res) => updateProfileController.handle(req, res));
router.delete('/profiles/:id', (req, res) => deleteProfileController.handle(req, res));


//Post
router.post('/posts', (req, res) => createPostController.handle(req, res));
router.get('/posts', (req, res) => readPostController.handle(req,res));
router.put('/posts/:id', (req, res) => updatePostController.handle(req,res));
router.delete('/posts/:id', (req, res) => deletePostController.handle(req,res));

export { router }
//teste