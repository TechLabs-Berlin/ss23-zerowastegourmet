const { Router } = require('express');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require('./../middleware/jwt.middleware.js');

router.get('/signup', (req, res) => res.render('auth/signup'));

router.get('/login', (req, res) => res.render('auth/login'));

router.get('/userprofile', (req, res) => res.render('userprofile', isAuthenticated, { userInSession: req.session.currentUser }));
 

router.post('/signup', (req, res, next) => {
    console.log("The form data: ", req.body);
   
    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email, password and name" });
        return;
      }
    
      User.findOne({ email })
      .then((foundUser) => {
        if (foundUser) {
          res.status(400).json({ message: "User already exists." });
          return;
        }
        const salt = bcryptjs.genSaltSync(saltRounds);
        const hashedPassword = bcryptjs.hashSync(password, salt);
   
        return User.create({ email, passwordHash: hashedPassword });
      })
      .then((createdUser) => {

        const { email, name, _id } = createdUser;
      
        const user = { email, _id };
   
        res.status(201).json({ user: user });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
  });
});


router.post('/login', (req, res, next) => {
    const { email, password } = req.body;
   
    if (email === '' || password === '') {
      res.status(400).json({ message: "Provide email and password." });
      return;
    }
   
    User.findOne({ email })
      .then((foundUser) => {
      
        if (!foundUser) {
          res.status(401).json({ message: "User not found." })
          return;
        }
        const passwordCorrect = bcryptjs.compareSync(password, foundUser.password);
   
        if (passwordCorrect) {
          const { _id, email } = foundUser;
          
          const payload = { _id, email };
   
          const authToken = jwt.sign( 
            payload,
            process.env.TOKEN_SECRET,
            { algorithm: 'HS256', expiresIn: "6h" }
          );
          res.status(200).json({ authToken: authToken });
        }
        else {
          res.status(401).json({ message: "Unable to authenticate the user" });
        }
      })
      .catch(err => res.status(500).json({ message: "Internal Server Error" }));
  });

  router.get('/verify', isAuthenticated, (req, res, next) => { 
    console.log(`req.payload`, req.payload);
    res.status(200).json(req.payload);
  });


module.exports = router;