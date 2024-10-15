import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FooterHypestreet = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  extraFooterClass,
}) => {
  const { t } = useTranslation();

  return (
    <footer
      className={clsx(
        "footer-area",
        backgroundColorClass,
        spaceTopClass,
        spaceBottomClass,
        extraFooterClass
      )}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="d-flex justify-content-between flex-wrap ">
          {/* Columna de Ayuda */}
          <div className="col-md-4 col-sm-8 mx-auto my-5 text-left ">
            <h5 className="font-bold text-lg uppercase mt-5">
              {t("footer.help")}
            </h5>
            <ul className="list-unstyled font-semibold mt-4">
              <li>
                <Link to="/size-guide">{t("footer.size_guide")}</Link>
              </li>
              <li>
                <Link to="/faq">{t("footer.faq")}</Link>
              </li>
              <li>
                <Link to="/shipping-info">{t("footer.shipping_info")}</Link>
              </li>
              <li>
                <Link to="/terms-conditions">
                  {t("footer.terms_conditions")}
                </Link>
              </li>
              <li>
                <Link to="/warranty">{t("footer.warranty")}</Link>
              </li>
            </ul>
          </div>

          {/* Columna de redes sociales */}
          <div className="col-md-4 col-sm-8 mx-auto my-5 text-center  uppercase">
            <img
              src="/assets/img/logo/logo-black.png"
              alt="HS logo"
              className="mb-3"
              style={{ width: "128px" }}
            />
            <p className="font-semibold text-lg">{t("follow_us")}</p>
            <div className="d-flex justify-content-center">
              <Link to="#" className="mx-2 bg-black rounded-circle">
                <FaFacebookF className="text-white m-1" />
              </Link>
              <Link to="#" className="mx-2 bg-black rounded-circle">
                <FaInstagram className="text-white m-1" />
              </Link>
              <Link to="#" className="mx-2 bg-black rounded-circle">
                <FaTiktok className="text-white m-1" />
              </Link>
              <Link to="#" className="mx-2 bg-black rounded-circle">
                <FaYoutube className="text-white m-1" />
              </Link>
            </div>
            <p className="mt-3">
              <Link to="/about-us" className="text-xs font-semibold">
                {t("about_us")}
              </Link>
            </p>
          </div>

          {/* Columna de contacto */}
          <div className="col-md-4 col-sm-8 mx-auto my-5 text-right">
            <h5 className="font-bold text-lg mt-5">{t("footer.contact_us")}</h5>
            <ul className="list-unstyled font-semibold mt-4">
              <li>
                <Link to="/store-locations">{t("footer.store_locations")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.contact_here")}</Link>
              </li>
              <li>
                <Link to="/whatsapp">{t("whatsapp")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <span className="text-black">
          ©{new Date().getFullYear()}{" "}
          <Link to="/" className="text-black">
            {t("footer.company_name")}
          </Link>
        </span>
      </div>

      <div className="container mt-4">
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center align-item-center mt-4">
            <span className="text-black text-xs">Creador por: </span>
            <a
              href="//dssolutionsgt.com"
              target="_blank"
              rel="noreferrer"
              className="mx-2 text-xs"
            >
              DS Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterHypestreet.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default FooterHypestreet;
