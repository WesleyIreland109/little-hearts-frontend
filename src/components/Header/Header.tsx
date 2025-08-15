import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <h1 className={styles.logoTitle}>Little Hearts</h1>
        <p className={styles.logoSubtitle}>Childcare Foundation</p>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/enrollment">Enrollment</Link></li>
          <li><Link to="/get-involved">Donate/Partner</Link></li>
          <li><Link to="/for-parents">For Parents</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
