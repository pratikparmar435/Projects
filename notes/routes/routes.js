const express = require("express");
const router = express.Router();
const { getAllNotes, getNotesById } = require("../controller/fetchNote");
const {
  addNewNote,
  updateNote,
  deleteNote,
} = require("../controller/addUpdateDeleteNote");

router.route("/notes").get(getAllNotes);
router.route("/notes/:id").get(getNotesById);
router.route("/notes").post(addNewNote);
router.route("/notes/:id").put(updateNote);
router.route("/notes/:id").delete(deleteNote);

module.exports = router;
