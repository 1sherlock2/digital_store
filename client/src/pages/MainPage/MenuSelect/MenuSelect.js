import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './MenuSelect.scss';
import SelectIcon from '../../../components/SelectIcon/SelectIcon';

const MenuSelect = () => {
  const [changeClass, setChangeClass] = useState(false);

  const openMenu = () => setChangeClass(true);
  const closeMenu = () => setChangeClass(false);

  return (
    <div className="menu_container">
      <div onMouseEnter={openMenu} className="menu_select">
        <div className="menu_select_title">
          <span>Меню</span>
        </div>
        <div
          onMouseLeave={closeMenu}
          className={classNames('menu_select_subtitle', {
            change_subtitle: changeClass,
          })}
        >
          <NavLink to="/devices" className="menu_select_subtitle_link">
            <SelectIcon width="34" height="20" icon="devices" />
          </NavLink>
          <NavLink to="/types" className="menu_select_subtitle_link">
            <SelectIcon width="34" height="20" icon="devices" />
          </NavLink>
          <NavLink to="/shop" className="menu_select_subtitle_link">
            <SelectIcon width="34" height="20" icon="devices" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MenuSelect;
