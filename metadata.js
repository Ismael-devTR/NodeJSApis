const fs = require("fs");
const file = process.argv[2];

function printMetadata(file) {
  try {
    const fileStats = fs.statSync(file);
    console.log(fileStats);
  } catch (error) {
    console.log("Error in file");
  }
}

printMetadata(file);
