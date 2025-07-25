const Listing = require("../models/listing");
const axios = require("axios");
const mapKey = process.env.MAPTILER_KEY;

const index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

const renderNewForm = (req, res) => {
  res.render("listings/new.ejs", { MAPTILER_KEY: process.env.MAPTILER_KEY });
};

const addNewListing = async (req, res, next) => {
  const response = await axios.get(
    `https://api.maptiler.com/geocoding/${req.body.listing.location}.json`,
    {
      params: {
        key: mapKey,
        limit: 1,
      },
    }
  );
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = response.data.features[0].geometry;
  let savedListing = await newListing.save();
  console.log(savedListing);
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

const showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing does not exist");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

const renderEditForm = async (req, res) => {
  const { id } = req.params;
  const toEditListing = await Listing.findById(id);
  if (!toEditListing) {
    req.flash("error", "Listing does not exist");
    return res.redirect("/listings");
  }

  let originalImgUrl = toEditListing.image.url;
  originalImgUrl = originalImgUrl.replace("/upload", "/upload/h_250,w_300");
  res.render("listings/edit.ejs", { toEditListing, originalImgUrl });
};

const editListing = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("updating", "Listing updated");
  res.redirect(`/listings/${id}`);
};

const deleteListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("deleting", "Listing deleted successfully!");
  res.redirect("/listings");
};

module.exports = {
  index,
  renderNewForm,
  addNewListing,
  showListing,
  renderEditForm,
  editListing,
  deleteListing,
};
