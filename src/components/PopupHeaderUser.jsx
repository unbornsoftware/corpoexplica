import styles from "./PopupHeaderUser.module.scss";

//hooks
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Redux
import { logout, reset } from "../slices/authSlice";

// Components
import DropdownPopup from "./DropdownPopup";

const PopupHeaderUser = () => {
  const [isPopupUserOpen, setPopupUserOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    handleLoginRedirect();
  };

  return (
    <>
      {user && (
        <div className={styles["un-user__itemMenu"]}>
          <button className={styles["un-button"]} onClick={() => setPopupUserOpen(isPopupUserOpen ? false : true)}>
            <span className="pr-icon-user">{user.name.charAt(0)}</span>
          </button>
          <DropdownPopup isOpen={isPopupUserOpen} closePopup={() => setPopupUserOpen(false)}>
            <div className={styles["un-user__popup"]}>
              <div className={styles["un-user__thumb"]}>
                <div className={styles["un-thumb"]}>
                  <span className="pr-icon-user">{user.name.charAt(0)}</span>
                </div>
                <div className={styles["un-name"]}>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                </div>
                
              </div>
              <Link to="/account" className="ub-icon-userconfig">Conta</Link>
              <Link to="/" className="ub-icon-whats">Contatar Suporte</Link>
              <Link onClick={handleLogout} className="pr-icon-arrow-right2">Sair</Link>
            </div>
          </DropdownPopup>
        </div>
      )}
    </>
  );
};

export default PopupHeaderUser;
