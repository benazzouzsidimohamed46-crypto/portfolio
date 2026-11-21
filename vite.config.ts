import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base: "./"` makes every asset path relative, so the same build works on
// https://<user>.github.io/ AND https://<user>.github.io/<repo>/ with no changes.
// To force an absolute base instead, build with:  VITE_BASE=/my-repo/ npm run build
export default defineConfig({
  base: process.env.VITE_BASE ?? "./",
  plugins: [react()],
  build: { target: "es2020", sourcemap: false },
});
