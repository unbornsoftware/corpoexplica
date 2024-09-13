import styles from "./PopupHeaderNotifications.module.scss";

//Hooks
import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import DropdownPopup from "./DropdownPopup";

const PopupHeaderNotifications = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div className={styles["un-notifications__itemMenu"]}>
      <button className={styles["un-button"]} onClick={() => setPopupOpen(isPopupOpen ? false : true)}>
        <span className="ub-icon-bell2"></span>
      </button>
      <DropdownPopup isOpen={isPopupOpen} closePopup={() => setPopupOpen(false)}>
        <div className={styles["un-notifications__popup"]}>
          <p>Atualizações Sistema</p>
          <div className={styles["un-item__notification"]}><p>Nova Autenticação</p><span>30 ago. 2024</span></div>
          <div className={styles["un-item__notification"]}><p>Nova Visualização Dados Usuário</p><span>30 ago. 2024</span></div>
        </div>
      </DropdownPopup>
    </div>
  );
};

export default PopupHeaderNotifications;
