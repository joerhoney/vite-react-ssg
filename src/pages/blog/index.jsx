import React from "react";
import { Link } from "react-router-dom";

function BlogIndexPage() {
  const posts = [
    {
      slug: "first-post",
      title: "My First Blog Post",
      excerpt: "This is the first post on my new static site!",
      date: "2024-01-15",
    },
    {
      slug: "second-post",
      title: "Learning Vite and React",
      excerpt: "Exploring the power of modern web development tools.",
      date: "2024-01-20",
    },
  ];

  return (
    <div className="blog-index">
      <h1>Blog</h1>
      <p>Welcome to my blog! Here are my latest posts:</p>

      <div className="posts-list">
        {posts.map((post) => (
          <article key={post.slug} className="post-preview">
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="post-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`}>Read more →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogIndexPage;
