const usersController = require("../controllers/usersControllers"); //USERS

const express = require("express");
const router = express.Router();

router.get("/", usersController.login); //USERS MODIFICACION
router.get("/register", usersController.register); 
router.get("/profile", usersController.profile);  

module.exports = router;
