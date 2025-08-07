import styles from './Hero.module.css';
import heartLogo from '../../assets/little-hearts-logo.png'; // replace with your logo asset if available

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={heartLogo} alt="Little Hearts Logo" className={styles.logoImage} />
      <h2 className={styles.tagline}>Special Care for Special Hearts</h2>
    </section>
  );
};

export default Hero;
