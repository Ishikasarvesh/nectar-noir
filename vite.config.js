import { defineConfig } from "vite";

export default defineConfig({
  base: "/nectar-noir/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});