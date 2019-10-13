import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

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

MainTitle.propTypes = {
  titleText: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default MainTitle;