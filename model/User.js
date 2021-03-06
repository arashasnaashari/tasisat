const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  product_orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product_orders",
    },
  ],
  service_orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service_orders",
    },
  ],
  bedehi: {
    type: Number,
    required: true,
  },
  talab: {
    type: Number,
    required: true,
  },
});

var User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.model("User");
} else {
  User = mongoose.model("User", userSchema);
}

module.exports = User;
