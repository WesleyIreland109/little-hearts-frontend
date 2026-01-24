import styles from './AboutUs.module.css';

const AboutUs = () => (
  <div className={styles.aboutContainer}>
    {/* WHY LITTLE HEARTS IS SPECIAL section moved from Home */}
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

    {/* Services section remains below */}
    <section id="services-section" className={styles.servicesSection}>
      <div className={styles.servicesContent}>
        <div className={styles.missionTitleWrapper}>
          <h1 className={styles.servicesTitle}>SERVICES WE OFFER</h1>
        </div>

        <p className={styles.servicesIntro}>
          WE ACCEPT CHILDREN 8 WEEKS TO 5 YEARS OLD WITH ANY MEDICAL NEEDS, INCLUDING
        </p>

        <p className={styles.servicesNeedsLine}>
          G-TUBES/NG TUBES. OXYGEN. TRACHEOSTOMIES. CENTRAL LINES. MULTIPLE MEDICATIONS. CLOSE MONITORING.
        </p>

        <p className={styles.servicesDetailBlock}>
          DETAILED AND PERSONALIZED CARE PLAN CREATED TOGETHER BY PARENTS AND MEDICAL STAFF!
        </p>
      </div>
    </section>
  </div>
);

export default AboutUs;
