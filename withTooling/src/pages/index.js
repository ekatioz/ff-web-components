import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

export default function () {
	const pagesDir = join("src", "pages");
	return {
		pages: readdirSync(pagesDir).filter((page) =>
			statSync(join(pagesDir, page)).isDirectory(),
		),
	};
}
