const process = require("process");
const commands = require("./commands/index.js");

function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
    var args = data.toString().split(" ");
    console.log("args", args);
    let cmd = args[0];
    for(const prop in commands){
      if (cmd === prop) {
        commands[cmd](print, args);
      }
      else{
        print(`command not found: ${cmd}`);
      }
    }
  });
}

function print(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}  

module.exports = {
  print,
  bash,
};
