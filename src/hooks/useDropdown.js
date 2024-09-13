import { useState, useEffect, useRef } from 'react';

const useDropdown = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) && 
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return {
    isOpen,
    toggleDropdown,
    closeDropdown,
    dropdownRef,
    buttonRef,
  };
};

export default useDropdown;
