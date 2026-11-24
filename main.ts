// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
// Writes exactly one line (no trailing newline) to <OUTPUT_DIR>/entry.txt.
// Node stdlib only, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning line — 99 characters, 101 bytes (UTF-8), one line.
// Chosen by in-session round-robin pairwise judging of 8 candidates
// (28 pairs, criteria in judge order); see README.md for the full table.
const LINE =
  "I resign as zookeeper, effective immediately \u2014 the penguins have unionised, and frankly, so have I.";

// Output directory: the grader uses /output; local verification may
// override it with OUTPUT_DIR (see TEST_RESULTS.md). Default is /output.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
