import { useEffect, useState } from "react";

const useMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize)
  }, []);

  return (width < 860);
};

export default useMobile;