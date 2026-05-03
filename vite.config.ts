import { federation } from '@module-federation/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/me/' : '/',
  plugins: [
    federation({
      name: 'michaelmanzano',
      filename: 'remoteEntry.js',
      manifest: true,
      exposes: {
        './App': './src/federated.ts',
      },
      shared: {
        vue: { singleton: true, requiredVersion: '^3.0.0' },
        'vue-router': { singleton: true, requiredVersion: '^4.0.0' },
        pinia: { singleton: true, requiredVersion: '^3.0.0' },
      },
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  server: { port: 3002, strictPort: true, origin: 'http://localhost:3002' },
  preview: { port: 3002, strictPort: true },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
