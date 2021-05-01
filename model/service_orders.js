const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  worker: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  capitan: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  verify: {
    type: Boolean,
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
  worker_done: {
    type: Boolean,
    required: true,
  },
  extra_work: {
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
  service: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
  service_comment: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
});

var User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.model("Service_order");
} else {
  User = mongoose.model("Service_order", userSchema);
}

module.exports = User;
