var http = require("http");

http.get(process.argv[2], result => {
  result.setEncoding("utf8");
  result.on("error", console.error);
  result.on("data", body => {
    console.log(body);
  });
});
