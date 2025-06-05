import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> | false = {
  theme_color: "#cf2069",
  background_color: "#ffffff",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/desktop.png",
      sizes: "1712x966",
      form_factor: "wide",
      type: "image/png",
      label: "Main desktop screen of ElisaLab app",
    },
    {
      src: "/screenshots/mobile.png",
      sizes: "257x438",
      form_factor: "narrow",
      type: "image/png",
      label: "Main mobile screen of ElisaLab app",
    },
  ],
  orientation: "portrait",
  display: "standalone", // Display mode for the PWA
  display_override: ["minimal-ui", "standalone"], // Override display modes
  lang: "en-US", // Language of the PWA
  dir: "ltr", // Text direction
  name: "ElisaLab - Enzyme Immunoassay (ELISA) in the app",
  short_name: "ElisaLab",
  id: "/",
  start_url: "https://elisalab.ru/",
  scope: "https://elisalab.ru/",
  description:
    "The ElisaLab app is a time-tracker that will help you fully realize your security capabilities.",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Automatically update the service worker when a new version is available
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"], // Assets to be included in the PWA
      manifest: manifest, // PWA manifest configuration
      workbox: {
        // Workbox configuration
        globPatterns: ["**/*.{js,css,html,png,jpg,svg,ico}"], // Patterns to match files to be cached
      },
    }),
  ],
  build: {
    target: "esnext", //browsers can handle the latest ES features
  },
  server: {
    cors: false,
  },
});
