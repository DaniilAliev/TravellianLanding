import HeroSection from "./components/HeroSection/HeroSection";
import './common.scss';
import Discover from "./components/Discover/Discover";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import OurBlog from "./components/OurBlog/OurBlog";
import TripPlanners from "./components/TripPlanners/TripPlanners";
import DestinationGallery from "./components/DestinationGallery/DestinationGallery"; 
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import useMobile from "./hooks/useMobile";



const App = () => {
  let isMobile = useMobile();

  return (
    <div className="container">
    <HeroSection />
    <Discover isMobile={isMobile}/>
    <SpecialOffer isMobile={isMobile}/>
    <OurBlog />
    <TripPlanners isMobile={isMobile}/>
    <DestinationGallery isMobile={isMobile}/>
    <Experience isMobile={isMobile}/>
    <Footer />
  </div>
  )
}
export default App
