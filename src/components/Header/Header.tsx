import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBarLogo from '../../assets/Nav_Bar_Logo.png';

const Header = () => {
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
      <div className={styles.logoSection}>
        <img src={NavBarLogo} alt="Little Hearts Logo" className={styles.logoImg} />
      </div>
      <nav>
        <ul className={styles.navList}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={
                  location.pathname === link.to ? `${styles.active} ${styles.navList}a` : `${styles.navList}a`
                }
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
