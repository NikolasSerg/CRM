module.exports.overview = function (req, res) {
    res.status(200).json({    
        name: req.body.name,
        email: req.body.email
    })
}

module.exports.analytics = function (req, res) {

}