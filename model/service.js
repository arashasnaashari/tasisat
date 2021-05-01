const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  questions: {
    type: String,
    required: true,
  },
  faq: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service_comments",
    },
  ],
});

var User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.model("Service");
} else {
  User = mongoose.model("Service", userSchema);
}

module.exports = User;
