import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className="meta-text">© {new Date().getFullYear()} Irfan. Ditulis dengan sedikit ngeluh.</p>
        </footer>
    )
}