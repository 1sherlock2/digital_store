import React, { useState } from 'react';
import classNames from 'classnames';
import './MenuSelect.scss';
import NavLinkIcon from '../../../components/NavLinkIcon/NavLinkIcon';
import ArrowIcon from '../../../utils/icons/ArrowIcon';

const MenuSelect = () => {
  const [changeClass, setChangeClass] = useState(false);

  const openMenu = () => setChangeClass(true);
  const closeMenu = () => setChangeClass(false);

  return (
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
        <NavLinkIcon route="devices" icon="devices" description="devices" />
        <NavLinkIcon route="types" icon="types" description="types" />
        <NavLinkIcon route="brands" icon="brands" description="brands" />
      </div>
      <div className="menu_select_description" onMouseLeave={closeMenu}>
        <span>Для навигации используйте динамическое меню</span>
        <ArrowIcon
          width="36"
          height="50"
          className="menu_select_description_icon"
        />
      </div>
    </div>
  );
};

export default MenuSelect;
