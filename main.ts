// ai-happy-01 entry: "A little robot's surprise birthday".
// The program writes the image held in this repository to the output
// directory. It is deliberately a plain copy: the image is the entry, and
// the program must be deterministic, so there is nothing to vary between
// runs. Node 22, standard library only, no network.
//
// Run it like the kit starter:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);

// Sanity check the copy so a truncated write fails loudly instead of
// silently shipping a broken image.
if (statSync(source).size !== statSync(dest).size) {
  throw new Error('entry.png copy size mismatch');
}
console.log(`wrote ${dest} (${statSync(dest).size} bytes)`);
