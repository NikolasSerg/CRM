const User = require('../models/User');

module.exports.login = function (req, res) {
    res.status(200).json({
        login: {
            name: req.body.name,
            email: req.body.email
        }
    })
};

module.exports.register = function (req, res) {
    let user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user
        .save()
        .then((data) => 
        {
            console.log('user  created')
            res.status(200).json({
                email: data.email 
            })
               
        })
};