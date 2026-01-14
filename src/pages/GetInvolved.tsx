import styles from './GetInvolved.module.css';

const GetInvolved = () => (
  <div className={styles.container}>
    {/* Top banner */}
    <section className={styles.bannerSection}>
      <div className={styles.bannerWrapper}>
        <h1 className={styles.bannerTitle}>FUNDRAISIERS &amp; VOLUNTEERS</h1>
      </div>
    </section>

    {/* Content */}
    <section className={styles.contentSection}>
      <p className={styles.mainLine}>
        CHECK BACK HERE FOR INFORMATION ON OUR FUNDRAISERS
      </p>

      <p className={styles.subLine}>
        IF YOU ARE INTERESTED IN VOLUNTEERING, PLEASE EMAIL US AT
        <br />
        DIRECTOR@LITTLEHEARTS-CHILDCARE.COM
      </p>

      <p className={styles.noteLine}>
        **ALL VOLUNTEERS MUST UNDERGO A BACKGROUND CHECK**
      </p>
    </section>

    {/* Other section: Other Ways to Get Involved */}
    <section className={styles.otherWaysSection}>
      <div className={styles.otherBannerWrapper}>
        <h2 className={styles.otherBannerTitle}>OTHER WAYS TO GET INVOLVED</h2>
      </div>

      <div className={styles.otherList}>
        <p className={styles.otherItem}>SHARE US ON SOCIAL MEDIA!</p>
        <p className={styles.otherItem}>AMAZON WISH LIST</p>
        <p className={styles.otherItem}>FOLLOW OUR PARTNERS!</p>
      </div>
    </section>

    {/* New section: Careers */}
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
  </div>
);

export default GetInvolved;
