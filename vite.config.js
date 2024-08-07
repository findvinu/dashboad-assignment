import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dashboad-assignment",
  plugins: [react()],
  optimizeDeps: {
    include: ["@mui/material/Tooltip", "@emotion/styled"],
  },
});
