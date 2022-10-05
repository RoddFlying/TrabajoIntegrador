const usersController = require("../controllers/usersControllers"); //USERS

const express = require("express");
const router = express.Router();

router.get("/login", usersController.login); //USERS MODIFICACION

module.exports = router;
