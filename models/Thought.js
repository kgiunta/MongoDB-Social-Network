const mongoose = require("mongoose");
const reactionsSchema = require("./Reaction");

const thoughtsSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [reactionsSchema],
});

thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
const Thought = mongoose.model("Thought", thoughtsSchema);

module.exports = Thought;
