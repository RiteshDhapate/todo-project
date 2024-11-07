import express from 'express';
import { loginController } from '../controllers/auth/login.controller.js';
import { registerController } from '../controllers/auth/register.controller.js';
import { registerBodyMiddleware } from '../middlewares/auth/registerBody.middleware.js';
import { loginBodyMiddleware } from '../middlewares/auth/loginBody.middleware.js';
import { createTodoController } from '../controllers/todos/createTodo.controller.js';
import { verifyToken } from '../middlewares/jwt/jwt.moddleware.js';
import { deleteTodoController } from '../controllers/todos/deleteTodo.controller.js';
import { updateTodoController } from '../controllers/todos/updateTodo.controller.js';
import { getTodos } from '../controllers/todos/getTodos.controller.js';

const route = express.Router();


// auth routes
route.post("/login",loginBodyMiddleware,loginController);
route.post("/register",registerBodyMiddleware,registerController);


// todo routes
route.get("/todos",verifyToken,getTodos);
route.post("/todos",verifyToken, createTodoController);
route.delete("/todos/:id",verifyToken,deleteTodoController);
route.put("/todos/",verifyToken,updateTodoController);
export default route;