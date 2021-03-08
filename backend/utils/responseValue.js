const statusCode = (res, statusCode, message) => {
  const status = statusCode === 200 ? 200 : statusCode === 400 ? 400 : 500;
  res.status(status).json(message);
};

module.exports = statusCode;
