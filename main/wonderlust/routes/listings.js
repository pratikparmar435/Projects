const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, validateListing, isOwner } = require("../middleware.js");
const {
  index,
  renderNewForm,
  addNewListing,
  showListing,
  renderEditForm,
  editListing,
  deleteListing,
} = require("../controller/listings.js");

router
  .route("/")
  .get(wrapAsync(index))
  .post(
    isLoggedIn,
    validateListing,
    (req, res, next) => {
      console.log("req.user in POST /listings:", req.user);
      next();
    },
    wrapAsync(addNewListing)
  );

//new route
router.get("/new", isLoggedIn, renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(showListing))
  .put(isLoggedIn, isOwner, validateListing, wrapAsync(editListing));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(renderEditForm));

//delete route
router.delete("/:id/delete", isLoggedIn, isOwner, wrapAsync(deleteListing));

module.exports = router;
