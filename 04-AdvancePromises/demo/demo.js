// MANEJADORES EN EL THEN
/* const p = new Promise((resolve, reject) => {
    reject("error");
})
p.then(() => {}, () => {})

handlers = [{
    onResolve: () => {},
    onReject: () => {},
}] */

// THEN Y CATCH  
/* const p = new Promise((resolve, reject) => {
    reject("error");
})
p.then(() => {})
p.then(() => {})
p.catch(() => {
    console.log("catch");
})

handlers = [
    {
        onResolve: () => {},
        onReject: false,
    },
    {
        onResolve: () => {},
        onReject: false,
    },
    {
        onResolve: () => {},
        onReject: () => {
            console.log("catch");
        },
    }
] */


//
const p = new Promise((resolve, reject) => {
    reject("error");
})
.then(() => {})
.then(() => {})
.then(() => {})
p.catch(() => {
    console.log("catch");
})

//Manejadores del primer then la promesa p
handlers = [{
    onResolve: () => {},
    onReject: false,
    promise  //promesa que retorna then 
}] 