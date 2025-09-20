import React, { useState, useEffect } from "react";
import { scrapeContent } from "../utils/scraper";

function WebScraper({ url, selector, fallbackContent = null }) {
  const [content, setContent] = useState(fallbackContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const scrapedContent = await scrapeContent(url, selector);
        setContent(scrapedContent);
        setError(null);
      } catch (err) {
        console.warn(
          `Failed to scrape content from ${url} with selector ${selector}:`,
          err.message
        );
        if (!fallbackContent) {
          setError(`Failed to load content: ${err.message}`);
        }
        // If fallbackContent exists, it stays as the content
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [url, selector, fallbackContent]);

  if (loading) {
    return <div className="web-scraper-loading">Loading content...</div>;
  }

  if (error && !content) {
    return <div className="web-scraper-error">{error}</div>;
  }

  if (!content) {
    return <div className="web-scraper-empty">No content available</div>;
  }

  return (
    <div
      className="web-scraper-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default WebScraper;
