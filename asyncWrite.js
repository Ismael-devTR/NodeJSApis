const fs = require("fs");
const path = require("path");
const { cwd } = require("process");

const filePath = path.join(cwd(), "hello.txt");

fs.readFile(filePath, "utf8", (err, content) => {
  if (err) {
    return console.log(err);
  }
  console.log("File content: ", content);
  const upperContent = content.toUpperCase();

  fs.writeFile(filePath, upperContent, (err) => {
    if (err) throw err;
    console.log("File Updated ");
  });
  setInterval(() => {
    process.stdout.write("******\n");
  }, 1).unref();
});
