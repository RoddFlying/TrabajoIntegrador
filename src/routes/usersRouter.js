const usersController = require("./../controllers/usersController"); //USERS

const express = require("express");
const router = express.Router();

router.get("/", usersController.login); //USERS MODIFICACION
router.get("/register", usersController.register); 
router.get("/profile", usersController.profile);  


const uploadFile = require ('./../../Middlewares/authMiddleware');
const validations = require ('./../../Middlewares/validateRegisterMiddleware');
const guestMiddleware = require('./../../Middlewares/guestmiddleware');
const authMiddleware = require('./../../Middlewares/authMiddleware'); 

router.get('/register', guestMiddleware, usersController.register);

router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

router.get('/login', usersController.login);

router.post('/login', usersController.loginProcess);

router.get('/profile/', authMiddleware, usersController.profile);
router.get('/logout/', usersController.logout);

module.exports = router;

