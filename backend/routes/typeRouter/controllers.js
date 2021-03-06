const { Type } = require('../../models/models');

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.status(200).json(type);
  } catch (e) {
    console.log(e.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    const types = await Type.findAll();
    return res.status(200).json(types);
  } catch (e) {
    console.log(e.message);
  }
};
