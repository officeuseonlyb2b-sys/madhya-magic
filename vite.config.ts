// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//     hmr: {
//       overlay: false,
//     },
//   },
//   plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//     dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
//   },
//   build: {
//     target: "es2020",
//     cssCodeSplit: true,
//     sourcemap: false,
//     minify: "esbuild",
//     chunkSizeWarningLimit: 1200,
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           "react-vendor": ["react", "react-dom", "react-router-dom"],
//           "framer": ["framer-motion"],
//           "ui-radix": [
//             "@radix-ui/react-dialog",
//             "@radix-ui/react-dropdown-menu",
//             "@radix-ui/react-tooltip",
//             "@radix-ui/react-tabs",
//           ],
//           "query": ["@tanstack/react-query"],
//           "icons": ["lucide-react"],
//         },
//       },
//     },
//   },
// }));


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    open: true, // Automatically open in browser
    hmr: {
      overlay: false,
    },
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },

  build: {
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
    minify: "esbuild",
    chunkSizeWarningLimit: 1200,

    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],

          framer: ["framer-motion"],

          "ui-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-tabs",
          ],

          query: ["@tanstack/react-query"],

          icons: ["lucide-react"],
        },
      },
    },
  },
}));