// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";


const ReviewSection = () => {
  return (
    <section className="review" id="review">

      <h1 className="heading">customers <span>review</span></h1>

      <div className="review-slider">

      <Swiper
        pagination={true} modules={[Autoplay, Pagination]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints= {{
          0: {slidesPerView: 1},
          768: {slidesPerView: 2},
          1020: {slidesPerView: 3},
        }}
      >

          <SwiperSlide className="box">
            <img src="image/pic-1.png" alt="customer" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam?</p>
            <h3>john doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>
          <SwiperSlide className="box">
            <img src="image/pic-2.png" alt="customer" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam?</p>
            <h3>john doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>
          <SwiperSlide className="box">
            <img src="image/pic-3.png" alt="customer" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam?</p>
            <h3>john doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>
          <SwiperSlide className="box">
            <img src="image/pic-4.png" alt="customer" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam?</p>
            <h3>john doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>
          
        </Swiper>

      </div>

    </section>
  )
}

export default ReviewSection