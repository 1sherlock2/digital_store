import Auth from '../pages/Login/Auth';
import Register from '../pages/Login/Register';
import Devices from '../pages/Devices/Devices';
import Shop from '../pages/Shop/Shop';
import Basket from '../pages/Basket/Basket';
import paths from '../utils/constants';
import MainPage from '../pages/MainPage/MainPage';

const {
  authPath,
  registerPath,
  mainPath,
  devicesPath,
  shopPath,
  basketPath,
} = paths;

export const authRoute = [
  {
    path: authPath,
    component: Auth,
  },
  {
    path: registerPath,
    component: Register,
  },
];

export const publicRoute = [
  {
    path: mainPath,
    component: MainPage,
  },
  {
    path: devicesPath,
    component: Devices,
  },
  {
    path: shopPath,
    component: Shop,
  },
  {
    path: basketPath,
    component: Basket,
  },
];
