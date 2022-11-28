const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  name: String,
  img: String,
  cal: Number,
  price: Number
});

const FoodModel =  mongoose.model("foods",foodSchema);

module.exports = FoodModel;
