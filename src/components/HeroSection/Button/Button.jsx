import styles from "./Button.module.scss" //?
import Arrow from '../../../../public/Arrow1.svg'

const Button = () => 
  <button className={styles.button}>
      <div>
        <p>Book Now!</p>
        <img src={Arrow}/> 
      </div>
      
  </button>;

export default Button;