// const User = require("../models/User");
const jwt = require('jsonwebtoken');
require('dotenv').config()

// create json web token
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};

// SingUp user 
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await createUser({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  } 
}

// Login User
module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await logInUser(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

// LogOut user
module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.send('logout')
}



/* 
  Write your Login and signUp method according to your DataBase your using.
  The methods are in General defined you can write code in your way.
*/ 
  
// Login and create user methods
const logInUser = async function(email, password) {
  if(email='abc' && password==='111'){
   const user = {_id : 3}
   return user;
  }
  else return null;
};

const createUser = async function(email, password) {  
 if(email='abc' && password==='111'){
  const user = {_id : 3}
  return user;
 }
 else return null;
};
