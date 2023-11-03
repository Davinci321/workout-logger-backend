const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
// const crypto = require("crypto");

const createToken = (_id) => {
    jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"})  //the user will be logged in for 3 days and after 3 days, the token will expire
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"});
}

// Generate a random JWT secret of 256 bits (32 bytes)
// const jwtSecret = crypto.randomBytes(32).toString('hex');
// console.log('JWT Secret:', jwtSecret);


// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)
    // create a token
    const token = createToken(user._id)
    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)

    console.log(token)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }