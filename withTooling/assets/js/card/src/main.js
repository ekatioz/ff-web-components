import { FastAverageColor } from "fast-average-color";

const fac = new FastAverageColor();

export function getAverageColor(imageSrc) {
	return fac.getColorAsync(imageSrc);
}
