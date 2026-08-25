import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./page.module.css";

function getBlogPosts() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug, 
      title: data.title,
      date: data.date,
    };
  });

  return posts.sort((a, b ) => new Date(b.date) - new Date(a.date));

}

function groupYear(posts) {
  return posts.reduce((as, post) => {
    const year = new Date(post.date).getFullYear();
    if (!as[year]) as[year] = [];
    as[year].push(post);
    return as
  }, {});
}

export default function Archive() {
    const posts = getBlogPosts();
    const grouped = groupYear(posts);
    const years = Object.keys(grouped).sort((a, b) => b - a);

    return (
        <div className={styles.container}>
            <p className={`${styles.tagline} meta-text`}>tulisan ini</p>

            {years.map((year) => (
                <div key={year} className={styles.yearGroup}>
                    <h2 className={`${styles.year} meta-text`}>{year}</h2>
                    <div className={styles.divider} />
                    {grouped[year].map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className={styles.entry}
                        >
                            <span className={styles.date}>
                                {new Date(post.date).toLocaleDateString("id-ID", {
                                    day: "2-digit",
                                    month: "short",
                                })}
                            </span>
                            <span className={styles.title}>{post.title}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
}