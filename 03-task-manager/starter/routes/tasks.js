const express = require("express");
const {
  getTask,
  getSingleTask,
  postTask,
  deleteTask,
  updateTask,
} = require("../controller/controller");

const router = express.Router();

router.route("/").get(getTask).post(postTask);

router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
