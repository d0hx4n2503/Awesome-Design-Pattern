import { defineConfig } from "astro/config";

export default defineConfig({
  srcDir: "./docs/src",
  publicDir: "./docs/public",
  outDir: "./dist/site",
  site: "https://d0hx4n2503.github.io",
  base: "/Awesome-Design-Pattern/",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
