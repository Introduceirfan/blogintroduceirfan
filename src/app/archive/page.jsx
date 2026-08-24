import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

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