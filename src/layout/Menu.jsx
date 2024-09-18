import React from "react";
import styles from "./Menu.module.scss";
import {NavLink, Link} from "react-router-dom"; 

const Menu = () => {
  return (
    <div className={styles["un-menu"]}>
      <span className={styles["un-logosystem"]}></span>
      <div className={styles["un-menu__content"]}>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? `${styles["un-menu__item"]} ${styles["active"]}` : styles["un-menu__item"]}>
          <span className="pr-icon-home"></span>
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? `${styles["un-menu__item"]} ${styles["active"]}` : styles["un-menu__item"]}>
          <span className="ub-icon-bell2"></span>
        </NavLink>
        {/* <NavLink to="/func2" className={({ isActive }) => isActive ? `${styles["un-menu__item"]} ${styles["active"]}` : styles["un-menu__item"]}>
          <span className="ub-icon-enterprise"></span>
        </NavLink>
        <NavLink to="/func3" className={({ isActive }) => isActive ? `${styles["un-menu__item"]} ${styles["active"]}` : styles["un-menu__item"]}>
          <span className="ub-icon-attachment"></span>
        </NavLink> */}
        <NavLink to="/config" className={({ isActive }) => isActive ? `${styles["un-menu__item"]} ${styles["config"]} ${styles["active"]}` : `${styles["config"]} ${styles["un-menu__item"]}`}>
          <span className="ub-icon-config"></span>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
