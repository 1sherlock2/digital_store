const express = require('express');
require('dotenv').config();
const sequelize = require('./db'),
  models = require('./models/models'),
  cors = require('cors'),
  router = require('./routes/index'),
  errorMiddleware = require('./middlewares/errorMiddleWare'),
  bodyParser = require('body-parser'),
  fileUpload = require('express-fileupload'),
  path = require('path'),
  PORT = process.env.PORT || 5000,
  app = express();

app.use(cors());
app.use(bodyParser());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload());
app.use('/', router);

// Обработка ошибок
app.use(errorMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`server was start on ${PORT} port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
