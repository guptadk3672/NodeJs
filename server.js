// const http = require("http");
// http.createServer((req, res) => {
//     res.write("Hello this is dinesh gupta");
//     res.end();
//   })
//   .listen(5500);

//------------------- or ------------

const http = require("http");

const dataControl = (req, res) => {
  res.write("Hello this is jony");
  res.end();
};

http.createServer(dataControl).listen(5500);
