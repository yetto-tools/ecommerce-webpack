import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const BannerSingle = ({ data, sliderClass }) => {
  console.log(data);
  return (
    <div
      className="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        {typeof data === "object" && data.title.length > 0 && (
          <div className="row justify-content-center">
            <div className={`w-100 d-flex justify-content-center mx-auto `}>
              <div className={`slider-content-2 slider-animated-1`}>
                <h2 className="animated text-white uppercase text-center">
                  {data.title}
                </h2>
                <h3
                  className="animated text-white uppercase"
                  dangerouslySetInnerHTML={{ __html: data.subtitle }}
                ></h3>
                <div className="slider-btn btn-hover rounded-pill">
                  <Link
                    className="animated rounded-pill"
                    to={process.env.PUBLIC_URL + data.url}
                  >
                    {data.button}
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

BannerSingle.propTypes = {
  data: PropTypes.shape({}),
};

export default BannerSingle;
