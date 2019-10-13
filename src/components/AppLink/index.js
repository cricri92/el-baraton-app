import React from 'react';
import {Link} from "react-router-dom";
import classnames from 'classnames/bind';

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

export default AppLink;
