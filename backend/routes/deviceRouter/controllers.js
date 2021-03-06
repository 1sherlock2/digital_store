const { Device } = require('../../models/models');
const uuid = require('uuid');
const path = require('path');
const errorMiddleWare = require('../../middlewares/errorMiddleWare');

exports.create = async (req, res, next) => {
  const { name, price, typeId, brandId, info } = req.body;
  const { img } = req.files;
  let fileName = `${uuid.v4()}.jpeg`;
  img.mv(path.resolve(__dirname, '../../static'));
  const device = await Device.create({
    name,
    price,
    typeId,
    brandId,
    img: fileName,
  });
  return res.status(200).json(device);
};
