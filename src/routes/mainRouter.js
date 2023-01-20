const mainControllers = require("../controllers/mainControllers");

const express = require("express");
const router = express.Router();

router.get("/", mainControllers.index);
router.get("/contact", mainControllers.contact);

router.get("/carrito", mainControllers.cart);

module.exports = router;
