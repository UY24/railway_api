const express = require("express");

const userController = require("../controllers/userController");
const trainController = require("../controllers/trainController");
const isAdmin = require("../middleware/auth");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/train", isAdmin, trainController.create);
router.get("/train", trainController.get);

module.exports = router;
