import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	build: {
		lib: {
			entry: "src/main.js",
			formats: ["es"],
			fileName: "vue-component",
		},
		sourcemap: true,
		target: "esnext",
		minify: true,
	},
	define: {
		"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
	},
	plugins: [
		vue({
			features: {
				customElement: true,
			},
		}),
	],
});
