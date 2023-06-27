import { useEffect, useState } from "react";
function useHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  let interval: NodeJS.Timer;
  function autoSlide() {
    clearInterval(interval);
    interval = setInterval(() => {
      currentSlide == 0
        ? setCurrentSlide(1)
        : currentSlide == 1
        ? setCurrentSlide(2)
        : setCurrentSlide(0);
    }, 10000);
  }
  function nextSlide() {
    if (currentSlide >= 2) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => (prev += 1));
    }
  }
  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(2);
    } else {
      setCurrentSlide((prev) => (prev -= 1));
    }
  }
  useEffect(() => {
    // autoSlide();
  }, [currentSlide]);
  return {
    currentSlide,
    prevSlide,
    nextSlide,
  };
}
export default useHome;
