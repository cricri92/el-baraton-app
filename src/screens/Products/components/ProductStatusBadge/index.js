import React from 'react';
import classnames from 'classnames/bind';

import {IN_STOCK, IN_STOCK_TEXT, NO_STOCK, NO_STOCK_TEXT} from "screens/Products/constants";

import './styles.scss';

const ProductStatusBadge = ({ productStatus, classNames }) => {
  return (
    <div className={classnames({
      "product-status-badge": true,
      "product-status-badge--in-stock": productStatus === IN_STOCK,
      "product-status-badge--no-stock": productStatus === NO_STOCK,
      [classNames]: classNames !== undefined
    })}>
      {
        productStatus === IN_STOCK && IN_STOCK_TEXT
      }
      {
        productStatus === NO_STOCK && NO_STOCK_TEXT
      }
    </div>
  )
};

export default ProductStatusBadge;