import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import './styles.scss';

const ProductPrice = ({ price, classNames }) => {
  return (
    <span className={classnames({
      "product-price": true,
      [classNames]: classNames !== undefined
    })}>
      {price}
    </span>
  )
};

ProductPrice.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  classnames: PropTypes.string
};

export default ProductPrice;