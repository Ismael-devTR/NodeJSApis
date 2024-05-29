const fs = require("fs");
const moment = require("moment");
const file = "hello.txt";

fs.watch(file, (eventType, fileName) => {
  const time = moment().format("MMM Do YYY, h:mm:ss a");
  return console.log(`${fileName} was updated on ${time}`);
});
