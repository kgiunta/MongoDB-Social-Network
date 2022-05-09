const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../../controllers/thought");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

// /api/thoughts/:thoughtId/assignments
router.route("/:thoughtId/assignments").post(addAssignment);

// /api/thoughts/:thoughtId/assignments/:assignmentId
router.route("/:studentId/assignments/:assignmentId").delete(removeAssignment);

module.exports = router;
