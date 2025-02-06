import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Dossier de sortie où seront générés les fichiers
    sourcemap: true,  // Génère un fichier de source map pour le débogage si nécessaire
    rollupOptions: {
      input: 'index.html',  // Assure-toi que le point d'entrée est bien index.html
    }
  }
});
