import React, { useEffect, useRef } from 'react';
import './MainTitle.scss';

const MainTitle = () => {
  const loadRef = useRef();

  return (
    <div ref={loadRef} className="main_title">
      <h1>Умный магазин</h1>
      <span> Подберем за вас необходимый Вам товар</span>
    </div>
  );
};

export default MainTitle;
