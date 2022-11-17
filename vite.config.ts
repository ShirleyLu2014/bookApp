import { defineConfig, optimizeDeps } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import path from "path";
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// });
export default defineConfig((mode) => {
  return {
    plugins: [
      vue(),
      eslintPlugin({
        include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"]
      })
    ],
    optimizeDeps: {
      include: [path.resolve(__dirname, "./src/main.ts")]
    }
  };
});
