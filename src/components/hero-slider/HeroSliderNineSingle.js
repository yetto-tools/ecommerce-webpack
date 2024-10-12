import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderNineSingle = ({ data, sliderClass }) => {
  return (
    <div
      className="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        {typeof data === "object" && data.title.length > 0 && (
          <div className="row justify-content-start">
            <div
              className={`col-xl-6 col-lg-6 col-md-7 ms-auto  glassy ${
                sliderClass === "swiper-slide-active" ? "glassy" : ""
              }`}
            >
              <div className={`slider-content-2 slider-animated-1`}>
                <h3 className="animated text-white">{data.title}</h3>
                <h1
                  className="animated text-white"
                  dangerouslySetInnerHTML={{ __html: data.subtitle }}
                ></h1>
                <div className="slider-btn btn-hover">
                  <Link
                    className="animated "
                    to={process.env.PUBLIC_URL + data.url}
                  >
                    Ver Más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

HeroSliderNineSingle.propTypes = {
  data: PropTypes.shape({}),
};

export default HeroSliderNineSingle;
