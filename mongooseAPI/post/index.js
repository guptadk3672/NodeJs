const express = require("express");

require("./config");

const Product = require("./product");

const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  // console.log(req.body);
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Product.deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Product.updateOne(
    req.params,

    {
      $set: req.body,
    }
  );
  res.send(data);
});
app.put("/update", async (req, res) => {
  console.log(req.body);
  let data = await Product.updateOne(
    { name: req.body.name },

    {
      $set: req.body,
    }
  );
  res.send(data);
});

app.listen(5000);

// go to postman - http://localhost:5000/create

// delete method ke andr ID query params me bhejnege or jb update krna ho to query params me bhi bhej skte h or body ke andr bhi
