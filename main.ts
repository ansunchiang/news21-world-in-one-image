import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const imageName = 'entry.png';
const sourceImage = new URL(imageName, import.meta.url);
const outputImage = join(outputDirectory, imageName);

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(sourceImage, outputImage);
