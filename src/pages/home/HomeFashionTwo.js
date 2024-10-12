import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BannerOne from "../../wrappers/banner/BannerOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
import TabProductFive from "../../wrappers/product/TabProductFive";
import BrandLogoSliderFour from "../../wrappers/brand-logo/BrandLogoSliderFour";

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
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" />

        {/* slide de ligas  */}
        <BrandLogoSliderFour spaceBottomClass="pb-50" spaceTopClass="pt-50" />

        {/* banner */}
        <BannerOne spaceTopClass="pt-60" spaceBottomClass="pb-65" />

        {/* tab product */}
        <TabProductFive spaceBottomClass="pb-60" category="GORRAS" />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;
