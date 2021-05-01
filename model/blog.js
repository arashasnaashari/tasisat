const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Blog_comment",
    },
  ],
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
  date: {
    type: String,
    required: true,
  },
});

var User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.model("Blog");
} else {
  User = mongoose.model("Blog", userSchema);
}

module.exports = User;
