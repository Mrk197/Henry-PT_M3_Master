const { query } = require("express");
const express = require("express");
const { post } = require("../../../demoClase/usersRouter");

let publications = [];
let id = 0;

const server = express();

server.use(express.json());

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
});

server.get("/posts", (req, res) =>{
    const {author, title} = req.query;
    console.log("AT ", author, title);
    const searchAutorTitle = publications.filter(post => post.author === author && post.title === title);
    console.log(publications);
    console.log("searchAutorTitle", searchAutorTitle);
    if (searchAutorTitle !== []) {
        res.status(200).send(searchAutorTitle);
    }
    else{
        res.status(400).send({
            error:
              "No existe ninguna publicación con dicho título y autor indicado",
          })
    }
});

server.get("posts/:author", (req, res) => {
    const {author} = req.params;
    const autorSeach = publications.filter( post => post.author === author)
    if(autorSeach){
        console.log("autorSeach",autorSeach);
        res.send(autorSeach);
    }
    else{
        res.status(400).send({
            error:
              "No existe ninguna publicación del autor indicado",
          });
    }
});

server.put("/posts/:id", (req, res) =>{
    const id = req.params.id;
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
});

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
