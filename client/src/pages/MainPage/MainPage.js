import React from 'react';
import BasketIcons from './BasletIcons/BasketIcons';
import MainTitle from './MainTitle/MainTitle';
import MenuSelect from './MenuSelect/MenuSelect';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="main_page">
      <div>
        <BasketIcons />
      </div>
      <div>
        <MainTitle />
        <MenuSelect />
      </div>
    </div>
  );
};

export default MainPage;
