const company = require('../services/companyServices');


module.exports.order = async(req,res) => {
    const result = await company.order(req.body)
    res.json(result)
}

module.exports.update = async(req,res) => {
    const result = await company.update(req.body)
    res.json(result)
}

module.exports.list = async(req,res) => {
    const result = await company.list(req.query)
    res.json(result)
}

module.exports.delete = async(req,res) => {
    const result = await company.delete(req.query)
    res.json(result)
}
module.exports.searchList = async(req,res) => {
    const result = await company.searchList(req.query)
    res.json(result)
}
