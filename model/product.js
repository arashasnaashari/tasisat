const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  isloole: {
    type: Boolean,
    required: true,
  },
  items: [
    {
      name: { type: String, required: true },
      jens: { type: String, required: true },
      vahed: { type: String, required: true },
      fesharkar: { type: String, required: true },
      amalgar: { type: String, required: true },
      price: { type: String, required: true },
      discount: { type: String, required: true },
    },
  ],
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  specs: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  discount_worker: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product_comments",
    },
  ],
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

var User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.model("Product");
} else {
  User = mongoose.model("Product", userSchema);
}

module.exports = User;
