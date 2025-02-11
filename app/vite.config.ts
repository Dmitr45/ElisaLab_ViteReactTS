import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// import typedScssModules from 'typed-scss-modules';

// https://vite.dev/config/
export default defineConfig({
  base: './',                 // Из какой дирректорию будут подгружаться файлы 
  plugins: [react(),          // React
    cssInjectedByJsPlugin({   // Плагин для управления сборкой css
      useStrictCSP: true,  // Указывает, следует ли использовать строгие правила Content Security Policy (CSP) при внедрении CSS
      relativeCSSInjection: true  // Указывает, следует ли использовать относительные пути при внедрении CSS
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  },
  build: {
    // lib: {
    //   name: 'vue3-module',
    //   entry: resolve(__dirname, 'src/main.tsx'),
    //   fileName: (format) => `vue3-module.${format}.js`,
    // },
    emptyOutDir: true, //  Очистить выходную директорию перед сборкой
  }
})
