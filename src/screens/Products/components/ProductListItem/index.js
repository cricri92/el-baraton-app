import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import {connect} from "react-redux";

import {IN_STOCK, NO_STOCK} from "screens/Products/constants";

import AppLink from "components/AppLink";
import ProductPrice from "screens/Products/components/ProductPrice";
import ProductStatusBadge from "screens/Products/components/ProductStatusBadge";
import AddToCartButton from "screens/Products/components/AddToCartButton";

import './styles.scss';

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
});

class ProductListItem extends Component {
  constructor() {
    super();

    this.state = {
      displayAddToCartAction: false,
      hoveredProduct: null
    };

    this.onMouseEnterEvent = product => this._onMouseEnterEvent.bind(this, product);
    this.onMouseLeaveEvent = this.onMouseLeaveEvent.bind(this);
  }

  _onMouseEnterEvent(product) {
    this.setState({
      displayAddToCartAction: true,
      hoveredProduct: product
    });
  };

  onMouseLeaveEvent() {
    this.setState({
      displayAddToCartAction: false,
      hoveredProduct: null,
    })
  };

  render() {
    const { product, classNames, shoppingCart } = this.props;
    const { displayAddToCartAction } = this.state;
    const { selectedProduct } = shoppingCart;

    return (
      <div className={classnames({
          "product-item": true,
          [classNames]: classNames !== undefined
        })}
        onMouseEnter={this.onMouseEnterEvent(product)}
        onMouseLeave={this.onMouseLeaveEvent}>
          <div className="product-item__img">
            <img src="https://justoybueno.com/wp-content/uploads/2018/09/leche-bolsa-copy.jpg"
                alt={product.name} />
            {
              (displayAddToCartAction || (selectedProduct && selectedProduct.id === product.id)) && (
                <div className="product-item__actions">
                  <AddToCartButton product={product} />
                </div>
              )
            }
          </div>
          <ProductStatusBadge
            classNames="product-item__status"
            productStatus={product.available ? IN_STOCK : NO_STOCK} />
          <div className="product-item__info">
            <AppLink classNames="product-item__name" linkTo={""}>
              {product.name}
            </AppLink>
            <ProductPrice price={product.price}
              classNames={"product-item__price"} />
          </div>
      </div>
      );
  }
}

ProductListItem.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number,
    price: PropTypes.string,
    available: PropTypes.bool,
    sublevel_id: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  classNames: PropTypes.string
};

export default connect(mapStateToProps, null)(ProductListItem);