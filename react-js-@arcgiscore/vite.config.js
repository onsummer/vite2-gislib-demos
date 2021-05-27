import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    copy({
      targets: [
        { src: "node_modules/@arcgis/core/assets", dest: "public" }
      ],
      hook: 'writeBundle'
    })
  ]
})
