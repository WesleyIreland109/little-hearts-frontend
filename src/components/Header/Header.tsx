import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import NavBarLogo from '../../assets/Nav_Bar_Logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat:400,700';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT US' },
    { to: '/programs', label: 'PROGRAMS' },
    { to: '/enrollment', label: 'ENROLLMENT' },
    { to: '/get-involved', label: 'GET INVOLVED' },
    { to: '/for-parents', label: 'FOR PARENTS' },
    { to: '/contact', label: 'CONTACT' },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.logoSection}>
          <img src={NavBarLogo} alt="Little Hearts Logo" className={styles.logoImg} />
        </div>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.menuIcon}>&#9776;</span>
        </button>
      </div>
      <nav>
        <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={
                  location.pathname === link.to ? `${styles.active} ${styles.navList}a` : `${styles.navList}a`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
