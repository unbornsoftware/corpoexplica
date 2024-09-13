import React from "react";
import styles from "./Footer.module.scss";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles["un-footer"]}>
      <div className={styles["un-footer__content"]}>
        <p>Desenvolvido por Unborn® em 2024, todos os direitos reservados.</p>
        <Link>Documentação</Link>
        <Link>Licensa</Link>
        <Link>Suporte</Link>
        <div className={styles["un-footer__logo"]}></div>
      </div>
    </footer>
  );
};

export default Footer;
