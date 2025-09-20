import React from "react";
import { Link } from "react-router-dom";

function FirstPostPage() {
  return (
    <article className="blog-post">
      <header>
        <h1>My First Blog Post</h1>
        <p className="post-meta">Published on January 15, 2024</p>
      </header>

      <div className="post-content">
        <p>
          Welcome to my new static site! I'm excited to share my thoughts and
          experiences using this lightweight Vite + React static site generator.
        </p>

        <p>
          This setup gives me all the benefits of Gatsby - fast builds,
          SEO-friendly pages, and great developer experience - but with a
          simpler configuration and fewer dependencies.
        </p>

        <h2>What I love about this setup</h2>
        <ul>
          <li>Lightning-fast development with Vite's HMR</li>
          <li>Simple file-based routing</li>
          <li>Pre-rendered static HTML for SEO</li>
          <li>Client-side hydration for smooth navigation</li>
          <li>Easy deployment to Netlify</li>
        </ul>

        <p>
          I'm looking forward to building more content and exploring the web
          scraping capabilities of this setup!
        </p>
      </div>

      <footer>
        <Link to="/blog">← Back to Blog</Link>
      </footer>
    </article>
  );
}

export default FirstPostPage;
