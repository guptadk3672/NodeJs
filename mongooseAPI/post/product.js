const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
  _id:String
});

module.exports = mongoose.model("products", productSchema);
