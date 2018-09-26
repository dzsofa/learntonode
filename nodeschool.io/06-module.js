var fs = require("fs");
const path = require("path");

module.exports = function(directory, fileExt, callback) {
  fs.readdir(directory, "utf8", function(err, data) {
    if (err) {
      return callback(err);
    }
    var filter = "." + fileExt;

    return callback(
      null,
      data.filter(element => filter === path.extname(element))
    );
  });
};
