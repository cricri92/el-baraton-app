import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppButton from "components/AppButton";

import './styles.scss';
import {connect} from "react-redux";
import {removeFromShoppingCart} from "store/shopping-cart/actions";

const mapDispatchToProps = dispatch => ({
  removeFromShoppingCart: productId => dispatch(removeFromShoppingCart(productId))
});

class RemoveProductFromCart extends Component {
  constructor() {
    super();

    this.state = {
      confirmModalVisible: false
    };

    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart() {
    this.props.removeFromShoppingCart(this.props.productId);
  }

  render() {
    return (
      <AppButton actionButton={this.removeFromCart}>
        X
      </AppButton>
    );
  }
}

RemoveProductFromCart.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(RemoveProductFromCart);