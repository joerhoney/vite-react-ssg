import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: "src/pages",
      extensions: ["jsx", "js"],
      exclude: ["**/components/**/*"],
    }),
  ],
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false,
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  publicDir: "static",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
