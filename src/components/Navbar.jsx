"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";


export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className={styles.nav}>
            
            <Link href="/" className={styles.brand}>
                <Image src="/notion_blogdef_light.png" alt="Logo" width={100} height={100} className={styles.avatar} />
                <span className={styles.blogTitle}> Blog Irfan </span>
            </Link>

            <div className={`${styles.navRight} meta-text`}>
                {mounted && (
                    <button
                        className={styles.themeToggle}
                        onClick={() => setTheme(theme === "dark" ? "light": "dark")}
                        aria-label="Toggle Theme">
                            <span className="material-icons">
                                {theme === "dark" ? "light_mode" : "dark_mode"}
                            </span>
                    </button>
                )}
                <Link href="/archive" className={styles.navLink}>Archive</Link>
                <Link href="/about" className={styles.navLink}>About</Link>
            </div>
        </nav>
    )
}