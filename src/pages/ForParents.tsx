import styles from './ForParents.module.css';

const ForParents = () => (
  <div className={styles.container}>
    {/* Top FOR PARENTS banner */}
    <section className={styles.bannerSection}>
      <div className={styles.bannerWrapper}>
        <h1 className={styles.bannerTitle}>FOR PARENTS</h1>
      </div>
    </section>

    {/* Parents guide text only */}
    <section className={styles.parentsGuideSection}>
      <p className={styles.parentsGuideIntro}>
        COMING SOON
      </p>
    </section>
  </div>
);

export default ForParents;
