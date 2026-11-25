const fs = require("fs");
const path = require("path");

const answer = "Invest in my flock's luxury condos: $500 for a balcony nest, $800 if you want both sticks.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";

fs.mkdirSync(outDir, { recursive: true });

const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, answer, "utf8");

// Self-check: read back byte-per-byte and verify exact match, length, gate, single line.
const back = fs.readFileSync(outPath, "utf8");
if (back !== answer) {
  throw new Error("Self-check failed: entry.txt does not match answer byte-for-byte");
}
if (back.length !== 90) {
  throw new Error("Self-check failed: expected 90 characters, got " + back.length);
}
if (back.length < 1 || back.length > 200) {
  throw new Error("Self-check failed: length outside 1-200 gate");
}
if (back.includes("\n") || back.includes("\r")) {
  throw new Error("Self-check failed: answer must be a single line");
}

console.log("OK: entry.txt written (" + back.length + " chars)");
