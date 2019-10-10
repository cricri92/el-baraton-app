import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from "screens/Products/components/ProductListItem";

const ProductsList = ({ productsList }) => {
  return (
    <div className="row">
      {
        productsList.map(product => (
          <ProductListItem classNames="col-xl-3 col-lg-4 col-sm-12"
                           product={product}
                           key={product.id} />
        ))
      }
    </div>
  )
};

ProductsList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.number,
    price: PropTypes.string,
    available: PropTypes.bool,
    sublevel_id: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.string
  })).isRequired
};

export default ProductsList;