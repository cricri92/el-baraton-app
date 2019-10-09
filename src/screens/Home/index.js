import React, { Component } from 'react'

import MainTitle from "./components/MainTitle";
import ProductsList from "screens/Products/components/ProductsList";
import ProductsService from "services/products";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      productsList: []
    }
  }

  componentDidMount() {
    new ProductsService().fetchAllProducts()
      .then(productsList => {
        this.setState({
          productsList
        });
      });
  }

  render() {
    const { productsList } = this.state;

    return (
      <div className="container-fluid">
        <MainTitle className="pt-5 pb-3 pb-lg-5" titleText={"Las ofertas del día"}/>
        <ProductsList productsList={productsList} />
      </div>
    )
  }
}

export default Home;