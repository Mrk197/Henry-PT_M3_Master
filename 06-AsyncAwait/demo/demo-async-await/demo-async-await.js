const axios = require('axios');


async function asyncFunction() {
    const data = await axios.get("https://rickandmortyapi.com/api"); //se detiene la ejecución 
    /* console.log(data.data);
    console.log("teminé"); */
    return data.data; //devuelve una promesa
}

console.log(asyncFunction());
asyncFunction().then(res => console.log(res));

/* const asyncFunction = async () = {
    
};
 */

//No se detiene la ejecución del código 
/* axios.get("https://rickandmortyapi.com/api")
.then(
    res => {
        console.log(res.data);
    },
    error => {
        console.log(error);
    }
)
console.log("teminé"); */