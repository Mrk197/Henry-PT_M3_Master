const express = require("express");
const morgan = require("morgan");
const usersRouter = require("./usersRouter");

const server = express();

server.use("/", (req,res, next) =>{
    console.log("estamos pasando por este middleware");
    next();
});

server.use(morgan("dev"));  //muestra en consola Ej.: GET /alumnos 404 5.724 ms - 146

server.use("/users", usersRouter)
// get /users
// post /users
// get /users/1

server.listen("3001", () => {
    console.log("El servidor esta funcionando en el puerto 3001");
});