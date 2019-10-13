import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import './styles.scss';

const AppButton = ({ children, classNames }) => {
  return (
    <button className={classnames({
      "app-button": true,
      [classNames]: classNames !== undefined
    })}>
      {children}
    </button>
  );
};

AppButton.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string
};

export default AppButton;