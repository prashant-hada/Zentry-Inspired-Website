import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    viteStaticCopy ({
      targets: [
        {
          src: 'public/_headers', // Path to the _headers file
          dest: '',                // Copy to the root of the build output (dist)
        },
      ],
    }),
  ],
})
