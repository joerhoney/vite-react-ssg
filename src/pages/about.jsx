import React from "react";

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About This Project</h1>
      <p>
        This is a lightweight static site generator built with Vite and React.
        It provides similar functionality to Gatsby but with a simpler setup and
        fewer dependencies.
      </p>

      <h2>How it works</h2>
      <p>
        Pages are automatically generated from JSX files in the{" "}
        <code>src/pages/</code>
        directory. The file structure directly maps to your site's URL
        structure:
      </p>

      <ul>
        <li>
          <code>src/pages/index.jsx</code> → <code>/</code>
        </li>
        <li>
          <code>src/pages/about.jsx</code> → <code>/about</code>
        </li>
        <li>
          <code>src/pages/blog/index.jsx</code> → <code>/blog</code>
        </li>
        <li>
          <code>src/pages/blog/first-post.jsx</code> →{" "}
          <code>/blog/first-post</code>
        </li>
      </ul>

      <h2>Static Assets</h2>
      <p>
        Files in the <code>static/</code> directory are served directly:
      </p>
      <ul>
        <li>
          <code>static/logo.jpg</code> → <code>/logo.jpg</code>
        </li>
        <li>
          <code>static/robots.txt</code> → <code>/robots.txt</code>
        </li>
      </ul>

      <h2>Key Technologies</h2>
      <ul>
        <li>
          <strong>Vite</strong> - Fast build tool and dev server
        </li>
        <li>
          <strong>vite-ssg</strong> - Static site generation
        </li>
        <li>
          <strong>vite-plugin-pages</strong> - File-based routing
        </li>
        <li>
          <strong>React Router</strong> - Client-side routing
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;
