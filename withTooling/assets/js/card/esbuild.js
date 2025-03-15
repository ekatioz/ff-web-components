const esbuild = require("esbuild");

esbuild
	.build({
		entryPoints: ["src/main.js"],
		bundle: true,
		outfile: "dist/main.js",
		globalName: "Card",
		minify: true,
		sourcemap: true,
		format: "esm",
	})
	.catch(() => process.exit(1));
