import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true,  // Ensures routing works in development
  },
  build: {
    outDir: "dist",  // Ensures correct output directory
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",  // Ensures correct base URL for production
  preview: {
    port: 5000,
    historyApiFallback: true,  // Ensures routing works in preview mode
  },
}));
