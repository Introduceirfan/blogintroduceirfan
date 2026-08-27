import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <p className={`${styles.tagline} meta-text`}>tentang gw</p>

      <div className={styles.section}>
        <p>Gw Irfan</p>
      </div>

      <div className={styles.section}>
        <h2 className={`${styles.sectionTitle} meta-text`}>blog ini</h2>
        <div className={styles.divider} />
        <p>gatau</p>
      </div>

      <div className={styles.section}>
        <h2 className={`${styles.sectionTitle} meta-text`}> elsewhere</h2>
        <div className={styles.divider} />
        <a href="https://github.com/" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/" className={styles.link} target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
}