const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("Todo ok, ruta /")
});

server.get("/users", (req, res) => {
    res.send("Estamos en la ruta users")
});

server.listen("3001", () => {
    console.log("El servidor esta funcionando en el puerto 3001");
});