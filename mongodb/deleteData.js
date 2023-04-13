const dbConnection = require("./mongodb");

const deleteData = async () => {
  const db = await dbConnection();

  let result = await db.deleteOne({ name: "xr" });
  //   let result = await db.updateMany(
  //     { name: "pro max 14" }
  //   );
  console.log("result-----", result);
};

deleteData();

// PS C:\NodeJs\NodeJs\mongodb> nodemon .\deleteData.js

// deleteOne - same name ke data ho database me to sirf first data ko delete krega
// deleteMany - same name ke sbhi data ko delete kr dega
//* database me kitne data delete hue ye information console se pta lgti h (result----- { acknowledged: true, deletedCount: 1 }) , deleteCount me pta lgta h kitne data delete hue agr data us naam se nahi ho to deletedCount 0 aayega
