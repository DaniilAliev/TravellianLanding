import styles from './Discover.module.scss';
import prevButton from '../../../public/chevron-down.svg'
import nextButton from '../../../public/chevron-up.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { destinationsData } from './data';
import Item from './Item/Item';
import { useRef } from 'react';

const Discover = ({ isMobile }) => {
  const swiperNextRef = useRef();
  const swiperPrevRef = useRef();

  const buttons = 
    <div className={styles.buttons}>
      <button className={styles.prevBtn} onClick={() => swiperPrevRef.current.slidePrev()}><img src={prevButton} alt="prev" /></button>
      <button className={styles.nextBtn} onClick={() => swiperNextRef.current.slideNext()}><img src={nextButton} alt="next" /></button>
    </div>;

  return (
    <>
      <section>
        <div className={styles['headers-and-buttons-container']}>
          <div className={styles.headers}>
            <h1>Popular Destinations</h1>
            <div className={styles['orange-border']}></div>
            <p>Most popular destinations around the world, from historical places to natural wonders.</p>
          </div>
          {!isMobile && buttons}
        </div>
      </section>

      <section>
        <div className={styles.swipers}>
          <Swiper
            slidesPerView='auto'
            spaceBetween={32}
            freeMode={true}
            modules={[FreeMode]}
            onSwiper={(swiper) => {
              swiperNextRef.current = swiper;
              swiperPrevRef.current = swiper;
            }}
            className={styles.mySwiper}
          >
            {destinationsData.map((item) => (
              <SwiperSlide key={item.name} className={styles.slide}>
                <Item item={item} />
              </SwiperSlide>))
            }
          </Swiper>
        </div>
      </section>

      {isMobile && <section>{buttons}</section>}
    </>
  )
}

export default Discover;