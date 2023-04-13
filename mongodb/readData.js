const dbConnection = require("./mongodb");

// dbConnection().then((response)=>{
// response.find().toArray().then((data)=>{
// console.log("data of promise-----",data);
// })
// })

//----------------------OR-------------------

const main = async () => {
  let data = await dbConnection();
  data = await data.find().toArray();
  //   data = await data.find({name:"nord ce"}).toArray();
  console.log("data------->", data);
};

main();

// run on terimanl -PS C:\NodeJs\NodeJs\mongodb> nodemon .\readData.js
