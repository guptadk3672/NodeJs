// // ------------------- Application Level Middleware-----------------------

// const express = require("express");
// const app = express();
// const port = 3000;

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Please provide Age.....");
//   } else if (req.query.age < 18) {
//     resp.send("Please provide Age.....");
//   } else {
//     next();
//   }
// };

// app.use(reqFilter);

// app.get("/", (req, resp) => {
//   resp.send("Welcome to Home Page");
// });
// app.get("/user", (req, resp) => {
//   resp.send("Welcome to User Page");
// });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// // http://localhost:3000/
// // http://localhost:3000/user
// // http://localhost:3000/?age=10
// // http://localhost:3000/user/?age=10
// // http://localhost:3000/?age=19
// // http://localhost:3000/user/?age=19




// ------------------- Route Level Middleware-----------------------


const express = require("express");
const app = express();
const port = 3000;

const reqFilter = require('./middlewareFilter')
const Route = express.Router();

Route.use(reqFilter)
// app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("Welcome to Home Page");
});
// app.get("/user",reqFilter, (req, resp) => {
//   resp.send("Welcome to User Page");
// });
app.get("/user", (req, resp) => {
  resp.send("Welcome to User Page");
});
Route.get("/about", (req, resp) => {
  resp.send("Welcome to About Page");
});
Route.get("/contact", (req, resp) => {
  resp.send("Welcome to Contact Page");
});


app.use('/',Route)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// http://localhost:3000/
// http://localhost:3000/?age=19
// http://localhost:3000/?age=10
// http://localhost:3000/user
// http://localhost:3000/user/?age=10
// http://localhost:3000/user/?age=19
// http://localhost:3000/about/?age=19
// http://localhost:3000/contact
// http://localhost:3000/contact/?age=19
