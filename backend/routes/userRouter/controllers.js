const errorMiddleWare = require('../../middlewares/errorMiddleWare');
const { User } = require('../../models/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
    // next(errorMiddleWare(e, res));
    console.log(e);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findAll({ where: { email } });
    if (!user) {
      return res
        .status(400)
        .json({ message: 'email or password is not correct' });
    }
    console.log(user.email, user.password);
    const secretKey = process.env.PRIVAT_KEY;
    const token = jwt.sign(email, secretKey, {
      algorithm: 'HS256',
      expiresIn: '60',
    });
    const correctPass = bcrypt.compare(password, user.password);
    if (!correctPass) {
      return res
        .status(400)
        .json({ message: 'email or password is not correct' });
    }
    return res.status(200).json({ token, user: user.id });
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
      return res.status(400).json({
        message: 'User has been not delete, bacause he is not available',
      });
    }
    return res.status(200).json({ message: 'User has been delete' });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteAll = (req, res) => {
  try {
  } catch (e) {
    console.log(e);
  }
};
