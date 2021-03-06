import classNames from 'classnames';
import React from 'react';

export const LoginIcon = (width, height, className) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 49 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={classNames(className)}
        d="M24.5 3.91666C13.23 3.91666 4.08334 12.69 4.08334 23.5C4.08334 34.31 13.23 43.0833 24.5 43.0833C35.77 43.0833 44.9167 34.31 44.9167 23.5C44.9167 12.69 35.77 3.91666 24.5 3.91666ZM24.5 9.79166C27.8892 9.79166 30.625 12.4158 30.625 15.6667C30.625 18.9175 27.8892 21.5417 24.5 21.5417C21.1108 21.5417 18.375 18.9175 18.375 15.6667C18.375 12.4158 21.1108 9.79166 24.5 9.79166ZM24.5 37.6C19.3958 37.6 14.8838 35.0933 12.25 31.2942C12.3113 27.3971 20.4167 25.2625 24.5 25.2625C28.5629 25.2625 36.6888 27.3971 36.75 31.2942C34.1163 35.0933 29.6042 37.6 24.5 37.6Z"
        fill="#E8887C"
      />
    </svg>
  );
};
