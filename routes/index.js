const express = require("express");
const userController = require("../controllers/userController");
const trainController = require("../controllers/trainController");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.post("/train", trainController.create);

module.exports = router