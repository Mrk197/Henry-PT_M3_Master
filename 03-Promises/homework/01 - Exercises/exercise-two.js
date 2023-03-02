"use strict";

const { reject } = require("async");
let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  /* exerciseUtils.readFile("poem-two/stanza-01.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });
  exerciseUtils.readFile("poem-two/stanza-02.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  }); */

  // promise version
  // Tu código acá:
  const promise1 = exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt");
  const promise2 = exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt");
  Promise.all([promise1, promise2])
    .then( stanza => 
      {
        exerciseUtils.blue(stanza[1])
        exerciseUtils.blue(stanza[0])
        console.log('done')
      }
    )
}

function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  /* let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
      if (err) exerciseUtils.magenta(new Error(err));
    });
  }); */

  // promise version
  // Tu código acá:
  exerciseUtils.promisifiedReadFile(filenames[0])
    .then(stanza1 => exerciseUtils.blue(stanza1))
    .catch(err => new Error(err))
  exerciseUtils.promisifiedReadFile(filenames[1])
    .then(stanza2 => exerciseUtils.blue(stanza2))
    .catch(err => new Error(err))
  exerciseUtils.promisifiedReadFile(filenames[2])
    .then(stanza3 => exerciseUtils.blue(stanza3))
    .catch(err => new Error(err))
  exerciseUtils.promisifiedReadFile(filenames[3])
    .then(stanza4 => exerciseUtils.blue(stanza4))
    .catch(err => new Error(err))
    exerciseUtils.promisifiedReadFile(filenames[4])
    .then(stanza5 => exerciseUtils.blue(stanza5))
    .catch(err => new Error(err))
  exerciseUtils.promisifiedReadFile(filenames[5])
    .then(stanza6 => exerciseUtils.blue(stanza6))
    .catch(err => new Error(err))
  exerciseUtils.promisifiedReadFile(filenames[6])
    .then(stanza7 => exerciseUtils.blue(stanza7))
    .catch(err => new Error(err))
  exerciseUtils.promisifiedReadFile(filenames[7])
    .then(stanza8 => {
      exerciseUtils.blue(stanza8)
      console.log('done');
    })
    .catch(err => new Error(err))
}

function problemC() {
  let fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    // tu código acá:
    return new Promise((resolve, reject) =>{
      fs.writeFile(filename, str, (err) => {
        if (err) {
          reject(err)
        }
        else{
          resolve("File written successfully")
        }
      })
    })
  }

  promisifiedWriteFile("poem-two/writedem0.txt", "texto de prueba")
  .then(res => console.log(res) )
  .catch(err => console.log(err))
}

problemC();

