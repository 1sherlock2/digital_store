const { Brand } = require('../../models/models');

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.status(200).json(brand);
  } catch (e) {
    console.log(e.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    const brand = await Brand.findAll();
    return res.status(200).json(brand);
  } catch (e) {
    console.log(e.message);
  }
};
