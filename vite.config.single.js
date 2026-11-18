import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// 单文件构建：把所有 JS / CSS / 图片 / 视频内联进一个 html，
// 双击即可在浏览器打开（file://），不需要本地服务器。
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'dist-single',
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 1024 * 1024 * 12,
    rollupOptions: {
      input: 'single.html'
    }
  }
})
