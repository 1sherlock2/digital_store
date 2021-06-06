import React, { useEffect, useRef } from 'react';
import BasketIcons from './BasletIcons/BasketIcons';
import MainTitle from './MainTitle/MainTitle';
import MenuSelect from './MenuSelect/MenuSelect';
import './MainPage.scss';

const MainPage = () => {
  const clientRef = useRef(null);

  useEffect(() => {
    const clientEl = clientRef.current;
    const coordinate = clientEl.getBoundingClientRect();
    console.log(coordinate);
    console.log(clientEl.hasChildNodes());
    console.log(clientEl.childNodes);
    const { x, y } = coordinate;
  }, []);

  return (
    <div className="main_page">
      <div ref={clientRef}>
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
