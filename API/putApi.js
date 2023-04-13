// data ko update krwane ke lye put api ka use krte h but post api me bhi hum data update krwa skte h

const express = require("express");
const dbConnection = require("../mongodb/mongodb");

const app = express();
app.use(express.json());

app.put("/", async (req, res) => {
  // console.log(req.body);
  let data = await dbConnection();
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: req.body }
  );
  res.send(result);
});

app.listen(5000);

//go to postman
