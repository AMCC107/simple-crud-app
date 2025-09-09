const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, "Please enter product quantity"],
    default: 0,
    min: [0, "Quantity cannot be negative"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    default: 0,
    min: [0, "Price cannot be negative"],
  },
  image: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
