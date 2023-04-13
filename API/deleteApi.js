const express = require("express");
const dbConnection = require("../mongodb/mongodb");
const mongodb = require("mongodb");

const app = express();
app.use(express.json());

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await dbConnection();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(5000);

//go to postman
