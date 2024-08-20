const todoCreate = require("../Controllers/Todos/todoCreate");
const auth = require("../Middlewares/auth");

const todoRoutes = require("express").Router();

todoRoutes.post("/create", auth, todoCreate);

module.exports = todoRoutes;
