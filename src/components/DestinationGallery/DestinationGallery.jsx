import styles from './DestinationGallery.module.scss';
import prevButton from '../../../public/chevron-down.svg'
import nextButton from '../../../public/chevron-up.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import images from './images';
import { useRef } from 'react';

const DestinationGallery = ({ isMobile }) => {
  const swiperNextRef = useRef();
  const swiperPrevRef = useRef();

  return (
    <>
    <section>
      <div className={styles['headers-and-buttons-container']}>
          <div className={styles.headers}>
            <h1>Destination Gallery</h1>
            <div className={styles['orange-border']}></div>
            <p>Our photo gallery on trip</p>
          </div>
          {!isMobile && <div className={styles.buttons}>
            <button className={styles.prevBtn} 
              onClick={() => swiperPrevRef.current.slidePrev()}
            >
              <img src={prevButton} alt="prev" />
            </button>
            <button className={styles.nextBtn} 
            onClick={() => swiperNextRef.current.slideNext()}
            >
              <img src={nextButton} alt="next" />
            </button>
          </div>}
        </div>
    </section>

    <section>
      {!isMobile && <div className={styles.swipers}>
        <Swiper
          slidesPerView='auto'
          spaceBetween={32}
          freeMode={true}
          modules={[FreeMode]}
          onSwiper={(swiper) => {
            swiperNextRef.current = swiper;
            swiperPrevRef.current = swiper;
          }}
          className={`${styles.mySwiper} ${styles["destination-gallery"]}`}
        >
          {images.map((image) => (
            <SwiperSlide key={image} className={styles.slide}>
              <div className={styles.image}>
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>}
      {isMobile && 
        images.map((image) => (
          <div className={styles.image} key={image}>
            <img src={image} alt="" />
          </div>
        ))
      } 
    </section>
    </>
  )
};

export default DestinationGallery;