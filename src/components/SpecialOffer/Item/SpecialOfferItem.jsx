import './ItemSpecialOffer.modules.scss';
import Star from '../../../../public/star.svg';

const Item = ({ item }) => {
  return (
  <div className='card'>
    <div className='image-container'>
      <img src={item.img}/>
    </div>
    <div className='info'>
      <h3>{`${item.city}, ${item.country}`}</h3>
      <div className='stars'>
        {[...Array(5)].map((_, index) => (
          <img key={index} src={Star} alt="" />
        ))}
      </div>
      <p>
      5 nights and 4 days in 5 star hotel, breakfast and lunch included. 
      Very popular during the renaissance. Passage and going through the 
      cites of the world in classical literature.
      </p>
      <div className='details'>
        <h3>From <span>{`€${item.price}`}</span></h3>
        <button>DETAILS</button>
      </div>
      
    </div>
  </div>
  )
};

export default Item;