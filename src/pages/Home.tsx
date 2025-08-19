import TransparentLogo from '../assets/Transparent_Logo.png';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.homeContainer}>
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <img
          src={TransparentLogo}
          alt="Little Hearts Main Logo"
          className={styles.mainLogo}
        />
        <h1 className={styles.mainTitle}>
          Little Hearts Childcare Foundation
        </h1>
        <p className={styles.mainDescription}>
          Nurturing young minds with love, care, and dedication. Creating a safe and enriching environment where children can grow, learn, and flourish into confident, happy individuals.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.btnPrimary}>Learn More</button>
          <button className={styles.btnSecondary}>Contact Us</button>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
