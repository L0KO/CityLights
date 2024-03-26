import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function DetailsCarusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="main-details__info-img">
          <img src="/img/searchPage/events/4.svg" alt="" className="d-block top__img" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="main-details__info-img">
          <img src="/img/searchPage/events/4.1.svg" alt="" className="d-block top__img" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="main-details__info-img">
          <img src="/img/searchPage/events/4.2.svg" alt="" className="d-block top__img" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default DetailsCarusel;