const mongoose = require("mongoose");

// 1. create----------
// const saveInDB = async () => {
//   await mongoose.connect("mongodb://localhost:27017/e-comm");
//   const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String,
//   });

//   const ProductsModel = mongoose.model("products", ProductSchema);
//   let data = new ProductsModel({
//     name: "Motorola",
//     price: 9000,
//     brand: "prime ultra",
//     category: "mobiles",
//   });
//   let result = await data.save();
//   console.log("result-------", result);
// };
// saveInDB()

//2 update-----------------
// const updateInDb = async () => {
//   await mongoose.connect("mongodb://localhost:27017/e-comm");
//   const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String,
//   });
//   const ProductsModel = mongoose.model("products", ProductSchema);
//   let data = await ProductsModel.updateOne(
//     { name: "Moto 9" },
//     {
//       $set: { price: 45678 },
//     }
//   );
//   console.log("update data------", data);
// };

// updateInDb();

// // 3. delete--------

// const deleteInDb = async () => {
//   await mongoose.connect("mongodb://localhost:27017/e-comm");
//   const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String,
//   });
//   const ProductsModel = mongoose.model("products", ProductSchema);
//   let data = await ProductsModel.deleteOne({ name: "Moto 9" });
//   console.log("delete data------", data);
// };

// deleteInDb();

// 4 . read---------

const readInDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
  const ProductsModel = mongoose.model("products", ProductSchema);
//   let data = await ProductsModel.find();        // for all data
  let data = await ProductsModel.find({name:"note 5"});   // for single data
  console.log("find data------", data);
};

readInDb();
