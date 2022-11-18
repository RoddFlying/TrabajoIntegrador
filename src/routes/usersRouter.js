const usersController = require("../controllers/usersControllers"); //USERS

const express = require("express");
const router = express.Router();

router.get("/", usersController.login); //USERS MODIFICACION
router.get("/register", usersController.register); 
router.get("/profile", usersController.profile);  
const express = require('express');
const router = express.router();

const usersController = require ('../controllers/usersController');

const uploadFile = require ('../middlewares/multerMiddleware');
const validations = require ('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware'); 

router.get('/register', guestMiddleware, userController.register);

router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

router.get('/login', usersController.login);

router.post('/login', usersController.loginProcess);

router.get('/profile/', authMiddleware, usersController.profile);
router.get('/logout/', usersController.logout);

module.exports = router;

