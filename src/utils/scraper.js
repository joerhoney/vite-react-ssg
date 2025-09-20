import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";

// Cache directory for storing scraped content
const CACHE_DIR = path.resolve(".cache");

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Generate cache filename from URL and selector
function getCacheFilename(url, selector) {
  const hash = Buffer.from(`${url}::${selector}`).toString("base64url");
  return path.join(CACHE_DIR, `${hash}.html`);
}

// Save content to cache
function saveToCache(url, selector, content) {
  try {
    const filename = getCacheFilename(url, selector);
    fs.writeFileSync(filename, content, "utf8");
  } catch (err) {
    console.warn("Failed to save to cache:", err.message);
  }
}

// Load content from cache
function loadFromCache(url, selector) {
  try {
    const filename = getCacheFilename(url, selector);
    if (fs.existsSync(filename)) {
      return fs.readFileSync(filename, "utf8");
    }
  } catch (err) {
    console.warn("Failed to load from cache:", err.message);
  }
  return null;
}

// Scrape content from a webpage
export async function scrapeContent(url, selector) {
  try {
    // Dynamically import node-fetch for Node.js environment
    const fetch = (await import("node-fetch")).default;

    console.log(`Scraping content from ${url} with selector: ${selector}`);

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Vitsby/1.0)",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const element = dom.window.document.querySelector(selector);

    if (!element) {
      throw new Error(`No element found with selector: ${selector}`);
    }

    const content = element.outerHTML;

    // Save successful scrape to cache
    saveToCache(url, selector, content);

    return content;
  } catch (error) {
    console.warn(`Scraping failed for ${url}: ${error.message}`);

    // Try to load from cache
    const cachedContent = loadFromCache(url, selector);
    if (cachedContent) {
      console.log(`Using cached content for ${url}`);
      return cachedContent;
    }

    // If no cache available, throw the original error
    throw error;
  }
}

// Browser-side version (fallback for client-side rendering)
export async function scrapeContentBrowser(url, selector) {
  // In browser environment, we can't do CORS requests to arbitrary domains
  // This is a placeholder that would need a proxy or API endpoint
  throw new Error("Browser-side scraping requires a proxy endpoint");
}
