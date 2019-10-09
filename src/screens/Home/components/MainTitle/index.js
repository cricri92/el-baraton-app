import React from 'react'
import classnames from 'classnames/bind'

import './styles.scss';

const MainTitle = ({ titleText, className }) => {
  return (
    <h1 className={classnames({
      "main-title": true,
      [className]: className !== undefined
    })}>
      {titleText}
    </h1>
  );
};

export default MainTitle;