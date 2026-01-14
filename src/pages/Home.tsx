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
      </div>
    </section>
    <section id="why-section" className={styles.whySection}>
      <div className={styles.whyTitleWrapper}>
        <h2 className={styles.whyTitle}>WHY LITTLE HEARTS IS SPECIAL</h2>
      </div>
      <div className={styles.whyGrid}>
        <p className={styles.whyItem}>
          SPECIALIZED CARE FOR MEDICALLY FRAGILE AND COMPLEX KIDS
        </p>
        <p className={styles.whyItem}>
          ALWAYS A LICENSED REGISTERED NURSE ON SITE
        </p>
        <p className={styles.whyItem}>
          FAMILY CENTERED, COLLABORATIVE APPROACH
        </p>
        <p className={styles.whyItem}>
          THERAPEUTIC AND ADAPTIVE CURRICULUM DESIGNED TO MEET THE UNIQUE DEVELOPMENTAL,
          MEDICAL, AND LEARNING NEEDS OF EACH CHILD.
        </p>
        <p className={styles.whyItem}>
          TRAINED AND EXPERIENCED ON CONGENITAL HEART DISEASE AND MEDICAL EMERGENCIES
        </p>
        <p className={styles.whyItem}>
          OUR COMMITMENT TO GOING ABOVE THE MINIMUM STANDARDS FOR HEALTH, CLEANLINESS, &amp; SAFETY
        </p>
      </div>
    </section>
  </div>
);

export default Home;
