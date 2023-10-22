import './TripPlannersItem.modules.scss';
import Star from '../../../../public/star.svg';
import { useState } from 'react';

const Item = ({ item, isMobile }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  console.log((isHovered || isMobile))

  return (
		<div className='trip-planners-card'>
			<div className={`image ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<img src={item.img} alt="" />
			</div>
      {(isHovered || isMobile) && 
        <div className={`info ${isHovered ? 'visible' : ''}`}>
				<div>
					<p>GUIDED TOUR</p>
					<p>{`${item.price}/Day`}</p>
				</div>
				<h3>{`${item.city} City Tour`}</h3>
        <div>
          <div className='stars'>
          {[...Array(5)].map((_, index) => (
            <img key={index} src={Star} alt="" />
          ))}
          </div>
          <p>7 Days tour</p>
        </div>
			</div>
      }
		</div>
	)
}

export default Item;