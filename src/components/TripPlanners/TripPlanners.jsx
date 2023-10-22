import './TripPlanners.modules.scss';
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
      freeMode={false}
      modules={[FreeMode]}
      className="mySwiper trip-planners"
    >
    {tripPlanners.map((item) => (
      <SwiperSlide key={item.city}>
        <Item item={item} key={item.city} />
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
    <div className='general-container'>
      <div className='description'>
        <div className='headers'>
          <h1>Trip Planners</h1>
          <div className='orange-border'></div>
          <p>20 years from now you will be more disappointed 
            by the things that you didn’t do. Stop regretting 
            and start travelling, start throwing off the bowlines.</p>
        </div>
        <div className='button-decoration'>
          <div className='black-rectangle'></div>
          <button><p>View all trip plans</p></button>
          <div className='grey-rectangle'></div>
        </div>
      </div>

        {!isMobile && 
        <div className='sliders-container'>
          < SliderContainer />
        </div>
        }
    </div>
  </section>;

  {isMobile && <NoSwiperContainer  isMobile={isMobile}/>}
</>

export default TripPlanners;