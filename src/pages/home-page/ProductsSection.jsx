// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";



const ProductsSection = () => {
  return (
    <section className='products' id='products'>

        <h1 className="heading">our <span>products</span></h1>

        <div className="product-slider">

            <Swiper
                pagination={true} modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints= {{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1020: {
                      slidesPerView: 3,
                    },
                }}
            >

                <SwiperSlide className="box">
                    <img src="image/product-1.png" alt="product" />
                    <h3>fresh orange</h3>
                    <div className="price">$4.99/- - 10.99/- </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">add to cart</a>
                </SwiperSlide>
                <SwiperSlide className="box">
                    <img src="image/product-2.png" alt="product" />
                    <h3>fresh onion</h3>
                    <div className="price">$4.99/- - 10.99/- </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">add to cart</a>
                </SwiperSlide>
                <SwiperSlide className="box">
                    <img src="image/product-3.png" alt="product" />
                    <h3>fresh meat</h3>
                    <div className="price">$4.99/- - 10.99/- </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">add to cart</a>
                </SwiperSlide>
                <SwiperSlide className="box">
                    <img src="image/product-4.png" alt="product" />
                    <h3>fresh cabbage</h3>
                    <div className="price">$4.99/- - 10.99/- </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">add to cart</a>
                </SwiperSlide>

                </Swiper>

        </div>

        <div className="product-slider">

            <Swiper
                pagination={true} modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints= {{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1020: {
                      slidesPerView: 3,
                    },
                }}
            >

                <SwiperSlide className="box">
                    <img src="image/product-5.png" alt="product" />
                    <h3>fresh potato</h3>
                    <div className="price">$4.99/- - 10.99/- </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">add to cart</a>
                </SwiperSlide>
                <SwiperSlide className="box">
                    <img src="image/product-6.png" alt="product" />
                    <h3>fresh avocado</h3>
                    <div className="price">$4.99/- - 10.99/- </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">add to cart</a>
                </SwiperSlide>
                <SwiperSlide className="box">
                    <img src="image/product-7.png" alt="product" />
                    <h3>fresh carrote</h3>
                    <div className="price">$4.99/- - 10.99/- </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">add to cart</a>
                </SwiperSlide>
                <SwiperSlide className="box">
                    <img src="image/product-8.png" alt="product" />
                    <h3>green lemon</h3>
                    <div className="price">$4.99/- - 10.99/- </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">add to cart</a>
                </SwiperSlide>

            </Swiper>

        </div>

    </section>
  )
}

export default ProductsSection