#!/usr/bin/env node
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const tokens = JSON.parse(readFileSync(join(ROOT, 'src', 'tokens.json'), 'utf8'));
const css = readFileSync(join(ROOT, 'dist', 'tokens.css'), 'utf8');

const required = [
  ['--color-bg-primary', tokens.color.bgPrimary],
  ['--color-success', tokens.color.success],
  ['--color-danger', tokens.color.danger],
  ['--label-red', tokens.label.red],
  ['--score-gold', tokens.color.scoreGold],
];

let failed = false;
for (const [name, hex] of required) {
  if (!css.includes(`${name}: ${hex}`) && !css.includes(`${name}: ${hex};`)) {
    console.error(`Missing ${name}: ${hex} in dist/tokens.css`);
    failed = true;
  }
}

for (const file of ['tokens.css', 'tailwind-theme.css', 'gradio-snippet.css']) {
  if (!existsSync(join(ROOT, 'dist', file))) {
    console.error(`Missing dist/${file} — run npm run build`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('Token build verification passed');
