const mongoose = require('mongoose');

// Schema for each item in the category
const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Schema for each product category
const categorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
  },
  items: [itemSchema],  // Array of items in the category
});

const product = mongoose.model("shopData", categorySchema);

module.exports = product;
