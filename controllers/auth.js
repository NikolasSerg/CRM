const bcrypt =  require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');

module.exports.login = async function (req, res) {
   const candidate = await User.findOne({email: req.body.email})
   if(candidate){
       const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
       if(passwordResult) {
            let token = jwt.sign(
                {
                    email: candidate.email,
                    userId: candidate._id
                },
                keys.jwt,
                {expiresIn: 60 * 60}
            );
            res.status(200).json({
                token: `Bearer ${token}`
            })
       } else {
           res.status(401).json({
               message: "passwords aren't equal"
           } )
       }
   } else {
       res.status(404).json({
           message: "user didn't found"
       })
   }
};

module.exports.register = async function (req, res) {
    let candidate = await User.findOne({email: req.body.email})
    if(candidate) {
        res.status(409).json({
            message: "this email is exist"
        })
    } else {
        var salt = bcrypt.genSaltSync(10);
        const password  = req.body.password;
        console.log(req.body.password, ' - req.body.password') 
        const user = new User({
          email: req.body.email,
          password: bcrypt.hashSync(password, salt)
        })
        try {
          await user.save();
          res.status(201).json(user);
        } catch (error) {
            console.error(error);
        }
        
    }
  };

