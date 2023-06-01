import { useState } from 'react';
import Link from 'next/link';
import styles from './NavLinks.module.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        Menu
      </button>
      {isOpen && (
        <div className={styles.dropdownContent} onClick={closeDropdown}>
          <Link href="#">
            About
          </Link>
          <Link href="#">
            About TTC
          </Link>
          <Link href="#">
            About TTC
          </Link>
          <Link href="#">
            About TTC
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
