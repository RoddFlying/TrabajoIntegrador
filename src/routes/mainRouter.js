const express = require("express");
const router = express.Router();
const multer = require ('multer');
router.get("/", mainControllers.index);
const mainControllers = require("../controllers/mainControllers");


module.exports = router;
