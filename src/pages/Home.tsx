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
    <section id="mission-section" className={styles.missionSection}>
      <div className={styles.missionContent}>
        <div className={styles.missionTitleWrapper}>
          <h1 className={styles.missionTitle}>OUR MISSION</h1>
        </div>
        <p className={styles.missionText}>
          LITTLE HEARTS IS A NEWLY ESTABLISHED NON-PROFIT CHILDCARE CENTER. WE PROVIDE CHILDCARE FOR CHILDREN WITH CONGENITAL HEART DEFECTS AND/OR COMPLEX MEDICAL NEEDS, ENSURING THAT THEY RECEIVE THE SPECIALIZED CARE THEY REQUIRE IN A SAFE, NURTURING, AND DEVELOPMENTALLY SUPPORTIVE ENVIRONMENT. IT IS DESIGNED TO BE A SAFE HAVEN FOR OUR HEART WARRIORS TO GROW, LEARN, AND THRIVE WHILE PROVIDING PARENTAL PEACE OF MIND WHILE AWAY.
        </p>
      </div>
    </section>
  </div>
);

export default Home;
