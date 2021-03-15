import React, { useEffect, useRef, useState } from 'react';
import { BasketIcon } from '../../utils/icons/BasketIcon';
import BrandIcon from '../../utils/icons/BrandIcon';
import { DevicesIcon } from '../../utils/icons/DevicesIcon';
import { LoginIcon } from '../../utils/icons/LoginIcon';
import TypesIcon from '../../utils/icons/TypesIcon';
import classNames from 'classnames';
import './SelectIcon.scss';

const SelectIcon = ({ icon, width, height, description, className }) => {
  const [showPopup, setShowPopup] = useState(false);

  const selectIcon = {
    login: LoginIcon(width, height, className),
    basket: BasketIcon(width, height, className),
    devices: DevicesIcon(width, height, className),
    types: TypesIcon(width, height, className),
    brands: BrandIcon(width, height, className),
  };

  const popupDescription = {
    login: 'Личный кабинет',
    basket: 'Корзина',
    devices: 'Устройства',
    types: 'Типы товаров',
    brands: 'Бренды',
  };

  const mouseEnterPopup = () => {
    setShowPopup(true);
  };
  const mouseLeavePopup = () => {
    setShowPopup(false);
  };
  const onClickPopup = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const basketLoginDesc =
    popupDescription['login'] || popupDescription['basket'];

  return (
    <div
      className="select_icon"
      onMouseEnter={mouseEnterPopup}
      onMouseLeave={mouseLeavePopup}
    >
      {selectIcon[icon]}
      <div
        className={classNames({
          select_icon_popup: showPopup,
          basketLogin: basketLoginDesc,
        })}
        onClick={onClickPopup}
      >
        {showPopup && popupDescription[description]}
      </div>
    </div>
  );
};

export default SelectIcon;
