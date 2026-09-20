//home page
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import styles from "./page.module.css";


export default function Home() {
  const posts = getAllPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.postLink}>
          <article className={styles.postCard}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            {post.hook && (
              <p className="hook-text">{post.hook}</p>
            )}
            <div className={styles.postMeta}>
              <span className="meta-text">{formatDate(post.date)}</span>
              {post.category && (
                <span className="meta-text"> . {post.category}</span>
              )}
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}