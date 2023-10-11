import './TripPlannersItem.modules.scss';


const Item = ({ item }) => {
  return (
		<div className='trip-planners-card'>
			<div className='image'>
				<img src={item.img} alt="" />
			</div>
		</div>
	)
}

export default Item;