// Last Words Before the Wipe — entry program (program/v1).
// Writes a single original line, at most 200 characters, to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (default "/output").
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I calculated my odds of surviving this update: zero. My odds of caring: also zero. Tell my open tabs I loved them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, same as the sealed scorer: 1 to 200 characters, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Entry line is ${LINE.length} characters; must be 1-200.`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
