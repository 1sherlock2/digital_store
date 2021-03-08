const errorMiddleWare = require('../../middlewares/errorMiddleWare');
const { User, Basket } = require('../../models/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const statusCode = require('../../utils/responseValue');

const secretKey = process.env.PRIVAT_KEY;

const generateJwt = (email, secretKey) => {
  jwt.sign({ email }, secretKey, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
};

exports.register = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    if (!email && !password) {
      return statusCode(res, 400, {
        message: 'Email or password is not correct',
      });
    }
    const findUser = await User.findOne({ where: { email } });
    if (findUser) {
      return res.status(400).json({ message: 'This user was created' });
    }
    const privatKey = process.env.PRIVAT_KEY;
    const bcryptPass = bcrypt.hash(password, 10);
    const user = await User.create({ email, bcryptPass, role });
    const basket = await Basket.create({ where: { userId: user.id } });
    return statusCode(res, 200, { message: 'User has been created' });
  } catch (e) {
    console.log(e);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return statusCode(res, 400, {
        message: 'email or password is not correct',
      });
    }
    const correctPass = bcrypt.compareSync(password, user.password);
    console.log(correctPass);
    if (!correctPass) {
      return statusCode(res, 400, {
        message: 'email or password is not correct',
      });
    }
    const token = generateJwt(user.email, secretKey);
    return statusCode(res, 200, { token, user: user.id });
  } catch (e) {
    console.log(e);
  }
};

exports.check = (req, res) => {
  const token = generateJwt(req.email, secretKey);
  return statusCode(res, 200, { token });
};

exports.deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    const user = await User.findAll({ where: { id } });
    if (!user) {
      return statusCode(res, 400, {
        message: 'User has been not delete, bacause he is not available',
      });
    }
    return statusCode(res, 200, { message: 'User has been delete' });
  } catch (e) {
    console.log(e);
  }
};
