const moment = require("moment");
const fs = require("fs");

const file = "hello.txt";

fs.watchFile(file, (current, previous) => {
  const time = moment(current.mtime).format("MMM Do YYY, h:mm:ss a");
  return console.log(`${file} was updated on ${time}`);
});
