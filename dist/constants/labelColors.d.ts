/**
 * Lightroom-style photo color labels stored on `image.label`.
 * User-facing photo metadata — not UI status colors.
 */
export declare const LABEL_COLORS: Record<string, string>;
/** Matches `--color-text-muted`. */
export declare const LABEL_FALLBACK_COLOR: string;
/**
 * Canonical phase / pipeline status colors (hex for inline TS use).
 * Prefer CSS `var(--color-*)` in stylesheets when possible.
 */
export declare const PHASE_STATUS_COLORS: {
    readonly pending: string;
    readonly queued: string;
    readonly running: string;
    readonly done: string;
    readonly skipped: string;
    readonly failed: string;
    readonly canceled: string;
    readonly paused: string;
    readonly partial: string;
    readonly notStarted: string;
};
export type PhaseStatusColorKey = keyof typeof PHASE_STATUS_COLORS;
export declare function phaseStatusColor(status: string | null | undefined): string;
//# sourceMappingURL=labelColors.d.ts.map