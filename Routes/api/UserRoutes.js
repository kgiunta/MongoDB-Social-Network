const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");
const User = require("../../models/User");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// // /api/students/:studentId/assignments
router.route("/:userId/friends/:friendId").post(addFriend);

router.route("/:userId/friends/:friendId").delete(deleteFriend);

// // /api/students/:studentId/assignments/:assignmentId
// router.route("/:userId/friends/:friendId").delete(delete);

module.exports = router;
