import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import './styles.scss';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProductListItem = ({ product, classNames }) => {
  return (
    <div className={classnames({
      "product-list-item": true,
      [classNames]: classNames !== undefined
    })}>
      <a href="http://google.com">
        <div className="text-center align-content-center product-list-item__img-container">
          <img src={"https://justoybueno.com/wp-content/uploads/2018/09/leche-bolsa-copy.jpg"} alt={product.name} className="product-list-item__img" />
        </div>
      </a>
      <div className="product-list-item__info">
        <a href="http://google.com" className="product-item-name">{product.name}</a>
        <span className="product-item-price">{product.price}</span>
      </div>
      <div className="product-list-item__actions">
        <button type="button" className="product-item-add-to-cart-button">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Añadir al carrito</span>
        </button>
      </div>
    </div>
  )
};

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

export default ProductListItem;