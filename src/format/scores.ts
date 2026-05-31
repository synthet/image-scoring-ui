/**
 * Format normalized 0–1 quality scores for display (integer 1 → 100.00%).
 * Non-score numbers and non-numeric values are returned as plain strings.
 */
export function formatScoreValue(value: unknown, empty = '—'): string {
  if (value === null || value === undefined) return empty;
  if (typeof value === 'number' && Number.isFinite(value)) {
    if (value >= 0 && value <= 1) {
      return `${(value * 100).toFixed(2)}%`;
    }
    return String(value);
  }
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  return String(value);
}
