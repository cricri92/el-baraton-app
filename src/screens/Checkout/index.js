import React from 'react';
import {connect} from "react-redux";

import './styles.scss';
import ProductInCheckout from "screens/Checkout/components/ProductInCheckout";

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
});

const Checkout = ({shoppingCart}) => {
  const { productList } = shoppingCart;

  return (
    <div className="checkout container">
      <div className="pb-5 pt-5">
        <h1>Carrito de compras</h1>
      </div>
      <div className="checkout__products-list">
        {
          productList.map(({product, quantity}) => (
            <ProductInCheckout key={product.id}
              product={product}
              quantity={quantity} />
          ))
        }
      </div>
    </div>
  );
};

Checkout.propTypes = {
  //
};

export default connect(mapStateToProps, null)(Checkout);