import styles from './Programs.module.css';

const Programs = () => (
  <div className={styles.programsContainer}>
    {/* Top banner: OUR CLASSROOMS */}
    <section className={styles.bannerSection}>
      <div className={styles.bannerWrapper}>
        <h1 className={styles.bannerTitle}>OUR CLASSROOMS</h1>
      </div>
    </section>

    {/* Three classroom tiles (text only, images can be added later) */}
    <section className={styles.classroomsSection}>
      <div className={styles.classroomCard}>
        <h2 className={styles.classroomTitle}>INFANT</h2>
      </div>

      <div className={styles.classroomCard}>
        <h2 className={styles.classroomTitle}>TODDLER</h2>
      </div>

      <div className={styles.classroomCard}>
        <h2 className={styles.classroomTitle}>PRESCHOOL</h2>
      </div>
    </section>
  </div>
);

export default Programs;
