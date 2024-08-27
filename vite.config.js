import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PortfolioV2/',  // Adjust this based on your repo name
  plugins: [react()]
});
