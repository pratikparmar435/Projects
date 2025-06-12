const knex = require("../db/knex"); // Make sure this path is correct

const addNewNote = async (req, res) => {
  try {
    const { title, body } = req.body;
    if (!title || !body) {
      return res.status(400).json({ error: "Title and body are required" });
    }
    const [id] = await knex("notes").insert({
      title,
      body,
      created_at: new Date(), // optional; DB default also works
    });
    res.status(201).json({ message: "Note added", id });
  } catch (err) {
    console.error("Insert Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const updateNote = async (req, res) => {
  let { title, body, created_at } = req.body;
  let { id } = req.params;
  try {
    if (!title || !body || !created_at) {
      return res.status(400).json({ error: "Every field required" });
    }
    const rowUpdated = await knex("notes")
      .where({ id })
      .update({ title, body, created_at });
    if (rowUpdated === 0) {
      return res.status(404).json({ error: "Note not found" });
    }
  } catch (err) {
    res.status(505).json({ erorr: "Something went wrong!" });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await knex("notes").where({ id }).del();
    if (deleted === 0) {
      return res.status(404).json({ error: "Note not found!" });
    }
    res.json({ msg: "Deletion success!" });
  } catch (err) {
    res.send("something went wrong");
  }
};

module.exports = { addNewNote, updateNote, deleteNote };
