import React, { useEffect, useRef } from 'react';
import { BasketIcon } from '../../utils/icons/BasketIcon';
import { DevicesIcon } from '../../utils/icons/DevicesIcon';
import { LoginIcon } from '../../utils/icons/LoginIcon';

const SelectIcon = ({ icon, width, height, className }) => {
  const selectIcon = {
    login: LoginIcon(width, height, className),
    basket: BasketIcon(width, height, className),
    devices: DevicesIcon(width, height, className),
  };
  return selectIcon[icon];
};

export default SelectIcon;
