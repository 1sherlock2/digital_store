const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorMiddleware = require('./middlewares/errorMiddleWare');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs')

const PORT = process.env.PORT || 5000;
const app = express();

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
