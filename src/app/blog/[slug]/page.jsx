//detail page
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({slug}));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <div className={styles.container}>
      <article>
        <h1 className={styles.postTitle}>{post.title}</h1>
        {post.hook && (
          <p className="hook-text">{post.hook}</p>
        )}
        <div className={styles.postMeta}>
          <span className="meta-text">{formatDate(post.date)}</span>
          {post.category && (
            <span className="meta-text">. {post.category}</span>
          )}
        </div>
        <div className={styles.postContent}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day : 'numeric',
    month : 'long',
    year : 'numeric'
  });
}
