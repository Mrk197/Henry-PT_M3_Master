const axios = require('axios');

//console.log(axios.get('https://jsonplaceholder.typicode.com/users'));  //status pending -- Promise { <pending> }

/* axios('https://jsonplaceholder.typicode.com/users')  //por default hace petición GET 
    .then(
        (response) => console.log(response.data), //seccesHandler
        (error) => console.log("Algo salió mal " + error) //errorHandler
    )
 */


//CREANDO MI PROMESA 
/* const miPromesa = new Promise((resolve, reject) => {
    if (3 < 5) {
        resolve('Mi promesa se resolvió, todo OK')
    }
    else{
        reject('Salió todo mal')
    }
    
})

miPromesa
    .then(
        response => response,
        //error => console.log(error
    )
    .then(response => console.log(response + ' segundo then'))//SE PUEDE TENER ENCADENACIÓN SE THEN - se va pasando la info
    .catch(err => console.log(err)) //UNICO CATCH */

//console.log(miPromesa);

/* let username = [];

let response = axios('https://jsonplaceholder.typicode.com/users')  //por default hace petición GET 
        .then( response => response.data)
        .then(data => data.map(user => user.username))
        .catch(err => console.log(err))
    
console.log(response); */



//PROMESA CON FETCH
fetch('https://jsonplaceholder.typicode.com/users')  //cuando se usa del lado del servidor FETCH se tiene que instalar
    .then( response => response.json())
    .then( response => response.data)
    .then(data => data.map(user => user.username))
    .catch(err => console.log(err))