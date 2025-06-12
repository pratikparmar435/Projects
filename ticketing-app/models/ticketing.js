const dotenv = require("dotenv");
dotenv.config();
const dburl = process.env.DBURL;
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(dburl);
}

main()
  .then((res) => {
    console.log("Successfully connected with database");
  })
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["open", "in-progress", "closed"],
    default: "open",
  },
  createdBy: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Users = mongoose.model("Users", userSchema);
const Tickets = mongoose.model("Tickets", ticketSchema);

module.exports = { Users, Tickets };
