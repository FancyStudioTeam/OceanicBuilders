import { defineConfig } from "vitepress";
import { shared } from "./shared.js";

// biome-ignore lint/style/noDefaultExport:
export default defineConfig({
  ...shared,
});
