import styles from './AboutUs.module.css';

const AboutUs = () => (
  <div className={styles.aboutContainer}>
    <section id="mission-section" className={styles.missionSection}>
      <div className={styles.missionContent}>
        <div className={styles.missionTitleWrapper}>
          <h1 className={styles.missionTitle}>OUR MISSION</h1>
        </div>
        <p className={styles.missionText}>
          <strong>LITTLE HEARTS</strong> IS A NEWLY ESTABLISHED <strong>NON-PROFIT CHILDCARE CENTER.</strong> WE PROVIDE CHILDCARE FOR CHILDREN WITH CONGENITAL HEART DEFECTS AND/OR COMPLEX MEDICAL NEEDS, ENSURING THAT THEY RECEIVE THE SPECIALIZED CARE THEY REQUIRE IN A SAFE, NURTURING, AND DEVELOPMENTALLY SUPPORTIVE ENVIRONMENT. IT IS DESIGNED TO BE A <strong>SAFE HAVEN FOR OUR HEART WARRIORS TO GROW, LEARN, AND THRIVE WHILE PROVIDING PARENTAL PEACE OF MIND WHILE AWAY.</strong>
        </p>
      </div>
    </section>

    <section id="services-section" className={styles.servicesSection}>
      <div className={styles.servicesContent}>
        <div className={styles.missionTitleWrapper}>
          <h1 className={styles.servicesTitle}>SERVICES WE OFFER</h1>
        </div>

        {/* Intro sentence */}
        <p className={styles.servicesIntro}>
          WE ACCEPT CHILDREN 8 WEEKS TO 5 YEARS OLD WITH ANY MEDICAL NEEDS, INCLUDING
        </p>

        {/* Line of medical needs */}
        <p className={styles.servicesNeedsLine}>
          G-TUBES/NG TUBES. OXYGEN. TRACHEOSTOMIES. CENTRAL LINES. MULTIPLE MEDICATIONS. CLOSE MONITORING.
        </p>

        {/* Detailed care plan statement */}
        <p className={styles.servicesDetailBlock}>
          DETAILED AND PERSONALIZED CARE PLAN CREATED TOGETHER BY PARENTS AND MEDICAL STAFF!
        </p>

        {/* Existing detailed bullets kept as supporting text */}
        <p className={styles.serviceDetail}>
          <strong>DAILY VITAL SIGN MONITORING, MEDICATION ADMINISTRATION, TRACHEOSTOMY/G-TUBE CARE, ACTIVITIES OF DAILY LIVING (REPOSITIONING, TOTAL AND PARTIAL CARE CHANGES), GASTRIC TUBE FEEDINGS, AND MUCH MORE!</strong>
        </p>

        <p className={styles.serviceDetail}>
          <strong>EACH CHILD WILL HAVE A DETAILED AND PERSONALIZED CARE PLAN CREATED TOGETHER BY PARENTS AND MEDICAL STAFF!</strong>
        </p>

        <p className={styles.policyLink}>
          <strong>CLICK <span className={styles.linkText}>HERE</span> FOR OUR PARENTAL UPDATE POLICY &amp; SICK CHILD AND STAFF POLICY</strong>
        </p>

        <p className={styles.serviceDetail}>
          <strong>FULL ACCESS TO CLASSROOM CAMERAS AND PARENT PORTAL THAT INCLUDES DAILY VITAL SIGN, MEDICATION ADMINISTRATION, AND NURSING CARE DOCUMENTATION</strong>
        </p>
      </div>
    </section>
  </div>
);

export default AboutUs;
