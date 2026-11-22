import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const artwork = new URL('./entry.png', import.meta.url);

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(artwork, join(outputDirectory, 'entry.png'));
