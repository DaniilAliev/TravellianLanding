import { useEffect, useState } from "react";

let mobileSize = 860;

const useMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize)
  }, []);

  return (width < mobileSize);
};

export default useMobile;