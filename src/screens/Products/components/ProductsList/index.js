import React from 'react';
import PropTypes from 'prop-types';
import ProductListItem from "screens/Products/components/ProductListItem";

const ProductsList = ({ productsList }) => {
  return (
    <div className="row justify-content-between products-list">
      {
        productsList.map(product => (
            <ProductListItem product={product}
               key={product.id}
              classNames={"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"} />
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