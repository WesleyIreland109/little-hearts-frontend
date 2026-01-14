import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contactContainer}>
    <div className={styles.inner}>
      {/* Left: Contact form panel */}
      <section className={styles.formSection}>
        <h1 className={styles.title}>CONTACT US</h1>

        <form className={styles.form}>
          <label className={styles.label}>
            NAME
            <input type="text" className={styles.input} />
            <span className={styles.helperText}></span>
          </label>

          <label className={styles.label}>
            PHONE NUMBER
            <input type="tel" className={styles.input} />
            <span className={styles.helperText}></span>
          </label>

          <label className={styles.label}>
            EMAIL
            <input type="email" className={styles.input} />
            <span className={styles.helperText}></span>
          </label>

          <label className={styles.label}>
            BRIEF MESSAGE
            <textarea className={styles.textarea} rows={4} />
            <span className={styles.helperText}></span>
          </label>
        </form>
      </section>

      {/* Right: Email & social info */}
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
            <p className={styles.socialHandle}>@LITTLEHEARTS.CHILDCAREPROGRAM</p>

            <p className={styles.socialLabel}>FACEBOOK</p>
            <p className={styles.socialHandle}>@LITTLE HEARTS CHILDCARE FOUNDATION</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Contact;
