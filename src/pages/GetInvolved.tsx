import React from 'react';
import styles from './GetInvolved.module.css';

const GetInvolved = () => {
  const donateUrl = 'https://givebutter.com/littleheartschildcare';

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>GET INVOLVED</h1>
        <p className={styles.subTitle}>
          CHECK BACK HERE FOR INFORMATION ON OUR FUNDRAISERS AND VOLUNTEER OPPORTUNITIES!
        </p>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.thankYouTitle}>
          LITTLE HEARTS WOULD NOT BE POSSIBLE WITHOUT YOU!
        </h2>
        <p className={styles.thankYouSubtitle}>
          THANK YOU FOR SUPPORTING AND BELIEVING IN LITTLE HEARTS!
        </p>

        <div className={styles.callToActionRow}>
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
          <strong>
            *** OUR APPLICATION FOR TAX-EXEMPT STATUS UNDER SECTION 501(C)(3) IS PENDING WITH THE IRS. IF
            APPROVED, THE EFFECTIVE DATE OF THE EXEMPTION WILL BE OUR DATE OF INCORPORATION (06/27/2025),
            AND DONATIONS MADE NOW WILL BE TAX-DEDUCTIBLE AS PERMITTED BY LAW.***
          </strong>
        </p>
      </section>
    </div>
  );
};

export default GetInvolved;
