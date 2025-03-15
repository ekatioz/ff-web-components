const esbuild = require("esbuild");

esbuild
	.build({
		entryPoints: ["src/main.js"],
		bundle: true,
		outfile: "dist/lit-component.js",
		globalName: "LitComponent",
		minify: true,
		sourcemap: true,
	})
	.catch(() => process.exit(1));
