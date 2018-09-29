var http = require("http");

http.get(process.argv[2], result => {
  result.setEncoding("utf8");

  var charCount = 0;
  var lines = "";

  result.on("data", body => {
    charCount += body.length;
    lines += body;
  });

  result.on("end", () => {
    console.log(charCount);
    console.log(lines);
  });
});
