import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import logo from 'assets/img/el-baraton.png';

import './styles.scss';

const Header = () => {
  return (
    <header className="container">
      <div className="header justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="brand-logo" alt="El Baratón" />
        </Link>
        <div className="header-actions">
          <FontAwesomeIcon icon={faSearch} className="header-actions__icons fa-fw" />
          <FontAwesomeIcon icon={faShoppingCart} className="header-actions__icons fa-fw" />
        </div>
      </div>
    </header>
    );
};

export default Header;