import Star from '../../../../public/star.svg';
import './ExperienceItem.modules.scss';

const ExperienseItem = ({ item }) => 
  <div className='slide-container'>
    <img src={item.avatar} alt={item.name} className='avatar'/>
    <p>{item.review}
    </p>
    <div className='stars'>
      {[...Array(5)].map((_, index) => (
        <img key={index} src={Star} alt="" />
      ))}
    </div>
    <h3>{item.name}</h3>
    <p>{item.profession}</p>
  </div>

export default ExperienseItem;