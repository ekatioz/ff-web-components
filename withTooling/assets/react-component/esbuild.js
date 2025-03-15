const esbuild = require("esbuild");

esbuild
	.build({
		entryPoints: ["src/main.jsx"],
		bundle: true,
		outfile: "dist/react-component.js",
		globalName: "ReactComponent",
		loader: {
			".jsx": "jsx",
		},
		minify: true,
		sourcemap: true,
	})
	.catch(() => process.exit(1));
