const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      info: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      num: {
        type: Number,
        required: true,
      },
    },
  ],
  discount: {
    type: String,
    required: true,
  },
  discount_worker: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

var User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.model("Product_order");
} else {
  User = mongoose.model("Product_order", userSchema);
}

module.exports = User;
