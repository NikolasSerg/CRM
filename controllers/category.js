const Category = require('../models/Category');
const errorHandler = require('../utils/errorHandler');
const Position = require('../models/Position');


module.exports.getAll = async function (req, res) {
    try {
        const categories = await Category.find({
            user: req.user.id
        });
        res.status(200).json(categories)
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.getById = async function (req, res) {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category)
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.remove = async function (req, res) {
    try {
        await Category.remove({_id: req.params.id})
        await Position.remove({category: req.params.id})
        res.status(200).json({
            message: 'all were deleted'
        })
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.create = function (req, res) {
    try {

    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.update = function (req, res) {

}