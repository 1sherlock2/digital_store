const { Device, DeviceInfo } = require('../../models/models');
const uuid = require('uuid');
const path = require('path');
const errorMiddleWare = require('../../middlewares/errorMiddleWare');
const formidable = require('formidable');

exports.create = async (req, res, next) => {
  try {
    let { name, price, typeId, brandId, info } = req.body;
    const { img } = req.files;
    let fileName = `${uuid.v4()}.jpeg`;
    img.mv(path.resolve(__dirname, `../../static/`, fileName));
    const device = await Device.create({
      name,
      price,
      typeId,
      brandId,
      img: fileName,
    });
    if (info) {
      info = JSON.parse(info);
      info.forEach((el) =>
        DeviceInfo.create({
          title: el.title,
          desciption: el.desciption,
          deviceId: device.id,
        })
      );
    }
    return res.status(200).json(device);
  } catch (e) {
    next(errorMiddleWare(e.message, res));
  }
};

exports.getAll = async (req, res, next) => {
  try {
    let { typeId, brandId, page, limit } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;
    let devices;
    if (!typeId && !brandId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (typeId && !brandId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (!typeId && brandId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (typeId && brandId) {
      devices = await Device.findAndCountAll({
        where: { typeId, brandId },
        limit: { offset },
      });
    }
    return res.status(200).json(devices);
  } catch (e) {
    next(errorMiddleWare(e.message, res));
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }],
    });
    return res.status(200).json(device);
  } catch (e) {
    next(errorMiddleware(e.message, res));
  }
};
