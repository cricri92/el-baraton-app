import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import AppLink from "components/AppLink";

import logo from 'assets/img/el-baraton.png';

import './styles.scss';

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
});

const Header = ({ shoppingCart }) => {
  const { totalCartProducts } = shoppingCart;

  return (
    <header className="header fixed-top">
      <div className="container-fluid header justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="brand-logo" alt="El Baratón" />
        </Link>
        <div className="header-actions">
          <FontAwesomeIcon icon={faSearch} className="header-actions__icons fa-fw" />
          <AppLink linkTo={'/checkout'}>
            <FontAwesomeIcon icon={faShoppingCart} className="header-actions__icons fa-fw" />
            ({totalCartProducts})
          </AppLink>
        </div>
      </div>
    </header>
    );
};

export default connect(mapStateToProps, null)(Header);