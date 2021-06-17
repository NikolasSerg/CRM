module.exports.login = function (req, res) {
    res.status(200).json({
        login: 'login FROM CONTROLLERS'
    })
}

module.exports.register = function (req, res) {
    res.status(200).json({
        register: 'register FROM CONTROLLERS'
    })
}