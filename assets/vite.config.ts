import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueform from '@vueform/vueform/vite'
import ai from 'unplugin-auto-import/vite'
import eslint from 'vite-plugin-eslint'
import pages from 'vite-plugin-pages'
import components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    vueform(),
    eslint(),
    ai({
      dts: true,
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['vue', 'vue-router'],
      dirs: ['mmx/utils'],
    }),
    components({
      directoryAsNamespace: true,
      resolvers: [BootstrapVueNextResolver()],
      dirs: ['mmx/components', 'src/mgr/components'],
    }),
    pages({dirs: 'src/mgr/pages'}),
  ],
  server: {
    host: '0.0.0.0',
    port: 9090,
  },
  base: '/assets/components/mmx-forms/',
  build: {
    manifest: 'manifest.json',
    emptyOutDir: true,
    outDir: './dist',
    rollupOptions: {
      treeshake: 'recommended',
      input: {mgr: './src/mgr.ts', web: './src/web.ts'},
      output: {
        manualChunks(id: string) {
          if (id.includes('@vueform/vueform/locales')) {
            return 'vueform-locales'
          }
          if (id.includes('node_modules')) {
            const match = id.match(/node_modules\/(.*?)\//)
            if (match && match[1]) {
              return match[1].replace('@', '')
            }
            return 'vendor'
          }
        },
      },
    },
  },
})
