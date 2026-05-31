import { describe, expect, it } from 'node:test';
import { formatScoreValue } from './scores.js';
describe('formatScoreValue', () => {
    it('formats 0–1 scores as percent including integer 1', () => {
        expect(formatScoreValue(1)).toBe('100.00%');
        expect(formatScoreValue(0.9999)).toBe('99.99%');
        expect(formatScoreValue(0)).toBe('0.00%');
    });
    it('leaves out-of-range numbers as plain strings', () => {
        expect(formatScoreValue(1.5)).toBe('1.5');
    });
    it('returns empty placeholder for nullish', () => {
        expect(formatScoreValue(null)).toBe('—');
        expect(formatScoreValue(undefined)).toBe('—');
    });
});
