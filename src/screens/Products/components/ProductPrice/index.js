import React from 'react';
import classnames from 'classnames/bind';

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

export default ProductPrice;