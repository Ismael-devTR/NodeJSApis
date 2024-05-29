const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "hello.txt");
fs.readFile(filePath, "utf8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log("File contents: ", contents);
  const upperContents = contents.toUpperCase();
  fs.writeFileSync(filePath, upperContents);
  console.log("File updated");
});
