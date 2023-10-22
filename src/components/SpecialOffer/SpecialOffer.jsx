import './SpecialOffer.modules.scss';
import prevButton from '../../../public/chevron-down.svg';
import nextButton from '../../../public/chevron-up.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Item from './Item/SpecialOfferItem';
import 'swiper/css';
import 'swiper/css/free-mode';
import specialOfferData from './data';
import { useRef } from 'react';

const SpecialOffer = ({ isMobile }) => {
  const swiperNextRef = useRef();
  const swiperPrevRef = useRef();

  const buttons = 
    <div className='buttons'>
      <button className='prevBtn' onClick={() => swiperPrevRef.current.slidePrev()}><img src={prevButton} alt="prev" /></button>
      <button className='nextBtn' onClick={() => swiperNextRef.current.slideNext()}><img src={nextButton} alt="next" /></button>
    </div>;

  return (
    <>
      <section>
        <div className='headers-and-buttons-container'>
          {!isMobile && buttons}
          <div className='headers'>
            <h1>Special Offer</h1>
            <div className='orange-border'></div>
            <p>Check out our special offer and discounts</p>
          </div>
        </div>
      </section>

      <section>
        <div className='swipers'>
          <Swiper
            slidesPerView='auto'
            spaceBetween={32}
            freeMode={true}
            modules={[FreeMode]}
            onSwiper={(swiper) => {
              swiperNextRef.current = swiper;
              swiperPrevRef.current = swiper;
            }}
            className="mySwiper special-offer"
          >
            {specialOfferData.map((item) => (
              <SwiperSlide key={item.city} className='slide'>
                <Item item={item}/>
              </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </section>

      {isMobile && <section>{buttons}</section>}
    </>
  )
}

export default SpecialOffer;