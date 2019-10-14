import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Input} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {IN_STOCK, NO_STOCK} from "screens/Products/constants";

import ProductStatusBadge from "screens/Products/components/ProductStatusBadge";
import ProductPrice from "screens/Products/components/ProductPrice";
import AppButton from "components/AppButton";

import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import {addToShoppingCart, unsetSelectedProduct} from "store/shopping-cart/actions";

import './styles.scss';
import {SECONDARY_BUTTON} from "components/AppButton/constants";

const mapDispatchToProps = dispatch => ({
  addToShoppingCart: product => dispatch(addToShoppingCart(product)),
  unsetSelectedProduct: () => dispatch(unsetSelectedProduct())
});

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      itemQuantity: 1
    };

    this.addToCart = this.addToCart.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addToCart() {
    this.props.addToShoppingCart(this.props.product);
  }

  decrementQuantity() {
    this.setState({
      itemQuantity: this.state.itemQuantity > 1 ? this.state.itemQuantity - 1 : 1
    });
  }

  incrementQuantity() {
    this.setState({
      itemQuantity: this.state.itemQuantity + 1
    })
  }

  closeModal() {
    this.props.unsetSelectedProduct();
  }

  render() {
    const { itemQuantity } = this.state;
    const { product } = this.props;

    return (
      <div className="product-detail">
        <div className="product-detail__avatar">
          <img src="https://justoybueno.com/wp-content/uploads/2018/09/leche-bolsa-copy.jpg" alt={product.name}/>
          <div className="product-detail-quantity-chooser">
            <AppButton actionButton={this.decrementQuantity}
                       disabled={itemQuantity <= 1}
                       classNames={"product-detail-quantity-chooser__button"}>
              -
            </AppButton>
            <input type="text" value={itemQuantity}
                   className="product-detail-quantity-chooser__input"
                   onChange={this.handleQuantityChange}
                   readOnly={true} />
            <AppButton actionButton={this.incrementQuantity}
                       classNames={"product-detail-quantity-chooser__button"}>
              +
            </AppButton>
          </div>
        </div>
        <div className="product-detail-content">
          <div className="product-detail-content__info">
            {product.name}
            <ProductPrice price={product.price} />
          </div>
          <div className="product-detail-stock">
          <span className="product-detail-stock__quantity">
            Cantidades disponibles: {product.quantity}
          </span>
            <ProductStatusBadge
              productStatus={product.available ? IN_STOCK : NO_STOCK} />
          </div>
          <div className="product-detail-actions">
            <AppButton actionButton={this.closeModal}
               type={SECONDARY_BUTTON}>
                Volver atrás
            </AppButton>
            <AppButton actionButton={this.addToCart} classNames={"product-detail-actions__add-to-cart"}>
              <FontAwesomeIcon icon={faShoppingCart}/> Añadir al carrito ({itemQuantity})
            </AppButton>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number,
    price: PropTypes.string,
    available: PropTypes.bool,
    sublevel_id: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(ProductDetail);