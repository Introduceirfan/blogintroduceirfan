"use client";

import { useEffect, useState } from "react";
import styles from "../styles/BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.btn} ${visible ? styles.show : ""}`}
      onClick={scrollUp}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
