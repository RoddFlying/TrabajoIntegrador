const {validationResult} = require ('express-validator');
let path = require('path');


const bcryptjs = require ('bcryptjs');
const fs  = require("fs");

//const multer = require('multer');


const db = require('../database/models'); //requiere la base de datos. no tocar

//db.user.findAll({include: [{association: 'role'}]})


const usersController = {
  
  register: (req, res) => {

    res.render('users/register');
},
processRegister: async (req,res) => {
  const resultValidation = validationResult(req);
  
  if (resultValidation.isEmpty()===false) {
     return res.render('userRegisterForm', {
       errors: resultValidation.mapped(),
       oldData: req.body
     });
   } 
  let userInDB = await db.user.findAll({where: {'email': req.body.email}});
   console.log(userInDB);
  if (userInDB && userInDB.length > 0 ) {
    return res.render('users/register', {
      errors: {
        email: {
        msg: 'Este usuario ya está registrado'
      }
   },
      oldData: req.body
    });
 }
  console.log(req.body)
    await db.user.create({
    name: req.body.nombre,
    surname: req.body.apellido,
    dni: req.body.dni,
    email: req.body.email,
    password: bcryptjs.hashSync(req.body.contrasena1, 9), 
    address_street: req.body.calle,
    address_extra: req.body.extra,
    address_city: req.body.ciudad,
    address_state: req.body.provincia,
    address_zipcode: req.body.codigoPostal,
    profile_image: req.file.filename,
    role_id: 2
  });

  res.redirect('/user');
},
  login: (req, res) => {
    if (req.session && req.session.userLogged ){
      res.redirect('/user/profile/' + req.session.userLogged.id )
    }
      res.render('users/login');

},
  loginProcess: async (req,res)=>{
  console.log(req.body)
    let userToLogin = await db.user.findOne({ 
    where: {email: req.body.email }
  });
 
  if (userToLogin) { 
   let isOkThePassword = bcryptjs.compare(req.body.contrasena, userToLogin.password)
   if(isOkThePassword){
       delete userToLogin.password;
      req.session.userLogged = userToLogin;

      // if (req.body.remember_user){
       res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60 })
       //}
     if(userToLogin.role_id == 1){
      return res.redirect('/user/adminUser/'+ userToLogin.id);
     }else{
       return res.redirect('/user/profile/'+ userToLogin.id);
   }
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
profileAdmin: (req, res) => {

  res.render('users/adminUser',{
    user: req.session.userLogged
  });

},
 logout: (req,res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
},

// api usuario 

  list: (req, res) => {
  db.usuario.findAll()
  .then(function(usuarios){

      let listaUsuarios = []

      for (usuario of usuarios){
          let aux = {
              nombre: usuario.nombre,
              apellido: usuario.apellido,
              email: usuario.email,
              admin: usuario.admin,
              local: usuario.local_id
          }
          listaUsuarios.push(aux);
      }

      res.json({
      codigo:200,
      descripcion: "Lista de usuarios",
      count: listaUsuarios.length,
      users: listaUsuarios})

  }) 
},
  user: (req, res) => {
  db.usuario.findByPk(req.params.id)
  .then(function(user){
      let filteredUser = {
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
          admin: user.admin,
          local: user.local_id
      }
  res.json({
      codigo:200,
      user: filteredUser
  })})
}

};


module.exports = usersController;
