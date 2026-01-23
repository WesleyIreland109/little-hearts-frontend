import styles from './ForParents.module.css';

const ForParents = () => (
  <div className={styles.container}>
    {/* Top DONATIONS banner (now unused but kept for layout consistency) */}
    <section className={styles.bannerSection}>
      <div className={styles.bannerWrapper}>
        <h1 className={styles.bannerTitle}>FOR PARENTS</h1>
      </div>
    </section>

    {/* Parents guide only */}
    <section className={styles.parentsGuideSection}>
      <p className={styles.parentsGuideIntro}>
        CLICK HERE TO DOWNLOAD OUR PRE-ENROLLMENT PARENT GUIDE &amp; CARE MODEL OVERVIEW
      </p>

      <div className={styles.parentsGuideButtonRow}>
        <button
          type="button"
          className={styles.parentsGuideButton}
          aria-label="Parent guide button (coming soon)"
        >
          PARENT GUIDE
        </button>
      </div>
    </section>
  </div>
);

export default ForParents;
