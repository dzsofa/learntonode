var mymodule = require("./06-module");

mymodule(process.argv[2], process.argv[3], function callback(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  data.forEach(element => {
    console.log(element);
  });
});
