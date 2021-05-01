const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: "Blog",
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
  reply: [
    {
      text: {
        type: String,
        required: true,
      },
      userId: { type: String, required: true },
      name: { type: String, required: true },
      date: {
        type: String,
        required: true,
      },
    },
  ],
});

var User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.model("Blog_comment");
} else {
  User = mongoose.model("Blog_comment", userSchema);
}

module.exports = User;
