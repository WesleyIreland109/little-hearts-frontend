import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contactContainer}>
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

    <section className={styles.infoSection}>
      <p className={styles.infoText}>
        FEEL FREE TO EMAIL US{' '}
        <a href="mailto:INFO@LITTLEHEARTS-CHILDCARE.COM" className={styles.link}>
          INFO@LITTLEHEARTS-CHILDCARE.COM
        </a>{' '}
        WITH ANY ADDITIONAL QUESTIONS OR TO SET UP A PHONE CALL!
      </p>

      <p className={styles.infoText}>FOLLOW US ON SOCIAL MEDIA FOR MORE FUN UPDATES</p>

      <p className={styles.infoText}>
        INSTAGRAM @LITTLEHEARTS.CHILDCAREPROGRAM
        <br />
        FACEBOOK @LITTLE HEARTS CHILDCARE FOUNDATION
      </p>
    </section>
  </div>
);

export default Contact;
