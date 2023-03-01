const axios = require('axios');

//console.log(axios.get('https://jsonplaceholder.typicode.com/users'));  //status pending -- Promise { <pending> }

/* axios('https://jsonplaceholder.typicode.com/users')  //por default hace petición GET 
    .then(
        (response) => console.log(response.data), //seccesHandler
        (error) => console.log("Algo salió mal " + error) //errorHandler
    )
 */

const miPromesa = new Promise((resolve, reject) => {
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
    .catch(err => console.log(err)) //UNICO CATCH

//console.log(miPromesa);