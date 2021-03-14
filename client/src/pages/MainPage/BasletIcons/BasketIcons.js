import React from 'react';
import SelectIcon from '../../../components/SelectIcon/SelectIcon';
import './BasketIcons.scss';

const BasketIcons = () => {
  return (
    <div className="basket_icon">
      <div className="basket_icon__home">
        <SelectIcon icon="login" />
      </div>
      <div className="basket_icon__subBasket">
        <SelectIcon icon="basket" />
        <span className="basket_icon__subBasket_count">sdfsdf</span>
      </div>
    </div>
  );
};

export default BasketIcons;
