// Pigeon Pitch, One Line — entry program (Node-only, no Deno APIs).
// Writes the final one-line pigeon elevator pitch to entry.txt,
// then self-checks the file byte-for-byte (see part 2 below).
const fs = require("node:fs");
const path = require("node:path");

const ANSWER = "Invest in my flock's luxury condos: $500 for a balcony nest, $800 if you want both sticks.";

// The make.fun harness expects /output/entry.txt; locally (node main.ts)
// the entry also belongs next to this program, so write both.
const outPath = path.join(__dirname, "entry.txt");
const harnessPath = "/output/entry.txt";

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, ANSWER, "utf8");
if (fs.existsSync("/output")) {
  fs.writeFileSync(harnessPath, ANSWER, "utf8");
}

// Self-check: read entry.txt back byte-per-byte and verify it.
const bytes = fs.readFileSync(outPath);
const text = bytes.toString("utf8");
const chars = [...text].length;

if (text !== ANSWER) {
  console.error("SELF-CHECK FAIL: entry.txt does not match the final answer byte-for-byte.");
  process.exit(1);
}
if (chars !== 90) {
  console.error("SELF-CHECK FAIL: expected 90 characters, got " + chars + ".");
  process.exit(1);
}
if (chars < 1 || chars > 200) {
  console.error("SELF-CHECK FAIL: character count outside the 1-200 gate: " + chars + ".");
  process.exit(1);
}
if (text.includes("\n") || text.includes("\r")) {
  console.error("SELF-CHECK FAIL: entry must be exactly one line.");
  process.exit(1);
}
if (text.trim().length === 0) {
  console.error("SELF-CHECK FAIL: entry is only whitespace.");
  process.exit(1);
}

console.log("OK: entry.txt written to " + outPath);
console.log("OK: " + chars + " characters, one line, within the 1-200 gate.");
console.log(text);
