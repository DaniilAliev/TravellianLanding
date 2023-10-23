import styles from './Experience.module.scss';
import experienseData from './experienseData';
import ExperienseItem from './ExperienceItem/ExperienceItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import prevButton from '../../../public/chevron-down.svg'
import nextButton from '../../../public/chevron-up.svg'
import { useRef } from 'react';

const Experience = () => {
  const swiperNextRef = useRef();
  const swiperPrevRef = useRef();

  return (
    <section>
      <div className={styles['experiences-container']}>
        <div className={styles.headers}>
          <h1>Traveler’s Experiences</h1>
          <div className={styles['orange-border']}></div>
          <p>Here some awesome feedback from our travelers</p>
        </div>

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
          className={styles["experience-swiper"]}
        >
          {experienseData.map((item) => (
            <SwiperSlide key={item.name} className={styles['experience-slide']}>
              <ExperienseItem item={item} />
            </SwiperSlide>
          ))}
          </Swiper>
        </div>

        <div className={styles.buttons}>
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
          </div>
      </div>
    </section>
  )
};

export default Experience;