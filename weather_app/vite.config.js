import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/search": {
        target: "https://geocoding-api.open-meteo.com",
        secure: false,
        rewrite: (path) => {
          console.log(path);
          return path + "/v1";
        },
      },
      "/forecast": {
        target: "https://api.open-meteo.com",
        rewrite: (path) => {
          console.log(path);
          return path + "/v1";
        },
        secure: false,
      },
    },
  },
});
