import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import {PRIMARY_BUTTON, SECONDARY_BUTTON} from "components/AppButton/constants";

import './styles.scss';

const AppButton = ({ children, classNames, actionButton, type, ...props }) => {
  return (
    <button className={classnames({
        "app-button": true,
        "app-button--secondary": type === SECONDARY_BUTTON,
        [classNames]: classNames !== undefined
      })}
      onClick={actionButton}
      {...props}>
        {children}
    </button>
  );
};

AppButton.propTypes = {
  children: PropTypes.node.isRequired,
  actionButton: PropTypes.func.isRequired,
  type: PropTypes.oneOf([PRIMARY_BUTTON, SECONDARY_BUTTON]),
  classNames: PropTypes.string
};

export default AppButton;