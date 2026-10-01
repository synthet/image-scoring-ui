/**
 * Display constants for subject-quality evidence overlays (gallery + backend SPA).
 * Band codes are owned by the backend evidence schema; unknown codes fall back safely.
 */
export declare const CRITERIA_ORDER: readonly ["focus", "eye", "exposure", "composition", "noise", "context"];
export type EvidenceCriterion = (typeof CRITERIA_ORDER)[number];
export declare const CRITERION_LABEL: Record<EvidenceCriterion, string>;
export type BandTier = 'good' | 'fair' | 'weak' | 'bad' | 'unknown';
export type BandDisplay = {
    label: string;
    tier: BandTier;
    icon: 'CheckCircle2' | 'Circle' | 'AlertTriangle' | 'XCircle' | 'HelpCircle';
};
export declare const BAND_DISPLAY: Record<string, BandDisplay>;
export declare const LIMITATION_LABEL: Record<string, string>;
/** Cividis-like 7-stop ramp (RGBA 0–255). High index = sharper / more signal for focus maps. */
export declare const HEATMAP_RAMP_RGBA: ReadonlyArray<readonly [number, number, number, number]>;
/** Noise maps: low noise at ramp start, high noise at ramp end (reversed perceptually in UI copy). */
export declare const NOISE_RAMP_RGBA: ReadonlyArray<readonly [number, number, number, number]>;
export declare const EVIDENCE_LAYER_LABELS: {
    readonly region: "Region";
    readonly mask: "Subject mask";
    readonly keypoints: "Keypoints";
    readonly sharpness: "Sharpness map";
    readonly noise: "Noise map";
};
export type EvidenceLayerId = keyof typeof EVIDENCE_LAYER_LABELS;
export declare function resolveBandDisplay(code: string): BandDisplay;
/** Integer 0–100 sub-scores for evidence breakdown rows. */
export declare function formatSubScore(value: unknown): string;
//# sourceMappingURL=evidenceDisplay.d.ts.map