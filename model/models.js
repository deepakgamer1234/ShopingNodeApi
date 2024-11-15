const mongoose = require("mongoose");
const productCat = mongoose.Schema({
  title: {
    type: String,
    requried: true,
  },
  imageUrl: {
    type: String,
    requried: true,
  },
  id: {
    type: Number,
    requried: true,
  },
});

const ProductCategory = mongoose.model("ProductCategory", productCat);

module.exports = ProductCategory;