import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BannerOne from "../../wrappers/banner/BannerOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
import TabProductFive from "../../wrappers/product/TabProductFive";
import BrandLogoSliderFour from "../../wrappers/brand-logo/BrandLogoSliderFour";
import BrandGrid from "../../wrappers/banner/BrandGrid";
import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider";
import BannerSingleImage from "../../components/banner/BannerSingleImage";

const HomeFashionTwo = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Las Mejores Marcas"
        description="¡Hypeate! ⚡️ las mejores marcas."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderNine spaceLeftClass="" spaceRightClass="" />

        {/* slide de marcas  */}

        <BrandGrid />
        {/* slider new arrivals */}

        <BrandLogoSliderFour spaceBottomClass="pb-50" spaceTopClass="pt-50" />

        <CategoryTwoSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        <BannerSingleImage />
        <div className="pt-40 pb-20 mt-40 mb-40"></div>
        {/* tab product */}
        {/* <TabProductFive spaceBottomClass="pb-60" category="GORRAS" /> */}
        <div className="pt-40 pb-20 bg-white"></div>
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;
