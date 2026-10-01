#!/usr/bin/env node
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const tokens = JSON.parse(readFileSync(join(ROOT, 'src', 'tokens.json'), 'utf8'));
if (!tokens.evidence?.bandGood) {
  console.error('tokens.json missing evidence.bandGood');
  process.exit(1);
}

const modUrl = pathToFileURL(join(ROOT, 'dist', 'constants', 'evidenceDisplay.js')).href;
const { HEATMAP_RAMP_RGBA, NOISE_RAMP_RGBA, resolveBandDisplay, CRITERIA_ORDER } = await import(modUrl);

if (HEATMAP_RAMP_RGBA.length !== 7 || NOISE_RAMP_RGBA.length !== 7) {
  console.error('Expected 7-stop heatmap ramps');
  process.exit(1);
}

if (resolveBandDisplay('eye_soft').tier !== 'weak') {
  console.error('resolveBandDisplay failed for eye_soft');
  process.exit(1);
}

if (resolveBandDisplay('__unknown_code__').tier !== 'unknown') {
  console.error('Unknown band must not throw');
  process.exit(1);
}

if (CRITERIA_ORDER.length !== 6) {
  console.error('CRITERIA_ORDER length');
  process.exit(1);
}

console.log('evidenceDisplay constants OK');
