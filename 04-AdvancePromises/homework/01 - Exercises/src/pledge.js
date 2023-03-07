'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
function $Promise(executor) {
    if (typeof executor !== "function") {
        throw new TypeError("executor no es una function")
    }
    this._state = "pending";
    this._value = undefined;
    this._handlerGroups = [];

    executor(
        (data)=>{this._internalResolve(data)},
        (data)=>{this._internalReject(data)}
        /* this._internalResolve.bind(this), this._internalReject.bind(this) */
    );
}

$Promise.prototype._internalResolve = function (data) {
    if (this._state === "pending") {
        this._state = "fulfilled";
        this._value = data;
        this._callHandlers();
    }    
};

$Promise.prototype._internalReject = function (data) {
    if (this._state === "pending") {
        this._state = "rejected";
        this._value = data;
        this._callHandlers();
    }   
};

$Promise.prototype.then = function (successCb, errorCb) {
    this._handlerGroups.push({
        successCb: typeof successCb === "function" ? successCb : false, 
        errorCb: typeof errorCb === "function" ? errorCb: false,
    })

    this._callHandlers();
};

$Promise.prototype._callHandlers = function () {
    if (this._state !== "pending") {
        while (this._handlerGroups.length) {
            const handlers = this._handlerGroups.shift();

            if (this._state === "fulfilled") {
                if (handlers.successCb) {
                    handlers.successCb(this._value);
                }
            }
        }
    }
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
