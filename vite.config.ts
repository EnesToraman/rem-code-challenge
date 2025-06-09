import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@api": path.resolve(__dirname, "src/api"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true
}
});
