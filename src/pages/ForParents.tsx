import styles from './ForParents.module.css';

const donateUrl = 'https://givebutter.com/littleheartschildcare';

const ForParents = () => (
  <div className={styles.container}>
    {/* Top DONATIONS banner */}
    <section className={styles.bannerSection}>
      <div className={styles.bannerWrapper}>
        <h1 className={styles.bannerTitle}>DONATIONS</h1>
      </div>
    </section>

    {/* Main content */}
    <section className={styles.contentSection}>
      <h2 className={styles.mainHeading}>
        LITTLE HEARTS WOULD NOT BE POSSIBLE WITHOUT YOU
      </h2>

      <p className={styles.subHeading}>
        THANK YOU FOR SUPPORTING AND BELIEVING IN LITTLE HEARTS!
      </p>

      <div className={styles.buttonRow}>
        <a
          href={donateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.donateButton}
        >
          DONATE!
        </a>
      </div>

      <p className={styles.disclaimer}>
        *** OUR APPLICATION FOR TAX-EXEMPT STATUS UNDER SECTION 501(C)(3) IS PENDING WITH THE IRS. IF APPROVED,
        THE EFFECTIVE DATE OF THE EXEMPTION WILL BE OUR DATE OF INCORPORATION (08/2025), AND DONATIONS MADE NOW
        WILL BE TAX-DEDUCTIBLE AS PERMITTED BY LAW.***
      </p>
    </section>

    {/* New section: For Parents guide */}
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
