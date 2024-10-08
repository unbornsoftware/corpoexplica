import styles from "./PopupHeaderCreate.module.scss";

//Hooks
import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import DropdownPopup from "./DropdownPopup";

const PopupHeaderCreate = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div className={styles["un-create__itemMenu"]}>
      <button className={styles["un-button"]} onClick={() => setPopupOpen(isPopupOpen ? false : true)}>
        <span className="pr-icon-plus"></span>
      </button>
      <DropdownPopup isOpen={isPopupOpen} closePopup={() => setPopupOpen(false)}>
        <div className={styles["un-create__popup"]}>
          <div className={styles["un-item__create"]}>
            <Link to={"/client-register"} className="app-button outline small primary pr-icon-plus">
              Cadastrar Cliente
            </Link>
          </div>
          <div className={styles["un-item__create"]}>
            <Link to={"/specialist-register"} className="app-button outline small primary pr-icon-plus">
              Cadastrar Especialista
            </Link>
          </div>
          <div className={styles["un-item__create"]}>
            <Link className="app-button outline small primary pr-icon-plus">
              Agendar Atendimento
            </Link>
          </div>
        </div>
      </DropdownPopup>
    </div>
  );
};

export default PopupHeaderCreate;
