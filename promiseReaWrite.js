const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(process.cwd(), "hello.txt");
(async () => {
  try {
    const content = await fs.readFile(filePath, "utf8");
    console.log("File content: ", content);
  } catch (error) {
    console.error(error);
  }
})();
