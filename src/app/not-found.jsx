import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Halaman ini nggak ada, atau mungkin belum dibuat.</p>
      <Link href="/" className={styles.link}>
        ← Balik ke home
      </Link>
    </div>
  );
}
