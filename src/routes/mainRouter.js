const mainControllers = require("../controllers/mainControllers");
const express = require("express");
const router = express.Router();
const multer = require ("multer")
router.get("/", mainControllers.index);

module.exports = router;
