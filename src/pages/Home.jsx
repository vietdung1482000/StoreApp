import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import HeroImg from '../img/hero-img.png'
import Slide1 from '../img/double-sofa-01.png'
import Slide2 from '../img/double-sofa-02.png'
import CounterImg from '../img/counter-timer-img.png'
import { motion } from 'framer-motion'
import '../style/home.css'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../data/products'
import Clock from '../components/UI/Clock'

const Home = () => {
  const year = new Date().getFullYear()

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    const filterTrendingProducts = products.filter(item => item.category === 'chair')
    const filterBestSalesProducts = products.filter(item => item.category === 'sofa')
    const filterMobileProducts = products.filter(item => item.category === 'mobile')
    const filterWirelessProducts = products.filter(item => item.category === 'wireless')
    const filterPopularProducts = products.filter(item => item.category === 'watch')

    setTrendingProducts(filterTrendingProducts)
    setBestSalesProducts(filterBestSalesProducts)
    setMobileProducts(filterMobileProducts)
    setWirelessProducts(filterWirelessProducts)
    setPopularProducts(filterPopularProducts)
  }, [])

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero_subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, mollitia. Ipsum voluptatibus deleniti, esse labore reiciendis consectetur ducimus aliquid odit sunt excepturi dolor!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="btn_buy"><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <Slider {...settings}>
                <div>
                  <div className="hero_img">
                    <img src={HeroImg} alt="" />
                  </div>
                </div>
                <div>
                  <div className="hero_img">
                    <img src={Slide2} alt="" />
                  </div>
                </div>
                <div>
                  <div className="hero_img">
                    <img src={Slide1} alt="" />
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />

      <section className="trending_product">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>

            {/* danh sách sản phẩm */}
            <ProductsList data={trendingProducts} />

          </Row>
        </Container>
      </section>


      <section className="best_sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Best Sales</h2>
            </Col>

            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count mt-2" style={{ background: '#0a1d37' }}>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col'>
              <div className="clock_top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-6 mb-2'>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.1 }} className='mt-5 buy_btn store_btn'>
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={CounterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>


      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section_title'>New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className='popular_category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section_title'>Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home