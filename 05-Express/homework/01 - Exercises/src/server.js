const { query } = require("express");
const express = require("express");
const { post } = require("../../../demoClase/usersRouter");

let publications = [];
let id = 0;

const server = express();

server.use(express.json());

//ejercicio 1
server.post("/posts", (req, res) => {
    const {author, title, contents} = req.body;
    if (author && title && contents) {
        const newPost = {
            id: ++id,
            author: author,
            title: title,
            contents: contents
        }
        publications.push(newPost);
        console.log(publications);
        res.status(200).send(newPost);
        //res.status(200).send(JSON.stringify(newPost));
    }
    else{
        res.status(400).send({
            error:
              "No se recibieron los parámetros necesarios para crear la publicación",
          });
          /* res.status(400).send(JSON.stringify({
            error:
              "No se recibieron los parámetros necesarios para crear la publicación",
          })); */
    }
})
//ejercicio 2
server.get("/posts", (req, res) =>{
    const {author, title} = req.query;
    console.log("AT ", author, title);
    const searchAutorTitle = publications.filter(post => post.author === author && post.title === title);
    if (searchAutorTitle) {
        console.log("searchAutorTitle", searchAutorTitle);
        res.status(200).send(searchAutorTitle);
    }
    else{
        res.status(400).send({
            error:
              "No existe ninguna publicación con dicho título y autor indicado",
          })
    }
})
//ejercicio 3
server.get("posts/:author", (req, res) => {
    const author = req.params.author;
    console.log("params", params);
    const autorSeach = publications.filter( post => post.author === author.toString)
    if(autorSeach.length > 0){
        console.log("autorSeach",autorSeach);
        res.send(autorSeach);
    }
    else{
        res.status(400).send(JSON.stringify({
            error: "No existe ninguna publicación del autor indicado",
          }) );
    }
})
//ejercicio 4
server.put("/posts/:id", (req, res) =>{
    const {id} = req.params;
    if (id) {
        const {title, contents} = req.body;
        if (title && contents) {
            for (const post of publications) {
                if (post.id === id) {
                    post.title= title;
                    post.contents= contents;
                }
            }
            res.status(200).send(publications.filter(post => post.id === id));
        }
        else{
            res.status.send(400).send({
                error: 
                    "No se recibieron los parámetros necesarios para modificar la publicación"
            });
        }
    }
    else{
        res.status.send(400).send({
            error:
              "No se recibió el id correcto necesario para modificar la publicación",
          });
    }
})
//ejercicio 5
server.delete("/posts/:id", (req, res) => {
    const {id} = req.params;
    if (id) {
        const newPublications = publications.filter(post => post.id !== id );
        if (publications.length === newPublications.length) {
            res.status(404).send({error: "No se recibió el id correcto necesario para eliminar la publicación"});
        }
        else{
            publications = newPublications;
            res.status(200).send({ success: true })
        }
    }   
    else{
        res.status(404).send({error: "No se recibió el id de la publicación a eliminar"});
    }
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
