const bcryptjs = require ('bcryptjs');
const { UserInfo } = require("git");
const path = require("path");

const usersController = {
  
  register: (req, res) => {
    res.cookie('testing', 'hola mundo', { maxAge: 1000 * 30 })
    return res.render('userRegisterForm');
},
processRegister: (req,res) => {
  const resultValidation = validationResult(req);
  
  if (resultValidation.error.length > 0 ) {
    return res.render('userRegisterForm', {
      errors: resultValidation.mapped(),
      oldData: req.body
    });
  }

  let userInDB = User.findByField('email',req.body.email);
  
  if (userInDB) {
    return res.render('userRegisterForm', {
      errors: {
        email: {
        msg: 'Este usuario ya está registrado'
      }
    },
      oldData: req.body
    });
  }

  let userToCreate = {
    ...req.body,
    password: bcryptjs.hashSync(req.body.password, 10),
    avatar: req.file.filename 
  }

  let userCreated = User.create(userToCreate);
 
  return res.redirect('/user/login');
},
  login: (req, res) => {
      res.render('userLoginForm');
},
  loginProcess: (req,res)=>{
  let userToLogin = User.findByField('email', req.body.email);
 
  if (userToLogin) {
    let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
   if(isOkThePassword){
       delete userToLogin.password;
       req.session.userLogged = userToLogin;

       if (req.body.remember_user){
        res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) *2})
       }
       return res.redirect('/user/profile');
   }
   return res.render('userLoginForm', {
    errors: {
      email: {
        msg: 'Las credenciales son invalidas'
      }
    }
   });
  }
   return res.render('userLoginForm', {
    errors: {
      email: {
        msg: 'No se encuentra este email es nuestra base de datos'
      }
    }
   });
},
  profile: (req, res) => {

  return res.render('userProfile',{
    user: req.session.userLogged
  });

},
  logout: (req,res) => {
    req.session.destroy();
    return res.redirect('/');
},

  cart: (req, res) => {
      res.render('cart')
}};


module.exports = usersController;
