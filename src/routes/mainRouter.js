const express = require("express");
const router = express.Router();

router.get("/", mainControllers.index);
const mainControllers = require("../controllers/mainControllers");


module.exports = router;
