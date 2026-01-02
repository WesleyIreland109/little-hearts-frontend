import React from 'react';
import styles from './Enrollment.module.css';

const Enrollment: React.FC = () => {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSer9HtoF_XK_QkNuT90PVXZHJOCPxxq0x5IQ8kJG3edTflpPQ/viewform';

  const handleClick = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.enrollmentPage}>
      <h1 className={styles.preEnrollmentTitle}>PRE-ENROLLMENT</h1>

      <p className={styles.subTitle}>CLICK HERE TO PRE- ENROLL</p>

      <div className={styles.buttonRow}>
        <button className={styles.preEnrollmentButton} onClick={handleClick}>
          PRE-ENROLLMENT INTEREST FORM!
        </button>
      </div>

      <p className={styles.offerText}>
        WE OFFER FULL TIME, PART TIME, AND DROP IN CHILDCARE!
      </p>

      <h2 className={styles.targetOpeningTitle}>
        TARGET OPENING
        <br />
        FALL 2026
      </h2>
    </div>
  );
};

export default Enrollment;
