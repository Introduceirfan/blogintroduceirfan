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
                <Image src="/notion_blogdef_light.png" alt="Logo" width={32} height={32} className={styles.avatar} />
                <span className={styles.blogTitle}> Blog Irfan </span>
            </Link>

            <div className={styles.navRight}>
                {mounted && (
                    <button
                        className={styles.themeToggle}
                        onClick={() => setTheme(theme === "dark" ? "light": "dark")}
                        aria-label="Toggle Theme">

                            {theme === "dark" ? "☀️" : "🌙"}
                    </button>
                )}
                <Link href="/archive">Archive</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>
    )
}