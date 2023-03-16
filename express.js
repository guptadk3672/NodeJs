// const express = require("express");
// const path = require("path")
// const app = express();
// const port = 3000;

// // app.get("", (req, res) => res.send("This is Home Page!"));
// // app.get("/about", (req, res) => res.send("This is About Page!"));
// // app.get("/help", (req, res) => res.send("This is help Page!"));

// const htmlFolderPath = path.join(__dirname,'html')
// console.log("__dirname----->",__dirname);
// console.log("htmlFolderPath----->",htmlFolderPath);

// app.use(express.static(htmlFolderPath));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// // http://localhost:3000/about.html

// //--------*****---------remove extension (about.html) from server------------------

// const express = require("express");
// const path = require("path")
// const app = express();
// const port = 3000;

// const htmlFolderPath = path.join(__dirname,'html')
// console.log("__dirname----->",__dirname);
// console.log("htmlFolderPath----->",htmlFolderPath);

// // app.use(express.static(htmlFolderPath));

// app.get('',(req,resp)=>{
//     resp.sendFile(`${htmlFolderPath}/index.html`)
// })
// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${htmlFolderPath}/about.html`)
// })
// app.get('*',(req,resp)=>{
//     resp.sendFile(`${htmlFolderPath}/404.html`)
// })

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// // http://localhost:3000/about

//--------*****---------Template Engine for Dynamic Pages------------------

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/profile", (req, resp) => {
  const user = {
    name: "Dinesh Gupta",
    email: "gupta@gmail.com",
    city: "jaipur",
    skills: ["php", "JS", "c++", "java", "node"],
  };
  resp.render("profile", { user });
});

app.get("/login", (req, resp) => {
  resp.render("login");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// http://localhost:3000/profile
// http://localhost:3000/login
