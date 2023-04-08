import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 8080 },
  preview: { port: 8080 },
  base:'/rest-countries-api-with-color-theme-switcher/'
});
