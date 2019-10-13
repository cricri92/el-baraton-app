import React from 'react';
import {Link} from "react-router-dom";
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import './styles.scss';

const AppLink = ({ children, linkTo, classNames }) => {
  return (
    <Link to={linkTo}
      className={classnames({
        "app-link": true,
        [classNames]: classNames !== undefined
      })}>
      {children}
    </Link>
  )
};

AppLink.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

export default AppLink;
