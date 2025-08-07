import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <h1 className={styles.logoTitle}>Little Hearts</h1>
        <p className={styles.logoSubtitle}>Childcare Foundation</p>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Programs</a></li>
          <li><a href="#">Enrollment</a></li>
          <li><a href="#">Donate/Partner</a></li>
          <li><a href="#">For Parents</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
