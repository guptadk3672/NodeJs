const dbConnection = require("./mongodb");

const insert = async () => {
  const db = await dbConnection();
  const result = await db.insertMany([
    {
      name: "note 5",
      brand: "vivo",
      price: 350,
      category: "mobiles",
    },
    {
      name: "xr",
      brand: "apple",
      price: 1350,
      category: "mobiles",
    },
    {
      name: "prime 10",
      brand: "oppo",
      price: 460,
      category: "mobiles",
    },
  ]);

  console.log("result------->", result);

  if (result.acknowledged) {
    console.log("data inserted....");
  }
};

insert();

// PS C:\NodeJs\NodeJs\mongodb> nodemon .\createData.js
