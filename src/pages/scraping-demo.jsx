import React from "react";
import WebScraper from "../components/WebScraper";

function ScrapingDemoPage() {
  // Fallback content in case scraping fails and no cache is available
  const fallbackContent = `
    <div style="padding: 1rem; border: 1px solid #ccc; background: #f9f9f9;">
      <h3>Fallback Content</h3>
      <p>This is the fallback content displayed when scraping fails and no cached version is available.</p>
    </div>
  `;

  return (
    <div className="scraping-demo">
      <h1>Web Scraping Demo</h1>
      <p>
        This page demonstrates the WebScraper component, which can fetch content
        from external websites during the build process.
      </p>

      <h2>Example 1: Scraping a GitHub README</h2>
      <p>
        This example attempts to scrape the main content from a GitHub
        repository's README:
      </p>
      <WebScraper
        url="https://github.com/vitejs/vite"
        selector="article.markdown-body"
        fallbackContent={fallbackContent}
      />

      <h2>Example 2: Scraping with a specific element</h2>
      <p>This example shows how you can target specific elements:</p>
      <WebScraper
        url="https://httpbin.org/html"
        selector="h1"
        fallbackContent="<h1>Fallback Title</h1>"
      />

      <h2>How it works</h2>
      <p>The WebScraper component:</p>
      <ul>
        <li>Fetches content from the specified URL during build time</li>
        <li>Selects the DOM element using the provided CSS selector</li>
        <li>
          Caches successful responses in the <code>.cache/</code> directory
        </li>
        <li>Falls back to cached content if scraping fails</li>
        <li>Shows fallback content if no cache exists and scraping fails</li>
        <li>Logs warnings to console when falling back to cache</li>
      </ul>

      <p>
        <strong>Note:</strong> The scraping happens during the static site
        generation process, so the scraped content is baked into your static
        HTML files.
      </p>
    </div>
  );
}

export default ScrapingDemoPage;
