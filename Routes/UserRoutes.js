const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController");
const User = require("../models/User");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

module.exports = router;

// GET all users
module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
};

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }

// PUT to update a user by its _id

// DELETE to remove user by its _id
