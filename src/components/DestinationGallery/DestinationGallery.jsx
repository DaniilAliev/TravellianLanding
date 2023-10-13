import './DestinationGallery.modules.scss';
import prevButton from '../../../public/chevron-down.svg'
import nextButton from '../../../public/chevron-up.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import images from './images';
import { useRef } from 'react';

const DestinationGallery = () => {
  const swiperNextRef = useRef();
  const swiperPrevRef = useRef();

  return (
    <>
    <section>
      <div className='headers-and-buttons-container'>
          <div className='headers'>
            <h1>Destination Gallery</h1>
            <div className='orange-border'></div>
            <p>Our photo gallery on trip</p>
          </div>
          <div className='buttons'>
            <button className='prevBtn' 
              onClick={() => swiperPrevRef.current.slidePrev()}
            >
              <img src={prevButton} alt="prev" />
            </button>
            <button className='nextBtn' 
            onClick={() => swiperNextRef.current.slideNext()}
            >
              <img src={nextButton} alt="next" />
            </button>
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
          className="mySwiper destination-gallery"
        >
          {images.map((image) => (
            <SwiperSlide key={image} className='slide'>
              <div className='image'>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          ))}
          </Swiper>

        </div>
    </section>
    </>
  )
};

export default DestinationGallery;