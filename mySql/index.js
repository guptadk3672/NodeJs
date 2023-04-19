const express = require("express");

const connection = require("./config");

const app = express();
app.listen(5000);
app.use(express.json());

// GET api

app.get("/", (req, res) => {
  connection.query("select * from users", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

// POST api
app.post("/", (req, res) => {
  // const data = {
  //   firstname: "Jony",
  //   lastname: "Walker",
  //   age: 16,
  //   mob: 963582233,
  // };
  const data = req.body;

  connection.query("INSERT INTO users SET ?", data, (err, result, fields) => {
    if (err) err;
    res.send(result);
  });
});

// PUT static update
app.put("/", (req, res) => {
  const data = ["jack", "Kumar", "40", 1];
  connection.query(
    "UPDATE users SET firstname = ? ,lastname =?, age=? where ID = ?",
    data,
    (err, result, fields) => {
      if (err) err;
      res.send(result);
    }
  );
});

// PUT dynamic update
app.put("/:ID", (req, res) => {
  const data = [
    req.body.firstname,
    req.body.lastname,
    req.body.age,
    req.body.mob,
    req.params.ID,
  ];
  connection.query(
    "UPDATE users SET firstname = ? ,lastname =?, age=?,mob=? where ID = ?",
    data,
    (err, result, fields) => {
      if (err) err;
      res.send(result);
    }
  );
});

app.delete("/:ID", (req, res) => {
  connection.query(
    "DELETE FROM users WHERE ID=" + req.params.ID,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});
