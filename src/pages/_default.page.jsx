import React from "react";

export { PageLayout };

function PageLayout({ children }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My SSG Site</title>
      </head>
      <body>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} My SSG Site</p>
        </footer>
      </body>
    </html>
  );
}
