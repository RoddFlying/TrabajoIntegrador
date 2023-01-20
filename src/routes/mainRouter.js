const mainControllers = require("../controllers/mainControllers");

const express = require("express");
const router = express.Router();

router.get("/", mainControllers.index);
router.get("/contact", mainControllers.contact);


module.exports = router;
