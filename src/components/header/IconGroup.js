import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import MenuCart from "./sub-components/MenuCart";
import { useTranslation } from "react-i18next";

const IconGroup = ({ iconWhiteClass }) => {
  const { t } = useTranslation();

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className={clsx("header-right-wrap", iconWhiteClass)}>
      <div className="same-style header-search d-none d-lg-block mx-2">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Buscar..." />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="same-style header-compare d-none d-lg-block ms-2">
        <div className="account-setting d-none d-lg-block">
          <button
            className="account-setting-active"
            onClick={(e) => handleClick(e)}
          >
            <i className="pe-7s-user" />
          </button>
          <div className="account-dropdown">
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  {t("icon_group.login")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  {t("icon_group.register")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  {t("icon_group.my_account")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="same-style header-wishlist d-none d-lg-block mx-3">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
              {
                wishlistItems.length > 0
                ? <i className="fa fa-heart" style={{color: "#d21425"}}/> 
                : <i className="pe-7s-like" /> 
              }
          <span className="count-style">
            {wishlistItems && wishlistItems.length ? wishlistItems.length : 0}
          </span>
        </Link>
      </div> */}
      <div className="same-style cart-wrap d-none d-lg-block ms-2">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};

export default IconGroup;
