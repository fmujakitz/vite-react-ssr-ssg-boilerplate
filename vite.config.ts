import react from '@vitejs/plugin-react'
import { readdirSync } from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import { ssr } from 'vite-plugin-ssr/plugin'

const src = path.join(__dirname, 'src')
const paths = readdirSync(src, { withFileTypes: true })
  .reduce((acc, curr) => {
    if (curr.isDirectory()) {
      const { name } = curr
      acc[name] = path.join(src, name)
    }
    return acc
  }, {})

export default defineConfig({
  resolve: {
    alias: {
      ...paths
    }
  },
  plugins: [
    react({
      include: "**/*.tsx",
    }),
    ssr({
      prerender: true
    })
  ]
})
