import Nav from "./Nav/Nav";
import Form from "./Form/Form";
import styles from './HeroSection.module.scss';

const HeroSection = () => 
  <div className={styles["hero-section"]}>
    <Nav />
    <div className={styles["text-section"]}>
      <div className={styles.container}>
        <div className={styles["text-hero"]}>
          <div>
            <h1>Start your unforgettable <br /> journey with us.</h1>
            <p>The best travel for your jouney begins now</p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  </div>

export default HeroSection;