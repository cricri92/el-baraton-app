import React from 'react';
import classnames from 'classnames/bind';

import './styles.scss';

const MainTitle = ({ titleText, className }) => {
  return (
    <h1 className={classnames({
      "main-title": true,
      [className]: className !== undefined
    })}>
      {titleText}
      <div className="main-title-border-bottom"/>
    </h1>
  );
};

export default MainTitle;