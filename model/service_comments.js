const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  services: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
  date: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
});

var User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.model("Service_comment");
} else {
  User = mongoose.model("Service_comment", userSchema);
}

module.exports = User;
 