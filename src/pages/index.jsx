import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Vitsby</h1>
      <p>
        This is a lightweight static site generator built with Vite and React,
        similar to Gatsby but with a simpler setup.
      </p>

      <h2>Features</h2>
      <ul>
        <li>✅ Static site generation with Vite</li>
        <li>✅ File-based routing (pages/ directory)</li>
        <li>✅ Static assets (static/ directory)</li>
        <li>✅ SEO-friendly pre-rendered pages</li>
        <li>✅ Client-side hydration for fast navigation</li>
        <li>✅ Web scraping component with caching</li>
      </ul>

      <h2>Example Pages</h2>
      <ul>
        <li>
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/blog">Blog Index</Link>
        </li>
        <li>
          <Link to="/blog/first-post">First Blog Post</Link>
        </li>
        <li>
          <Link to="/scraping-demo">Web Scraping Demo</Link>
        </li>
      </ul>

      <h2>Directory Structure</h2>
      <pre>{`
├── src/
│   ├── pages/          # Auto-routed pages (like Gatsby)
│   ├── components/     # Reusable React components
│   ├── utils/          # Utility functions
│   └── styles/         # CSS files
├── static/             # Static assets (served directly)
└── .cache/             # Cached scraped content
      `}</pre>
    </div>
  );
}

export default HomePage;
