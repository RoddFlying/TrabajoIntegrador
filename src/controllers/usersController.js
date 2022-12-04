const bcryptjs = require ('bcryptjs');
const { UserInfo } = require("git");
const { dirname } = require('path');
const path = require("path");
const db = require('../database/models'); //requiere la base de datos. no tocar

const usersController = {
  
  register: (req, res) => {
    //res.cookie('testing', 'hola mundo', { maxAge: 1000 * 30 })
    res.render('users/register');
},
processRegister: async (req,res) => {
  let User = await db.user.create({
    name: req.body.nombre,
    surname: req.body.apellido,
    dni: req.body.dni,
    email: req.body.email,
    password: bcryptjs.hashSync(req.body.constraseña, 10),
    address: req.body.address,
    profile_image: req.file.filename,
    telephone: req.body.telefono,
    role_id: 2
  });
  // const resultValidation = validationResult(req);
  
  // if (resultValidation.error.length > 0 ) {
  //   return res.render('userRegisterForm', {
  //     errors: resultValidation.mapped(),
  //     oldData: req.body
  //   });
  // }

  // let userInDB = User.findByField('email',req.body.email);
  
  // if (userInDB) {
  //   return res.render('userRegisterForm', {
  //     errors: {
  //       email: {
  //       msg: 'Este usuario ya está registrado'
  //     }
  //   },
  //     oldData: req.body
  //   });
  // }

  // let userToCreate = {
  //   ...req.body,
  //   password: bcryptjs.hashSync(req.body.password, 10),
  //   avatar: req.file.filename 
  // }

  // let userCreated = User.create(userToCreate);
 
  // return res.redirect('/user/login');
},
  login: (req, res) => {
      res.render('users/login');
},
  loginProcess: (req,res)=>{
  let userToLogin = User.findByField('email', req.body.email);
 
  if (userToLogin) {
    let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
   if(isOkThePassword){
       delete userToLogin.password;
       req.session.userLogged = userToLogin;

       if (req.body.remember_user){
        res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60 })
       }
       return res.redirect('users/profile');
   }
   return res.render('users/login', {
    errors: {
      email: {
        msg: 'Las credenciales son invalidas'
      }
    }
   });
  }
   return res.render('users/login', {
    errors: {
      email: {
        msg: 'No se encuentra este email es nuestra base de datos'
      }
    }
   });
},
  profile: (req, res) => {

  res.render('users/perfil',{
    user: req.session.userLogged
  });

},
  logout: (req,res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
},

  cart: (req, res) => {
      res.render('cart')
}};


module.exports = usersController;
