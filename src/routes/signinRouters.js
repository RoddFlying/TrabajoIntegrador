const singinController = require("./../controllers/singinController");

const express = require("express");
const router = express.Router();

router.get("/login", singinController.login
);

module.exports = router;
