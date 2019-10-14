import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Modal} from "reactstrap";

import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import AppButton from "components/AppButton";
import ProductDetail from "screens/Products/components/ProductDetail";

import {setSelectedProduct} from "store/shopping-cart/actions";

import './styles.scss';

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = dispatch => ({
  setSelectedProduct: product => dispatch(setSelectedProduct(product)),
});

class AddToCartButton extends Component {
  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.props.setSelectedProduct(this.props.product);
  }

  render() {
    const { product, shoppingCart } = this.props;
    const { selectedProduct } = shoppingCart;

    return (
      <React.Fragment>
        <AppButton actionButton={this.openModal}>
          <FontAwesomeIcon icon={faShoppingCart} /> Comprar
        </AppButton>
        <Modal isOpen={selectedProduct} size={"lg"}>
          <ProductDetail product={product} />
        </Modal>
      </React.Fragment>
    );
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number,
    price: PropTypes.string,
    available: PropTypes.bool,
    sublevel_id: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);