var fs = require("fs");
const path = require("path");

var dir = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dir, "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  for (var i = 0; i < data.length; i++) {
    if (path.extname(data[i]) === ext) {
      console.log(data[i]);
    }
  }
});
