const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");
const User = require("../../models/User");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// // /api/students/:studentId/assignments
// router.route('/:userId/assignments').post(addAssignment);

// // /api/students/:studentId/assignments/:assignmentId
// router.route("/:userId/friends/:friendId").delete(removeAssignment);

module.exports = router;