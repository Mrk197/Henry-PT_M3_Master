"use strict";

const { log } = require("async");
let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB,
  problemCx: problemC,
  problemDx: problemD,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

async function problemA() {
  // callback version
  exerciseUtils.readFile("poem-one/stanza-01.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });
  exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });

  // async await version
  // Tu código acá:
  const stanza1 = await exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt");
  exerciseUtils.blue(stanza1);
  const stanza2 = await exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt");
  exerciseUtils.blue(stanza2);

}

async function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
    });
  });

  // async await version
  // Tu código acá:
  filenames.forEach(async (file) =>{
    const stanza = await exerciseUtils.promisifiedReadFile(file);
    exerciseUtils.blue(stanza);
  });
  console.log("done");
}

async function problemC() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
    });
  });

  // async await version
  // Tu código acá:
  filenames.forEach(async (file) =>{
    const stanza = await exerciseUtils.promisifiedReadFile(file);
    exerciseUtils.blue(stanza);
  });
  console.log("done");
}

async function problemD() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  

  // async await version
  // Tu código acá:
  try {
    let randIdx = Math.floor(Math.random() * filenames.length);
    filenames[randIdx] =  await exerciseUtils.promisifiedReadFile("wrong-file-name-" + (randIdx + 1) + ".txt");
  } catch (error) {
    exerciseUtils.magenta(new Error(error));
  }
  console.log("done"); 
}
