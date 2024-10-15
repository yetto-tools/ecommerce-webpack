import PropTypes from "prop-types";
import clsx from "clsx";
import { EffectFade } from "swiper";
import sliderData from "../../data/hero-sliders/banner-single-image.json";
import HeroSliderNineSingle from "../../components/hero-slider/HeroSliderNineSingle.js";
import BannerSingle from "./BannerSigle.js";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  modules: [EffectFade],
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  speed: 1500,
  navigation: true,
  autoHeight: false,
};

const BannerSingleImage = ({ spaceLeftClass, spaceRightClass }) => {
  return (
    <div className={clsx("slider-area", spaceLeftClass, spaceRightClass)}>
      <div className="slider-active nav-style-1">
        {typeof sliderData === "object" &&
          sliderData.map((single) => (
            <BannerSingle data={single} sliderClass={""} />
          ))}
      </div>
    </div>
  );
};

BannerSingleImage.propTypes = {
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default BannerSingleImage;
