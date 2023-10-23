import styles from'./TripPlanners.module.scss';
import Item from './TripPlannersItem/TripPlannersItem';
import tripPlanners from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const SliderContainer = () => 
    <Swiper
      slidesPerView='auto'
      spaceBetween={32}
      freeMode={true}
      modules={[FreeMode]}
      className={styles['trip-planners']}
    >
    {tripPlanners.map((item) => (
      <SwiperSlide key={item.city} className={styles.slide}>
        <Item item={item} />
      </SwiperSlide>
    ))}
    </Swiper>;
  
const NoSwiperContainer = ({ isMobile }) => 
  <section>
    <div>
    {tripPlanners.map((item) => (
        <Item item={item} key={item.city} isMobile={isMobile}/>
    ))}
    </div>
  </section>;

const TripPlanners = ({ isMobile }) => 
<>
  <section>
    <div className={styles['general-container']}>
      <div className={styles.description}>
        <div className={styles.headers}>
          <h1>Trip Planners</h1>
          <div className={styles['orange-border']}></div>
          <p>20 years from now you will be more disappointed 
            by the things that you didn’t do. Stop regretting 
            and start travelling, start throwing off the bowlines.</p>
        </div>
        <div className={styles['button-decoration']}>
          <div className={styles['black-rectangle']}></div>
          <button><p>View all trip plans</p></button>
          <div className={styles['grey-rectangle']}></div>
        </div>
      </div>

        {!isMobile && 
        <div className={styles['sliders-container']}>
          < SliderContainer />
        </div>
        }
    </div>
  </section>

  {isMobile && <NoSwiperContainer  isMobile={isMobile}/>}
</>

export default TripPlanners;