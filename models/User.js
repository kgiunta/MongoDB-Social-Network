const mongoose = require("mongoose");
const { Schema } = mongoose;

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const genreSchema = new mongoose.Schema({
  username: { type: String, unique: true, trim: true, required: true },
  // need to add trim?
  email: {
    type: String,
    required: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: { type: Schema.Types.ObjectId, ref: "Thought" },
  friends: { type: Schema.Types.ObjectId, ref: "User" },
});

// const friendCount =

// const Genre = mongoose.model("Genre", genreSchema);

// const handleError = (err) => console.error(err);

// // Will add data only if collection is empty to prevent duplicates
// // More than one document can have the same name value
// Genre.find({}).exec((err, collection) => {
//   if (collection.length === 0) {
//     Genre.insertMany(
//       [
//         { name: "Kids" },
//         { name: "Kids" },
//         { name: "Kids" },
//         { name: "Romance" },
//         { name: "Mystery" },
//         { name: "Contemporary" },
//         { name: "Biography" },
//       ],
//       (insertErr) => {
//         if (insertErr) {
//           handleError(insertErr);
//         }
//       }
//     );
//   }
// });

module.exports = Genre;
