// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.medpluscorretora.com.br",
  server: {
    host: "::",
    port: 4321,
    allowedHosts: true,
  },
  vite: {
    server: {
      strictPort: true,
    },
  },
});
