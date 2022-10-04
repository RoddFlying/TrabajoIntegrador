const signinController = require("../controllers/signinControllers");

const express = require("express");
const router = express.Router();

router.get("/login", signinController.login);

module.exports = router;
