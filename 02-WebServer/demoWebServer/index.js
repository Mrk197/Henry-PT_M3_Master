/* EJEMPLO DE PETICIÓN
const axios =require('axios');

axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response.data)); */

//SERVIDOR WEB
const http = require('http'); //módulo nativo de Node
const fs = require('fs'); //módulo que permite leer archivos 

const alumnos = [
        {
            name: "JOrge",
            email: "jorge@gmail.com"
        },
        {
            name: "Jeronimo",
            email: "jero@gmail.com"
        },
        {
            name: "Debora",
            email: "debo@gmail.com"
        }
    ];

http.createServer((request, response) => {
    /* response.writeHead(200, { 
        'Content-Type': "text/plain"
    }).end("Holis! Este es mi pimer server"); */

    if(request.url === '/alumnos'){
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify(alumnos)) //parsea de formato JSON
    }
    else if(request.url === '/users'){
        response.writeHead(200,{ "Content-Type": "text/html" })
        let miHtml = fs.readFileSync('./index.html')
        /* const alumno = 'Daniel';
        miHtml = miHtml.replace("{alumno}", alumno); //ya no esta dispoibe en esta versión */ 
        response.end(miHtml)
    }
    else{
        response.writeHead(404, {"Content-Type": "text/plain"})
        response.end("Error: not found")
    }

    console.log(request.url); //muestra la ruta a la que se hace la petición  */


}).listen(3001, 'localhost')


//DE LADO DE CLIENTE SE TRABAJA CON FORMATO JSON  -> SE TRANSFDORMA A OBJ PARA HACER PETICION A SERVIDOR
//DE LADO DE SERVIDOR SE TRABAJA CON OBJETOS -> SE TRANSFORMA A JSON PARA DAR RESPUESTA
//POR CADA REQUEST SIEMPRE HAY UNA RESPONSE 