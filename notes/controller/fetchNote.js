const knex = require("../db/knex");

const getAllNotes = async (req, res) => {
  try {
    const notes = await knex("notes").select("*");
    res.json({ notes });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

const getNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await knex("notes").select("*").where({ id }).first();
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

module.exports = { getAllNotes, getNotesById };
