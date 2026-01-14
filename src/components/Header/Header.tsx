import styles from './Header.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT US', hasDropdown: true },
    { to: '/programs', label: 'PROGRAMS' },
    { to: '/enrollment', label: 'ENROLLMENT' },
    { to: '/get-involved', label: 'GET INVOLVED' },
    { to: '/for-parents', label: 'FOR PARENTS' },
    { to: '/contact', label: 'CONTACT' },
  ];

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setAboutDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const handleAboutNavigation = (section: string) => {
    navigate('/about');
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setAboutDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <h1 className={styles.logoTitle}>Little Hearts</h1>
        <h2 className={styles.logoSubtitle}>Childcare Foundation</h2>
      </div>

      <nav>
        <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li 
              key={link.to}
              className={link.hasDropdown ? styles.dropdownContainer : ''}
              onMouseEnter={() => link.hasDropdown && !menuOpen && handleDropdownEnter()}
              onMouseLeave={() => link.hasDropdown && !menuOpen && handleDropdownLeave()}
            >
              {link.hasDropdown ? (
                <>
                  <Link
                    to={link.to}
                    className={
                      location.pathname === link.to ? `${styles.navList}a ${styles.active}` : `${styles.navList}a`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {aboutDropdownOpen && !menuOpen && (
                    <div 
                      className={styles.dropdown}
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button 
                        className={styles.dropdownItem}
                        onClick={() => handleAboutNavigation('mission-section')}
                      >
                        ABOUT US
                      </button>
                      <button 
                        className={styles.dropdownItem}
                        onClick={() => handleAboutNavigation('services-section')}
                      >
                        SERVICES WE OFFER
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.to}
                  className={
                    location.pathname === link.to ? `${styles.navList}a ${styles.active}` : `${styles.navList}a`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle navigation menu"
      >
        <span className={styles.menuIcon}>&#9776;</span>
      </button>
    </header>
  );
};

export default Header;
