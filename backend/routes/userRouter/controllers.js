const errorMiddleWare = require('../../middlewares/errorMiddleWare');
const { User } = require('../../models/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const statusCode = require('../../utils/responseValue');

exports.registr = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    if (!email && !password) {
      return res
        .status(400)
        .json({ message: 'Email or password is not correct' });
    }
    const findUser = await User.findOne({ where: { email } });
    if (findUser) {
      return res.status(400).json({ message: 'This user was created' });
    }
    const bcryptPass = await bcrypt.hash(password, 10);
    const user = await User.create({ email, bcryptPass, role });
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user) {
      return statusCode(res, 400, {
        message: 'email or password is not correct',
      });
    }

    const secretKey = process.env.PRIVAT_KEY;
    const token = await jwt.sign({ email: email }, secretKey, {
      algorithm: 'HS256',
      expiresIn: '1h',
    });
    const correctPass = await bcrypt.compare(password, user.password);
    if (!correctPass) {
      return statusCode(res, 400, {
        message: 'email or password is not correct',
      });
    }
    return statusCode(res, 200, { token, user: user.id });
  } catch (e) {
    console.log(e);
  }
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
