const express = require("express");
const morgan = require("morgan");

const server = express();

server.use("/", (req,res, next) =>{
    console.log("estamos pasando por este middleware");
    next();
});

server.use(morgan("dev"));

server.get("/", (req, res) => {
    res.send("Todo ok, ruta /")
});

server.get("/users", (req, res) => {
    res.send("Estamos en la ruta users")
});

server.get("/posts", (req, res) => {
    res.send("Estamos en la ruta posts")
});

server.listen("3001", () => {
    console.log("El servidor esta funcionando en el puerto 3001");
});