import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="top__image-container">
          <img src="/img/homePage/karusel_1.svg" alt="" className="d-block top__img" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="top__image-container">
          <img src="/img/homePage/karusel_2.svg" alt="" className="d-block top__img" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="top__image-container">
          <img src="/img/homePage/karusel_3.svg" alt="" className="d-block top__img" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="top__image-container">
          <img src="/img/homePage/karusel_4.svg" alt="" className="d-block top__img" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel;