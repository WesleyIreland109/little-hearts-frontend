import styles from './GetInvolved.module.css';

const donateUrl = 'https://givebutter.com/littleheartschildcare';

const GetInvolved = () => (
  <div className={styles.container}>

    {/* Donations section moved from ForParents */}
    <section className={styles.donationsSection}>
      <div className={styles.donationsInner}>
        <h2 className={styles.donationsTitle}>DONATIONS</h2>

        <h3 className={styles.donationsMainHeading}>
          LITTLE HEARTS WOULD NOT BE POSSIBLE WITHOUT YOU
        </h3>

        <p className={styles.donationsSubHeading}>
          THANK YOU FOR SUPPORTING AND BELIEVING IN LITTLE HEARTS!
        </p>

        <div className={styles.donationsButtonRow}>
          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.donateButton}
          >
            DONATE!
          </a>
        </div>

        <p className={styles.donationsDisclaimer}>
          *** OUR APPLICATION FOR TAX-EXEMPT STATUS UNDER SECTION 501(C)(3) IS PENDING WITH THE IRS. IF APPROVED,
          THE EFFECTIVE DATE OF THE EXEMPTION WILL BE OUR DATE OF INCORPORATION (08/2025), AND DONATIONS MADE NOW
          WILL BE TAX-DEDUCTIBLE AS PERMITTED BY LAW.***
        </p>
      </div>
    </section>

    {/* Careers section */}
    <section className={styles.careersSection}>
      <div className={styles.careersBannerWrapper}>
        <h2 className={styles.careersBannerTitle}>CAREERS</h2>
      </div>

      <div className={styles.careersContent}>
        <p className={styles.careersIntro}>
          LITTLE HEARTS WILL BE HIRING FOR AN ANTICIPATED OPENING DATE OF FALL 2026
        </p>

        <div className={styles.careersRoleBlock}>
          <p className={styles.careersRoleTitle}>EXPERIENCED REGISTERED NURSES</p>
        </div>

        <div className={styles.careersRoleBlock}>
          <p className={styles.careersRoleTitle}>LEAD EARLY CHILDHOOD EDUCATORS</p>
          <p className={styles.careersRoleSubtitle}>INFANT, TODDLER, PRESCHOOL</p>
        </div>

        <div className={styles.careersRoleBlock}>
          <p className={styles.careersRoleTitle}>ASSISTANT CHILDHOOD EDUCATORS</p>
          <p className={styles.careersRoleSubtitle}>INFANT, TODDLER, PRESCHOOL</p>
        </div>

        <p className={styles.careersFooter}>
          EMAIL YOUR RESUME, LETTER OF INTEREST, AND 3 REFERENCES TO
          <br />
          <a href="mailto:DIRECTOR@LITTLEHEARTS-CHILDCARE.COM" className={styles.careersEmail}>
            DIRECTOR@LITTLEHEARTS-CHILDCARE.COM
          </a>
        </p>
      </div>
    </section>

    {/* Other section: Other Ways to Get Involved */}
    <section className={styles.otherWaysSection}>
      <div className={styles.otherBannerWrapper}>
        <h2 className={styles.otherBannerTitle}>OTHER WAYS TO GET INVOLVED</h2>
      </div>

      <div className={styles.otherList}>
        <p className={styles.otherItem}>SHARE US ON SOCIAL MEDIA!</p>
        <p className={styles.otherItem}>FOLLOW OUR PARTNERS!</p>
      </div>

      <div className={styles.amazonButtonRow}>
        <a
          href="https://www.amazon.com/hz/wishlist/ls/2GWZCT0QGXAN5?ref_=wl_share"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.amazonButton}
        >
          AMAZON WISH LIST
        </a>
      </div>
    </section>

  </div>
);

export default GetInvolved;
