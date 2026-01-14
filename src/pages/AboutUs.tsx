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
        <div className={styles.servicesList}>
          <p className={styles.serviceItem}><strong>CHILDREN 8 WEEKS TO 5 YEARS OLD</strong></p>
          <p className={styles.serviceItem}><strong>G-TUBES/NG TUBES</strong></p>
          <p className={styles.serviceItem}><strong>OXYGEN</strong></p>
          <p className={styles.serviceItem}><strong>TRACHEOSTOMIES</strong></p>
          <p className={styles.serviceItem}><strong>CENTRAL LINES</strong></p>
        </div>
        <p className={styles.specialNote}>
          <strong><em>***WE WILL CONSIDER CHILDREN OUTSIDE OF THESE PARAMETERS ON A CASE-BY-CASE BASIS! CONTACT US FOR MORE INFO***</em></strong>
        </p>
        <p className={styles.serviceDetail}>
          <strong>DAILY VITAL SIGN MONITORING, MEDICATION ADMINISTRATION, TRACHEOSTOMY/G-TUBE CARE, ACTIVITIES OF DAILY LIVING (REPOSITIONING, TOTAL AND PARTIAL CARE CHANGES), GASTRIC TUBE FEEDINGS, AND MUCH MORE!</strong>
        </p>
        <p className={styles.serviceDetail}>
          <strong>EACH CHILD WILL HAVE A DETAILED AND PERSONALIZED CARE PLAN CREATED TOGETHER BY PARENTS AND MEDICAL STAFF!</strong>
        </p>
        <p className={styles.policyLink}>
          <strong>CLICK <span className={styles.linkText}>HERE</span> FOR OUR PARENTAL UPDATE POLICY & SICK CHILD AND STAFF POLICY</strong>
        </p>
        <p className={styles.serviceDetail}>
          <strong>FULL ACCESS TO CLASSROOM CAMERAS AND PARENT PORTAL THAT INCLUDES DAILY VITAL SIGN, MEDICATION ADMINISTRATION, AND NURSING CARE DOCUMENTATION</strong>
        </p>
      </div>
    </section>
  </div>
);

export default AboutUs;
