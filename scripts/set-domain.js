#!/usr/bin/env node
// Swaps the placeholder domain (and, optionally, the placeholder contact
// email) across every HTML/XML/TXT file in the project. Run once, right
// before you go live, after you know your real domain.
//
// Usage:
//   node scripts/set-domain.js www.yourdomain.com
//   node scripts/set-domain.js www.yourdomain.com hello@yourdomain.com
//
// The domain argument replaces "www.wanderlist.example" exactly as given —
// pass "yourdomain.com" (no www) if that's how you want canonical/OG URLs
// to read.

const fs = require("fs");
const path = require("path");

const [, , domainArg, emailArg] = process.argv;

if (!domainArg) {
  console.error("Usage: node scripts/set-domain.js <domain> [contact-email]");
  console.error("Example: node scripts/set-domain.js www.wanderlist.com hello@wanderlist.com");
  process.exit(1);
}

const root = path.join(__dirname, "..");
const PLACEHOLDER_DOMAIN = "www.wanderlist.example";
const PLACEHOLDER_EMAIL = "hello@wanderlist.example";
const exts = new Set([".html", ".xml", ".txt"]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".git")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (exts.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

let domainHits = 0;
let emailHits = 0;
let filesChanged = 0;

for (const file of walk(root)) {
  let text = fs.readFileSync(file, "utf-8");
  const original = text;

  const domainMatches = text.split(PLACEHOLDER_DOMAIN).length - 1;
  if (domainMatches) {
    text = text.split(PLACEHOLDER_DOMAIN).join(domainArg);
    domainHits += domainMatches;
  }

  if (emailArg) {
    const emailMatches = text.split(PLACEHOLDER_EMAIL).length - 1;
    if (emailMatches) {
      text = text.split(PLACEHOLDER_EMAIL).join(emailArg);
      emailHits += emailMatches;
    }
  }

  if (text !== original) {
    fs.writeFileSync(file, text, "utf-8");
    filesChanged++;
  }
}

console.log(`Replaced ${domainHits} occurrence(s) of "${PLACEHOLDER_DOMAIN}" with "${domainArg}"`);
if (emailArg) {
  console.log(`Replaced ${emailHits} occurrence(s) of "${PLACEHOLDER_EMAIL}" with "${emailArg}"`);
} else {
  console.log(`Contact email left as "${PLACEHOLDER_EMAIL}" — pass a second argument to replace it too.`);
}
console.log(`Updated ${filesChanged} file(s).`);
