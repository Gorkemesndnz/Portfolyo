import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // lightningcss xp.css'deki eski pseudo-element selectorlerini desteklemiyor
    // postcss transformer'a geçerek build hatasını önlüyoruz
    transformer: 'postcss',
  },
  build: {
    // Source map'leri production'da devre dışı bırak (kaynak kodun gizliliği)
    sourcemap: false,
    // xp.css'deki legacy selectorler CSS minifier'ı kırıyor, devre dışı bırak
    cssMinify: false,
  },
  server: {
    // Güvenlik başlıkları (dev sunucusu için)
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
})
