import React, { Component } from 'react'
import {Carousel, CarouselItem} from "reactstrap";

import MainTitle from "./components/MainTitle";
import ProductsList from "screens/Products/components/ProductsList";
import ProductsService from "services/products";

import freshVariety from 'assets/img/fresh-variety.png';
import baratoVivir from 'assets/img/barato-vivir.png';

import './styles.scss';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      productsList: [],
      activeIndex: 0
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    new ProductsService().fetchAllProducts()
      .then(productsList => {
        this.setState({
          productsList
        });
      });
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === [1,2].length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? [1,2].length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  render() {
    const { productsList, activeIndex } = this.state;

    return (
      <div>
        <MainTitle className="pt-5 pb-3 pb-lg-5" titleText={"Ofertas imperdibles"}/>
        <Carousel activeIndex={activeIndex}
                  previous={this.previous}
                  next={this.next}>
          <CarouselItem>
            <img className="home-carousel-img" src={freshVariety} alt="Frescura y variedad"/>
          </CarouselItem>
          <CarouselItem>
            <img className="home-carousel-img" src={baratoVivir} alt="Barato vivir Café"/>
          </CarouselItem>
        </Carousel>
        <ProductsList productsList={productsList} />
      </div>
    )
  }
}

export default Home;