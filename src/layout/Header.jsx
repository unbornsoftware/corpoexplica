import styles from "./Header.module.scss";

import { useState } from "react";

import PopupHeaderUser from "../components/PopupHeaderUser";
import PopupHeaderNotifications from "../components/PopupHeaderNotifications";

const Header = () => {
  return (
    <header className={styles["un-header"]}>
      <div className={styles["un-header__content"]}>
        <div className='un-page__title'>
          <span className='pr-icon-arrow-right2'></span>
          <p>Home / Dashboard</p>
        </div>
        <div className={styles["un-header__menu"]}>
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
