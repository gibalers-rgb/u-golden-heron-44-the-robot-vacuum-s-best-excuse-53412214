// The Robot Vacuum's Best Excuse
// Writes one one-line excuse, in the vacuum's own voice, to entry.txt.
// Deterministic, standard library only, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My cliff sensor mistook the rug fringe for a staircase, so I reversed out. I am not falling down imaginary stairs for one crumb.";

const MAX_CHARS = 140;

function main(): void {
  // Count code points, not UTF-16 units, so any non-ASCII text is
  // measured the way the gate measures it.
  const charCount = [...ENTRY].length;
  if (charCount === 0 || charCount > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${charCount}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry must not start or end with white space");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  const outPath = process.env.OUTPUT_PATH || "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  // Read the file back and re-check it, so a partial or failed write
  // can never pass silently as a good entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error(`read-back mismatch: wrote ${ENTRY.length} characters, read ${written.length}`);
  }
  console.log(`wrote ${charCount} characters to ${outPath}`);
}

main();
