const User = require('../models/User');

module.exports.login = function (req, res) {
    res.status(200).json({
        login: {
            name: req.body.name,
            email: req.body.email
        }
    })
};


module.exports.register = async function (req, res) {
    let candidate = await User.findOne({email: req.body.email})
    if(candidate) {
        res.status(409).json({
            message: "this email is exist"
        })
    } else {
        const user = new User({
          email: req.body.email,
          password: req.body.password
        })
        try {
          await user.save();
          res.status(200).json(user);
        } catch (error) {
            console.error(error);
        }
        
    }
  };
  