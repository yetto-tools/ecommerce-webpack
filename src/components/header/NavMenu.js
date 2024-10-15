import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";

import data from "../../data/menus.json";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={clsx(
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      )}
    >
      <nav>
        <ul>
          {typeof data === "object" &&
            data.menus.map((menu, idx) => {
              return (
                <li key={idx} className="mx-4 uppercase">
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    {menu.src && (
                      <img
                        src={menu.src}
                        alt={menu.name}
                        width={36}
                        className="me-2"
                      />
                    )}
                    <span className="fw-600">{menu.name}</span>

                    {menu.options.length !== 0 ? (
                      sidebarMenu ? (
                        <i className="fa fa-angle-right"></i>
                      ) : (
                        <i className="fa fa-angle-down" />
                      )
                    ) : (
                      ""
                    )}
                  </Link>

                  {menu.options.length === 0 ? (
                    ""
                  ) : (
                    <ul className="submenu">
                      {menu.options.map((item, idx) =>
                        idx === 0 ? (
                          <li className="border-b-2 mb-3">
                            <span className="">
                              <Link to={process.env.PUBLIC_URL + item?.link}>
                                <span className="fw-600 uppercase fs-6">
                                  {item.name}
                                </span>
                              </Link>
                            </span>
                          </li>
                        ) : (
                          <li key={idx} className="hype-street-menu ">
                            <Link to={process.env.PUBLIC_URL + item?.link}>
                              {item.src && (
                                <img
                                  className="pe-2"
                                  src={item.src}
                                  alt={item.name}
                                  width={32}
                                />
                              )}
                              <span className="uppercase">{item.name}</span>
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
