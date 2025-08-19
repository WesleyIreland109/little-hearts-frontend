import styles from './Header.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat:400,500,700&family=Oswald:300,400,700';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

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
