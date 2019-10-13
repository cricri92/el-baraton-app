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

    this.promoItems = [
      {
        id: 1,
        img: freshVariety,
        description: 'Frescura y variedad'
      },
      {
        id: 2,
        img: baratoVivir,
        description: 'Café Barato Vivir'
      },
    ];

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    new ProductsService().fetchMostAffordableProducts()
      .then(productsList => {
        this.setState({
          productsList
        });
      });
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.promoItems.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.promoItems.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  render() {
    const { productsList, activeIndex } = this.state;

    return (
      <React.Fragment>
        <Carousel activeIndex={activeIndex}
                  previous={this.previous}
                  next={this.next}>
          {
            this.promoItems.map(item =>
              <CarouselItem key={item.id}>
                <img className="home-carousel-img" src={item.img} alt={item.description}/>
              </CarouselItem>
            )
          }
        </Carousel>
        <div className="container mt-3">
          <MainTitle className="pt-5 pb-5" titleText={"Ofertas imperdibles"}/>
          <ProductsList productsList={productsList} />
        </div>
      </React.Fragment>
    )
  }
}

export default Home;