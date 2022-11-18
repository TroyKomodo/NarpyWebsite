import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default () => {
	return defineConfig({
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: ["vue", "vue-router"],
						fa: [
							"@fortawesome/fontawesome-svg-core",
							"@fortawesome/free-brands-svg-icons",
							"@fortawesome/vue-fontawesome",
						],
					},
				},
			},
		},
		plugins: [vue()],
		server: {
			port: 4500,
		},
		resolve: {
			alias: {
				"@": resolve(__dirname, "src"),
			},
		},
	});
};
