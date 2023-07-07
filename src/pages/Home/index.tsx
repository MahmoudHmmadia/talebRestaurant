import Content from "./components/Content";
import coverI from "../../assets/hero-slider-1.jpg";
import coverII from "../../assets/hero-slider-2.jpg";
import coverIII from "../../assets/hero-slider-3.jpg";
import "./home.scss";
import Navbar from "../../components/navbar";
import useHome from "../../hooks/useHome";
import { UseContext } from "../../context/UseContext";
import Reservation from "../../components/reservation";
function Home() {
  const { currentSlide, nextSlide, prevSlide } = useHome();
  const { reservation } = UseContext();

  return (
    <div
      className="home relative flex flex-column g-3 overflow-hidden"
      id="home"
      style={{
        minHeight: "100vh",
      }}
    >
      {reservation && (
        <>
          <div className="overlay w-100 h-100 fixed black-bg z-10000 opacity-80"></div>
          <Reservation />
        </>
      )}
      <div className="container relative z_1">
        <Navbar />
      </div>
      <Content
        cover={coverI}
        title="For the love of
        delicious food"
        active={currentSlide === 0 && true}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <Content
        cover={coverII}
        title="For the love of Flavors Inspired by
        the Seasons"
        active={currentSlide === 1 && true}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <Content
        cover={coverIII}
        title="For the love of
        delicious food"
        active={currentSlide === 2 && true}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  );
}
export default Home;
