module.exports.login = function (req, res) {
    res.status(200).json({
        login: {
            name: req.body.name,
            email: req.body.email
        }
    })
};

module.exports.register = function (req, res) {
    res.status(200).json({
        register: 'register FROM CONTROLLERS'
    })
};