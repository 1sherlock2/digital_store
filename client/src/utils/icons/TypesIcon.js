import classNames from 'classnames';
import React from 'react';

const TypesIcon = (width, height, className) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={classNames('colorIcon', className)}
        d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
      />
    </svg>
  );
};

export default TypesIcon;
