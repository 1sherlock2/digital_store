import React from 'react';
import { NavLink } from 'react-router-dom';
import SelectIcon from '../SelectIcon/SelectIcon';
import classnames from 'classnames';

const NavLinkIcon = ({
  route,
  width = '34',
  height = '20',
  icon,
  description,
  className,
}) => {
  return (
    <NavLink
      to={`/${route}`}
      className={classnames('menu_select_subtitle_link', className)}
    >
      <SelectIcon
        width={width}
        height={height}
        icon={icon}
        description={description}
      />
    </NavLink>
  );
};

export default NavLinkIcon;
