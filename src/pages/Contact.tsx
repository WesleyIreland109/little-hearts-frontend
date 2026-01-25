import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contactContainer}>
    <div className={styles.inner}>
      {/* Right: Email & social info only */}
      <section className={styles.infoSection}>
        <div className={styles.emailBlock}>
          <p className={styles.emailHeading}>EMAIL US</p>
          <p className={styles.emailText}>
            <a
              href="mailto:INFO@LITTLEHEARTS-CHILDCARE.COM"
              className={styles.emailLink}
            >
              INFO@LITTLEHEARTS-CHILDCARE.COM
            </a>{' '}
            WITH ANY ADDITIONAL QUESTIONS OR TO SET UP A PHONE CALL!
          </p>
        </div>

        <div className={styles.socialBlock}>
          <p className={styles.socialHeading}>
            FOLLOW US ON SOCIAL
            <br />
            MEDIA FOR MORE FUN
            <br />
            UPDATES
          </p>

          <div className={styles.socialLines}>
            <p className={styles.socialLabel}>INSTAGRAM</p>
            <p className={styles.socialHandle}>
              <a
                href="https://www.instagram.com/littlehearts.childcareprogram/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.emailLink}
              >
                @LITTLEHEARTS.CHILDCAREPROGRAM
              </a>
            </p>

            <p className={styles.socialLabel}>FACEBOOK</p>
            <p className={styles.socialHandle}>
              <a
                href="https://www.facebook.com/profile.php?id=61577602928042"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.emailLink}
              >
                @LITTLE HEARTS CHILDCARE FOUNDATION
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Contact;
