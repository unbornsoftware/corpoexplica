import styles from "./DropdownPopup.module.scss";

import { useRef, useEffect } from "react";

const DropdownPopup = ({ isOpen, closePopup, children, alignedToLeft}) => {

  const popupRef = useRef(null);



  useEffect(()=>{

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    const handleClickOutside = (event) => {
      if(popupRef.current && !popupRef.current.contains(event.target)){
        closePopup();
      }
    }

    if(isOpen){
      document.addEventListener('click', handleClickOutside, true);
      document.addEventListener('keydown', handleEscKey);
    }else{
      document.removeEventListener('click', handleClickOutside);
    }


    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscKey);
    }

  }, [isOpen, closePopup]);

  return (
    <>
      <div ref={popupRef} className={`${styles["pr-box__dropdownPopup"]} ${styles[alignedToLeft ? "toLeft" : ""]}`}  style={{ display: isOpen ? 'block' : 'none' }}>{children}</div>
    </>
  );
};

export default DropdownPopup;
