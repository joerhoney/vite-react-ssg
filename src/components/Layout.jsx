import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/scraping-demo">Scraping Demo</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Vitsby</p>
      </footer>
    </div>
  );
}

export default Layout;
