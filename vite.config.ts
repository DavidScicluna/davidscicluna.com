import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	base: '/',
	plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
	build: { outDir: 'build' },
	server: { open: false, port: 3000, watch: { usePolling: true } }
});
