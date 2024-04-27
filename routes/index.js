const express = require("express");

const userController = require("../controllers/userController");
const trainController = require("../controllers/trainController");
const bookingController = require("../controllers/bookingController");

const { isAdmin, fetchUser } = require("../middleware/auth");
const {
  validateUserAuth,
  validateTrainCreation,
  validateBookingCreation,
} = require("../middleware/validator");

const router = express.Router();

router.post("/register", validateUserAuth, userController.register);
router.post("/login", validateUserAuth, userController.login);

router.post("/train", validateTrainCreation, isAdmin, trainController.create);
router.get("/train", trainController.get);
router.put("/train/:id", isAdmin, trainController.update);

router.post(
  "/booking",
  validateBookingCreation,
  fetchUser,
  bookingController.create
);
router.get("/booking", fetchUser, bookingController.get);

module.exports = router;
