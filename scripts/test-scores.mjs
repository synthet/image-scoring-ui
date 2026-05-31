#!/usr/bin/env node
import { formatScoreValue } from '../dist/format/scores.js';

function assert(cond, msg) {
  if (!cond) {
    console.error(msg);
    process.exit(1);
  }
}

assert(formatScoreValue(1) === '100.00%', 'integer 1 → percent');
assert(formatScoreValue(0.9999) === '99.99%', 'fraction → percent');
assert(formatScoreValue(0) === '0.00%', 'zero → percent');
assert(formatScoreValue(1.5) === '1.5', 'out of range unchanged');
assert(formatScoreValue(null) === '—', 'null placeholder');
console.log('formatScoreValue tests passed');
