import styles from "./Header.module.scss";

import { useState } from "react";

import PopupHeaderUser from "../components/PopupHeaderUser";
import PopupHeaderNotifications from "../components/PopupHeaderNotifications";
import PopupHeaderCreate from "../components/PopupHeaderCreate";

const Header = () => {
  return (
    <header className={styles["un-header"]}>
      <div className={styles["un-header__content"]}>
        <div className={styles["un-header__menu"]}>
          <div className={styles["un-menu__item"]}>
            <PopupHeaderCreate />
          </div>
          <div className={styles["un-menu__item"]}>
            <PopupHeaderNotifications />
          </div>
          <div className={styles["un-menu__item"]}>
            <PopupHeaderUser />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
