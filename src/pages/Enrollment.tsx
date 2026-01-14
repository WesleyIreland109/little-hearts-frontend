import React from 'react';
import styles from './Enrollment.module.css';

const Enrollment: React.FC = () => {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSer9HtoF_XK_QkNuT90PVXZHJOCPxxq0x5IQ8kJG3edTflpPQ/viewform';

  const handleClick = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.enrollmentPage}>
      {/* Top banner */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerWrapper}>
          <h1 className={styles.bannerTitle}>FOUNDING FAMILIES ENROLLMENT</h1>
        </div>
      </section>

      {/* Two-column content */}
      <section className={styles.contentSection}>
        {/* Left column: introductory paragraphs */}
        <div className={styles.leftColumn}>
          <p className={styles.enrollmentText}>
            LITTLE HEARTS IS BEGINNING WITH A CAREFULLY PLANNED SOFT LAUNCH TO ENSURE THE HIGHEST LEVEL OF SAFETY, QUALITY, AND PERSONALIZED CARE.
          </p>

          <p className={styles.enrollmentText}>
            DURING THIS PHASE, WE ARE SERVING A SMALL GROUP OF CHILDREN IN ONE CLASSROOM, ALLOWING OUR TEAM TO BUILD STRONG RELATIONSHIPS, REFINE CARE ROUTINES, AND SUPPORT EACH CHILD&apos;S UNIQUE MEDICAL AND DEVELOPMENTAL NEEDS.
          </p>

          <p className={styles.enrollmentText}>
            OUR INTENTIONAL APPROACH ENSURES FAMILIES RECEIVE THE LEVEL OF CARE AND COMMUNICATION THEY DESERVE FROM DAY ONE.
          </p>
        </div>

        {/* Right column: pre-enrollment callout */}
        <div className={styles.rightColumn}>
          <p className={styles.calloutHeading}>
            NOW ACCEPTING PRE-ENROLLMENT INTEREST FORMS!
          </p>

          <div className={styles.calloutButtonWrapper}>
            <button
              type="button"
              className={styles.preEnrollmentButton}
              onClick={handleClick}
            >
              PRE ENROLLMENT FORM
            </button>
          </div>

          <p className={styles.calloutDetails}>
            ENROLLING
            <br />
            6-8 CHILDREN
            <br />
            AGES 18 MONTHS TO 3 YEARS
            <br />
            PROGRAM HOURS: M-F, 7:30-3:30
          </p>

          <p className={styles.calloutFooter}>
            EXPECTED LAUNCH FALL 2026
          </p>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;
