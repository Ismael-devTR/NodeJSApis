const fs = require("fs");
const path = require("path");
const filePath = path.join(process.cwd(), "hello.txt");

const content = fs.readFileSync(filePath, "utf8");
console.log("File Contents: ", content);
fs.writeFileSync(filePath, content.toUpperCase());
console.log("File updated ");
