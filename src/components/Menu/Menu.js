import React from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";

const Menu = () => {
  const menuList = ["Home", "Features", "Pricing", "FAQs", "About"];

  return (
    <div className={styles.Menu}>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        {menuList.map((item) => {
          return (
            <li>
              <a href="#" className="nav-link px-2 text-white">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
