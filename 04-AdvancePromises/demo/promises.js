const fullfilled1 = new Promise((resolve, reject) => {
    resolve("Me resolvi 1");
})
/* const fullfilled2 = new Promise((resolve, reject) => {
    resolve("Me resolvi 2");
}) */

const rejected1 = new Promise((resolve, reject) => {
    reject("Me rechace 1")
})

/* const rejected2 = new Promise((resolve, reject) => {
    reject("Me rechace 2")
}) */ 


//CASE 1
fullfilled1.then(value => console.log(value))

//CASE 2
rejected1.then(
    null, //SIEMPRE SE TIENE QUE OCUPAR EL SUCCES HANDLER 
    reason => console.log(reason))

//CASE 3
fullfilled1
.then() //promesa => Promise(resolve(value))  Interamente devuelve una promesa con el valor 
.then(value => console.log(value)) 

//CASE 4
rejected1
.then(value => console.log(value)) //promesa => Promise(reject("Me rechace 1"))
.then(value => console.log(value)) //promesa => Promise(reject("Me rechace 1"))
.then(value => console.log(value)) //promesa => Promise(reject("Me rechace 1"))
.then(value => console.log(value)) //promesa => Promise(reject("Me rechace 1"))
.then(value => console.log(value)) //promesa => Promise(reject("Me rechace 1"))
.catch(reason => console.log(reason)) //"Me rechace 1"

//CASE 5 
//La promesa se rechaza y tiene errorHandler
rejected1
.then(value => console.log(value)) //promesa => Promise(resolve(value)) 
.then(value => console.log(value)) //promesa => Promise(resolve(value))
.then(
    value => console.log(value),
    reason => console.log(reason))  //"Me rechase 1" -> ahí termina 
/* .then(value => console.log(value))
.then(value => console.log(value))
.catch(err => console.log(err)) */

//CASE 6
rejected1
.then(
    value => 'holi',
    reason => reason
)
.then(value => console.log(value))

//CASE 7
fullfilled1 //promesa => "Me resolvi 1"
.then( //promesa => Promise(resolve("holi"))
    value => 'holi',
    reason => reason
)
.then(value => console.log(value))

//CASO 8 
rejected1
.then(
    value => "hola 2",
    reason => { throw reason }  //Promise(reject("Me rechace 1")) --lanza nueva promesa que se rechaza 
)
.then(
    value => console.log("succes", value),
    reason => console.log("reason", reason) //errorHandler para manejar error lanzado
)

//CASO 9
fullfilled1
.then(
    value => "hola 2",  // return "hola 2"  => Promesa(resolve('hola2')) --- no se maneja info y se retorna una promesa que necesaita ser manejada 
    reason => { throw reason }  
)
.then(
    value => console.log("succes", value),  //succesHandler de promesa retornda
    reason => console.log("reason", reason)
)