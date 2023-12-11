/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  test: {
    globals: true,
    watch: false,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
