const errorMiddleWare = (err, res) => {
  if (err) {
    return res.status(err.status).json({ message: err.message });
  }
  return status(500).json({ message: 'Непредвиденная ошибка' });
};

const errorHandler = (status, message) => {
  return errorMiddleWare(err, res, status, message);
};

module.exports = errorMiddleWare;
