/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
	const envDir = path.resolve(__dirname, 'env')
	const env = loadEnv(mode === 'localdev' ? 'local' : mode, envDir)

	return {
		plugins: [
			react(),
			svgr({
				svgrOptions: {
					icon: true,
				},
			}),
			federation({
				name: 'auth',
				filename: 'remoteEntry.js',
				remotes: {
					remoteComponents: env.VITE_REMOTE_COMPONENTS,
				},
				shared: {
					react: {
						singleton: true,
						requiredVersion: '^18.3.1',
					},
					'react-dom': {
						singleton: true,
						requiredVersion: '^18.3.1',
					},
					'react-router-dom': {
						singleton: true,
						requiredVersion: '^6.25.1',
					},
				},
			}),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		esbuild: {
			supported: {
				'top-level-await': true,
			},
		},
		server: {
			port: 5001,
		},
		envDir,
	}
})
