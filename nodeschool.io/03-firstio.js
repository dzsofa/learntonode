var fs = require("fs");

var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var fileLines = str.split("\n");

console.log(fileLines.length - 1);
