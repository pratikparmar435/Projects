const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wonderlust");
}

main()
  .then((res) => console.log("Connection to database successful"))
  .catch((err) => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "684fa8901265f89a1dbe24c6",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized!");
};

initDB();
