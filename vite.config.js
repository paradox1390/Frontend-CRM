import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@routes": `${path.resolve(__dirname, "./src/routes/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@landing": `${path.resolve(__dirname, "./src/sections/landing")}`,
      "@sections": `${path.resolve(__dirname, "./src/sections/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
    },
  },
  build: {
    outDir: "public",
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
