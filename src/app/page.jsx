//home page
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import styles from "./page.module.css";
import { format } from "node:path";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      {posts.map((post) => (
        <article key={post.slug} className={styles.postCard}>
          <Link href={`/blog/${post.slug}`} className={styles.postLink}>
            <h2 className={styles.postTitle}>{post.title}</h2>
          </Link>
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