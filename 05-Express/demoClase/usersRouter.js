const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
    console.log(req.query);
    const {name} = req.query;
    //solo / => DEVUELVE TODOS LOS USERS
    if(!name) return res.send("todos los users");
    // /name=Jorge => BUSCA USUARIO JOERGE 
    return res.send(`Te duelvo el usuario ${name}`);
})

usersRouter.post("/", (req, res) => {
    console.log(req.body);
    const {name, email, password} =req.body;
    if (name && email && password) {
        res.status(200).send("Datos completos")
    }
    else{
        res.status(400).send("Faltan datos")
    }
})

usersRouter.get("/:id", (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    res.send(`Estoy en el DETALLE DEL USUARIO ${id}`)
})


module.exports = usersRouter;
