/* eslint-disable react/prop-types */
import styles from './Item.module.scss';
import locationImg from '../../../../public/locationImage.png'


const Item = ({ item }) => (
  <div className={styles.item} style={{ backgroundImage: `url(${item.img})`}}>
    <h3>{item.name}</h3>
    <div>
      <img src={locationImg} alt="" />
      <p>{item.location}</p>
    </div>
  </div>
);

export default Item;