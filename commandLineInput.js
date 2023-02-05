const fs = require("fs");
const input = process.argv;
console.log("process.argv------>", process.argv);

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid input");
}


// in terminal for Add--  node .\commandLineInput.js add CLIexample.txt 'this is dinesh gupta'
// in terminal for Remove--  node .\commandLineInput.js remove CLIexample.txt