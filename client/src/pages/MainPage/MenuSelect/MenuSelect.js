import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './MenuSelect.scss';

const MenuSelect = () => {
  const [changeClass, setChangeClass] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setChangeClass(!changeClass)}
        className="menu_select"
      >
        <div className="menu_select_title">
          <span>Меню</span>
        </div>
      </div>
      <div
        className={classNames('menu_select_subtitle', {
          change_subtitle: changeClass,
        })}
      ></div>
    </div>
  );
};

export default MenuSelect;
