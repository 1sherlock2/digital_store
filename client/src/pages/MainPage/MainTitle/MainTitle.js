import React, { useEffect, useRef } from 'react';
import './MainTitle.scss';

const MainTitle = () => {
  const loadRef = useRef();

  useEffect(() => {
    //   const h1 = document.createElement('h1');
    //   h1.innerHTML = '<h1>Умный магазин</h1>';
    //   setTimeout(() => {
    //     h1.style.transition = '5s';
    //     loadRef.current.appendChild(h1);
    //   }, 2000);
    console.log(loadRef);
  }, []);

  return (
    <div ref={loadRef} className="main_title">
      <h1>Умный магазин</h1>
      <span> Подберем за вас необходимый Вам товар</span>
    </div>
  );
};

export default MainTitle;
