import React from 'react';
import PropTypes from 'prop-types';

import ProductPrice from "screens/Products/components/ProductPrice";

import ProductStatusBadge from "screens/Products/components/ProductStatusBadge";
import ProductQuantityChooser from "screens/Products/components/ProductQuantityChooser";
import RemoveProductFromCart from "screens/Checkout/components/RemoveProductFromCart";

import {IN_STOCK, NO_STOCK} from "screens/Products/constants";

import './styles.scss';
import {connect} from "react-redux";
import {decrementProductQty, incrementProductQty} from "store/shopping-cart/actions";

const mapDispatchToProps = dispatch => ({
  incrementProductQty: product => dispatch(incrementProductQty(product)),
  decrementQuantity: product => dispatch(decrementProductQty(product))
});

const ProductInCheckout = ({ product, quantity, incrementProductQty, decrementProductQty }) => {
  const incrementProductQuantity = () => {
    incrementProductQty({product, quantity})
  };

  const decrementProductQuantity = () => {
    decrementProductQty({product, quantity})
  };

  return (
    <div className="product-in-checkout">
      <img className="product-in-checkout__img"
        src="https://justoybueno.com/wp-content/uploads/2018/09/leche-bolsa-copy.jpg"
        alt={product.name} />
      <div className="product-in-checkout__info">
        <div className="product-in-checkout__info-item">
          <span className="product-in-checkout__name">
            {product.name}
          </span>
          <ProductPrice price={product.price}/>
        </div>
        <div className="product-in-checkout__info-item">
          <ProductStatusBadge productStatus={product.available ? IN_STOCK : NO_STOCK} />
          <ProductQuantityChooser incrementAction={incrementProductQuantity}
             decrementAction={decrementProductQuantity} quantity={quantity}/>
        </div>
      </div>
      <div className="product-checkout__actions">
        <RemoveProductFromCart productId={product.id}/>
      </div>
    </div>
  );
};

ProductInCheckout.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number,
    price: PropTypes.string,
    available: PropTypes.bool,
    sublevel_id: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  quantity: PropTypes.number.isRequired
};

export default connect(null, mapDispatchToProps)(ProductInCheckout);