import React from 'react';
import PropTypes from 'prop-types';

import AppButton from "components/AppButton";

import './styles.scss';

const ProductQuantityChooser = ({ decrementAction, incrementAction, quantity }) => {
  return (
    <div className="product-quantity-chooser">
      <AppButton actionButton={decrementAction}
                 disabled={quantity <= 1}
                 classNames={"product-quantity-chooser__button"}>
        -
      </AppButton>
      <input type="text" value={quantity}
             className="product-quantity-chooser__input"
             readOnly={true} />
      <AppButton actionButton={incrementAction}
                 classNames={"product-quantity-chooser__button"}>
        +
      </AppButton>
    </div>
  );
};

ProductQuantityChooser.propTypes = {
  decrementAction: PropTypes.func.isRequired,
  incrementAction: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired
};

export default ProductQuantityChooser;