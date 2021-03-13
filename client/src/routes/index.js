import Auth from '../pages/Login/Auth';
import Register from '../pages/Login/Register';
import Devices from '../pages/Devices/Devices';
import Shop from '../pages/Shop/Shop';
import Basket from '../pages/Basket/Basket';
import paths from '../utils/constants';
import MainPage from '../pages/MainPage/MainPage';

export const authRoute = [
  {
    path: paths.authPath,
    component: Auth,
  },
  {
    path: paths.registerPath,
    component: Register,
  },
];

export const publicRoute = [
  {
    path: paths.mainPath,
    component: MainPage,
  },
  {
    path: paths.devicesPath,
    component: Devices,
  },
  {
    path: paths.shopPath,
    component: Shop,
  },
  {
    path: paths.basketPath,
    component: Basket,
  },
];
