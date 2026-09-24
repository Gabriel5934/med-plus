// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "::",
    port: 4321,
    allowedHosts: true,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      strictPort: true,
    },
  },
});
