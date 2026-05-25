import tokens from '../tokens.json' with { type: 'json' };

const { color, label } = tokens;

/**
 * Lightroom-style photo color labels stored on `image.label`.
 * User-facing photo metadata — not UI status colors.
 */
export const LABEL_COLORS: Record<string, string> = {
  red: label.red,
  yellow: label.yellow,
  green: label.green,
  blue: label.blue,
  purple: label.purple,
};

/** Matches `--color-text-muted`. */
export const LABEL_FALLBACK_COLOR = color.textMuted;

/**
 * Canonical phase / pipeline status colors (hex for inline TS use).
 * Prefer CSS `var(--color-*)` in stylesheets when possible.
 */
export const PHASE_STATUS_COLORS = {
  pending: color.textMuted,
  queued: color.textSecondary,
  running: color.accent,
  done: color.success,
  skipped: color.textMuted,
  failed: color.danger,
  canceled: color.danger,
  paused: color.warning,
  partial: color.warning,
  notStarted: color.textMuted,
} as const;

export type PhaseStatusColorKey = keyof typeof PHASE_STATUS_COLORS;

export function phaseStatusColor(status: string | null | undefined): string {
  if (!status) return PHASE_STATUS_COLORS.notStarted;
  const s = status.toLowerCase();
  if (s === 'not_started') return PHASE_STATUS_COLORS.notStarted;
  if (s === 'done' || s === 'completed') return PHASE_STATUS_COLORS.done;
  if (s === 'running') return PHASE_STATUS_COLORS.running;
  if (s === 'failed') return PHASE_STATUS_COLORS.failed;
  if (s === 'canceled' || s === 'cancelled') return PHASE_STATUS_COLORS.canceled;
  if (s === 'paused') return PHASE_STATUS_COLORS.paused;
  if (s === 'pending' || s === 'queued') return PHASE_STATUS_COLORS.queued;
  if (s === 'skipped') return PHASE_STATUS_COLORS.skipped;
  if (s === 'partial' || s === 'interrupted' || s === 'cancel_requested') {
    return PHASE_STATUS_COLORS.partial;
  }
  return PHASE_STATUS_COLORS.notStarted;
}
