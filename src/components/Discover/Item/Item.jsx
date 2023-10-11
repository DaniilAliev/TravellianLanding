/* eslint-disable react/prop-types */
import './Item.modules.scss';
import locationImg from '../../../../public/locationImage.png'


const Item = ({ item }) => (
  <div className='item' style={{ backgroundImage: `url(${item.img})`}}>
    <h3>{item.name}</h3>
    <div>
      <img src={locationImg} alt="" />
      <p>{item.location}</p>
    </div>
  </div>
);

export default Item;