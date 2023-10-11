import HeroSection from "./components/HeroSection/HeroSection";
import './common.scss';
import Discover from "./components/Discover/Discover";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import OurBlog from "./components/OurBlog/OurBlog";
import TripPlanners from "./components/TripPlanners/TripPlanners";

const App = () =>
  <div className="container">
    <HeroSection />
    <Discover/>
    <SpecialOffer />
    <OurBlog />
    <TripPlanners />
  </div>
export default App
