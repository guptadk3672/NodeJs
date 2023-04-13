const express = require("express");
const dbConnection = require("../mongodb/mongodb");

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  // console.log(req.body);
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
  res.send(result);
});

app.listen(5000);

//go to postman

// req se body get krne ke lye hum kya use krenge - node version 4.6 se phle body-parser use krte the lekin ab (express.json()) use krte h
