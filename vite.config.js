import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "monaco-languageclient/lib/browser":
        "monaco-languageclient/es/browser/index.js",
    },
  },
});
