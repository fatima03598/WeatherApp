import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/search": {
        target: "https://geocoding-api.open-meteo.com/v1/search",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/search/, ""),
      },
      "/forecast": {
        target: "https://api.open-meteo.com/v1/forecast",
        secure: false,
        rewrite: (path) => path.replace(/^\/forecast/, ""),
      },
    },
  },
});
