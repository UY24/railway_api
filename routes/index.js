const express = require("express");

const userController = require("../controllers/userController");
const trainController = require("../controllers/trainController");
const bookingController = require("../controllers/bookingController");

const { isAdmin, fetchUser } = require("../middleware/auth");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.post("/train", isAdmin, trainController.create);
router.get("/train", trainController.get);
router.put("/train/:id", isAdmin, trainController.update);

router.post("/booking", fetchUser, bookingController.create);
router.get("/booking", fetchUser, bookingController.get);

module.exports = router;
