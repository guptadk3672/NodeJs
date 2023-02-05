const fs = require("fs");

const path = require("path");
// console.log("path----->",path);

const dirPath = path.join(__dirname, "fileListFolder");

console.log("dirPath------->", dirPath);

// create files in folder
for (i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirPath}/fileExample${i}.txt`, "this is dinesh gupta");
}

// read files

fs.readdir(dirPath, (err, files) => {
  files.forEach((item) => {
    console.log("file name is--->", item);
  });
});
