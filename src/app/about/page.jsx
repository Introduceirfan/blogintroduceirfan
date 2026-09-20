import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <p className={`${styles.tagline} inbound-text`}>Tentang saya</p>

      <div className={styles.section}>
        <p>Hai semuanya, aku Irfan. Ini adalah blog ecek-ecek yang kutulis sebagai pengingat journey aja.
          <span style={{fontStyle: "italic"}}> If you want, i can write in english too, but i need to check on my translation thou..</span>
           Yang terpenting semoga harimu menyenangkan!
        </p>
      </div>

      <div className={styles.section}>
        <h1 className={`${styles.sectionTitle} meta-text`}> Kalau kamu kepo boleh diliat-liat juga nih.</h1>
        <div className={styles.divider} />
        <a href="https://github.com/Introduceirfan" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
        
        <a href="https://www.instagram.com/introduceirfan/" className={styles.link} target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  );
}