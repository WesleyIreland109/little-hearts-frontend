import styles from './AboutUs.module.css';
import ashlynnPfp from '../assets/ashlynnPfp.jpg';

const AboutUs = () => (
  <div className={styles.aboutContainer}>
    {/* A LETTER TO OUR FAMILIES section */}
    <section className={styles.letterSection}>
      <div className={styles.letterInner}>
        <div className={styles.letterTextColumn}>
          <h1 className={styles.letterTitle}>A LETTER TO OUR FAMILIES</h1>

          <p className={styles.letterBody}>
            AS A PEDIATRIC NURSE PRACTITIONER WITH EXPERIENCE IN PEDIATRIC CRITICAL CARE, AND NOW AS A FIRST-TIME MOM,
            I HAVE THE UNIQUE AND DEEPLY MEANINGFUL OPPORTUNITY TO SERVE CHILDREN AND THEIR FAMILIES IN A WAY I NEVER
            IMAGINED.
          </p>

          <p className={styles.letterBody}>
            TO ME, LITTLE HEARTS IS ABOUT MORE THAN PROVIDING SAFE, DEVELOPMENTALLY APPROPRIATE CARE FOR CHILDREN WITH
            COMPLEX MEDICAL NEEDS. IT IS ABOUT FOSTERING THE LOVE, GROWTH, AND SENSE OF COMMUNITY I HAVE WITNESSED TIME
            AND TIME AGAIN, SUPPORTING ONE ANOTHER THROUGH EVERY STAGE OF THE JOURNEY.
          </p>

          <p className={styles.letterBody}>
            YOUR CHILDREN ARE FIGHTING. THEY ARE WINNING. THEY DESERVE THE SAME, IF NOT GREATER, OPPORTUNITIES TO
            EXPERIENCE A JOYFUL, SUPPORTED, AND MEANINGFUL CHILDHOOD.
          </p>

          <p className={styles.letterBody}>
            I WILL POUR MY WHOLE HEART INTO LITTLE HEARTS, BUT I CANNOT DO IT ALONE. YOU, AS PARENTS, HAVE BEEN AND WILL
            ALWAYS BE YOUR CHILD&apos;S GREATEST ADVOCATE. MY GOAL IS TO FOSTER A CULTURE OF HEALTHY, FAMILY-CENTERED CARE
            AND OPEN COMMUNICATION, WHERE WE PARTNER TOGETHER TO SUPPORT YOUR CHILD AND CELEBRATE THEIR GROWTH EVERY
            STEP OF THE WAY.
          </p>

          <p className={styles.letterBody}>
            IT WOULD BE AN HONOR TO WALK ALONGSIDE YOUR FAMILY AND WATCH YOUR CHILD GROW AND BLOSSOM WITHIN OUR
            COMMUNITY.
          </p>

          <p className={styles.letterClosing}>
            WITH HEART AND GRATITUDE,
            <br />
            ASHLYNN IRELAND, RN, MSN, PNP-AC
            <br />
            FOUNDER &amp; EXECUTIVE DIRECTOR, LITTLE HEARTS
          </p>
        </div>

        <div className={styles.letterImageColumn}>
          <img src={ashlynnPfp} alt="Ashlynn Ireland holding a baby" className={styles.letterImage} />
          <p className={styles.letterImageCaption}>
            ASHLYNN IRELAND, RN, MSN, PNP-AC
            <br />
            FOUNDER OF LITTLE HEARTS
          </p>
        </div>
      </div>
    </section>

    {/* WHY LITTLE HEARTS IS SPECIAL section moved from Home */}
    <section id="why-section" className={styles.whySection}>
      <div className={styles.whyTitleWrapper}>
        <h2 className={styles.whyTitle}>WHY LITTLE HEARTS IS SPECIAL</h2>
      </div>
      <div className={styles.whyGrid}>
        <p className={styles.whyItem}>
          SPECIALIZED CARE FOR MEDICALLY FRAGILE AND COMPLEX KIDS
        </p>
        <p className={styles.whyItem}>
          ALWAYS A LICENSED REGISTERED NURSE ON SITE
        </p>
        <p className={styles.whyItem}>
          FAMILY CENTERED, COLLABORATIVE APPROACH
        </p>
        <p className={styles.whyItem}>
          THERAPEUTIC AND ADAPTIVE CURRICULUM DESIGNED TO MEET THE UNIQUE DEVELOPMENTAL,
          MEDICAL, AND LEARNING NEEDS OF EACH CHILD.
        </p>
        <p className={styles.whyItem}>
          TRAINED AND EXPERIENCED ON CONGENITAL HEART DISEASE AND MEDICAL EMERGENCIES
        </p>
        <p className={styles.whyItem}>
          OUR COMMITMENT TO GOING ABOVE THE MINIMUM STANDARDS FOR HEALTH, CLEANLINESS, &amp; SAFETY
        </p>
      </div>
    </section>

    {/* Services section remains below */}
    <section id="services-section" className={styles.servicesSection}>
      <div className={styles.servicesContent}>
        <div className={styles.missionTitleWrapper}>
          <h1 className={styles.servicesTitle}>SERVICES WE OFFER</h1>
        </div>

        <p className={styles.servicesIntro}>
          WE ACCEPT CHILDREN 8 WEEKS TO 5 YEARS OLD WITH ANY MEDICAL NEEDS, INCLUDING
        </p>

        <p className={styles.servicesNeedsLine}>
          G-TUBES/NG TUBES. OXYGEN. TRACHEOSTOMIES. CENTRAL LINES. MULTIPLE MEDICATIONS. CLOSE MONITORING.
        </p>

        <p className={styles.servicesDetailBlock}>
          DETAILED AND PERSONALIZED CARE PLAN CREATED TOGETHER BY PARENTS AND MEDICAL STAFF!
        </p>
      </div>
    </section>
  </div>
);

export default AboutUs;
