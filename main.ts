import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ANSWER = "I'll leave your balcony for $5; for $500 I'll tell my whole flock that the fake owl you bought to scare us blinked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ANSWER, "utf8");

// Self-check: read back from the output dir only, never from cwd.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== ANSWER || written.length !== 115 || written.endsWith("\n")) {
  throw new Error("entry.txt self-check failed: expected 115 chars, no trailing newline");
}
