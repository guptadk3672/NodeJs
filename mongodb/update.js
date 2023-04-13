const dbConnection = require("./mongodb");

const updateData = async () => {
  const db = await dbConnection();

  //   let result =await db.updateOne(
  //     { name: "pro max 14" },
  //     {
  //       $set: { name: "pro max 18" , price:40000 },
  //     }
  //   );
  let result = await db.updateMany(
    { name: "pro max 14" },
    {
      $set: { name: "pro max 18", price: 40000 },
    }
  );
  console.log("result-----", result);
};

updateData();



// PS C:\NodeJs\NodeJs\mongodb> nodemon .\update.js

// updateOne - same name ke data ho database me to sirf first data ko update krega
// updateMany - same name ke sbhi data ko update kr dega
