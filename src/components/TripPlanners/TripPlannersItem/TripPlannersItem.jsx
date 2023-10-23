import styles from'./TripPlannersItem.module.scss';
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

  return (
		<div className={styles['trip-planners-card']}>
			<div className={`${styles.image} ${isHovered ? styles.hovered : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<img src={item.img} alt="" />
			</div>
      {(isHovered || isMobile) && 
        <div className={`${styles.info} ${isHovered ? styles.visible : ''}`}>
				<div>
					<p>GUIDED TOUR</p>
					<p>{`${item.price}/Day`}</p>
				</div>
				<h3>{`${item.city} City Tour`}</h3>
        <div>
          <div className={styles.stars}>
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