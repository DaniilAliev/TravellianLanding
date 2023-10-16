import Nav from "./Nav/Nav";
import Form from "./Form/Form";
import './HeroSection.module.scss';
// css

const HeroSection = () => 
  <div className="hero-section">
    <Nav />
    <div className="text-section">
      <div className="container">
        <div className="text-hero">
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