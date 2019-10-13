import React, { Component } from 'react'
import {Carousel, CarouselItem} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import MainTitle from "screens/Home/components/MainTitle";
import ProductsList from "screens/Products/components/ProductsList";
import ProductsService from "services/products";
import AppLink from "components/AppLink";

import freshVariety from 'assets/img/fresh-variety.png';
import baratoVivir from 'assets/img/barato-vivir.png';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      bestOfferProducts: [],
      topThreeProducts: [],
      activeIndex: 0,
      productService: new ProductsService()
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
    this.state.productService.fetchMostAffordableProducts()
      .then(bestOfferProducts => {
        this.setState({
          bestOfferProducts
        });
      });

    this.state.productService.fetchTopProducts()
      .then(topThreeProducts => {
        this.setState({
          topThreeProducts
        })
      })
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
    const { bestOfferProducts, topThreeProducts, activeIndex } = this.state;

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
        <div className="container mt-3 mb-3 align-items-center">
          <MainTitle className="pt-5 pb-5" titleText={"Ofertas imperdibles"}/>
          <ProductsList productsList={bestOfferProducts} />
          <AppLink classNames={"all-products-link pb-5"} linkTo={""}>
            VER TODAS LAS OFERTAS <FontAwesomeIcon icon={faArrowRight} />
          </AppLink>
          <MainTitle className="pt-5 pb-5" titleText={"Los más vendidos"}/>
          <ProductsList productsList={topThreeProducts} />
          <AppLink classNames={"all-products-link pb-5"} linkTo={""}>
            VER TODAS LAS OFERTAS <FontAwesomeIcon icon={faArrowRight} />
          </AppLink>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;