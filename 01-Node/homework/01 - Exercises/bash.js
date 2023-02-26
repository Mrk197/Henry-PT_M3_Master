const process = require("process");
const commands = require("./commands/index.js");

const print = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
    var args = data.toString().trim().split(" ");
    console.log("args", args);
    let cmd = args.shift();
    // commands[cmd]
    // ? commands[cmd]( print, args.join(' '))
    // :print(`command not found: ${cmd}`)
    if(commands.hasOwnProperty(cmd)){
      commands[cmd](print, args.join(' '))
    }
    else {
      print(`command not found: ${cmd}`)
    }
  });
}  

module.exports = {
  print,
  bash,
};
