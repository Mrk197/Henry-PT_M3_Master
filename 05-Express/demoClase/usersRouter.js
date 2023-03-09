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
    res.send("Estoy en el POST de Users")
})

usersRouter.get("/:id", (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    res.send(`Estoy en el DETALLE DEL USUARIO ${id}`)
})


module.exports = usersRouter;
