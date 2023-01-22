const usersController = require("./../controllers/usersController"); //USERS
const multer = require("multer");
const express = require("express");
const router = express.Router();


router.get("/", usersController.login); //USERS MODIFICACION
router.get("/register", usersController.register); 
router.get("/profile/:id", usersController.profile);  

const userLoggedMiddleware = require ('./../../Middlewares/userLoggedMiddleware');
const uploadFile = require ('./../../Middlewares/multerMiddleware');
const validations = require ('./../../Middlewares/validateRegisterMiddleware');
const guestMiddleware = require('./../../Middlewares/guestmiddleware');
const authMiddleware = require('./../../Middlewares/authMiddleware');

router.get('/register', guestMiddleware, usersController.register);
//router.post('/register', guestMiddleware, usersController.processRegister);

router.post('/register', uploadFile.single('filename'),  usersController.processRegister);

router.get('/login', usersController.login);

router.post('/login', usersController.loginProcess);

router.get('/profile/:id', authMiddleware, usersController.profile);

//hacer para el admin
router.get('/adminUser/:id', authMiddleware, usersController.profileAdmin);

router.get('/logout', usersController.logout);

module.exports = router;