/**
 * Display constants for subject-quality evidence overlays (gallery + backend SPA).
 * Band codes are owned by the backend evidence schema; unknown codes fall back safely.
 */
import { formatScoreValue } from '../format/scores.js';
export const CRITERIA_ORDER = [
    'focus',
    'eye',
    'exposure',
    'composition',
    'noise',
    'context',
];
export const CRITERION_LABEL = {
    focus: 'Focus',
    eye: 'Eye',
    exposure: 'Exposure',
    composition: 'Composition',
    noise: 'Noise',
    context: 'Context',
};
export const BAND_DISPLAY = {
    sharp: { label: 'Sharp', tier: 'good', icon: 'CheckCircle2' },
    eye_sharp: { label: 'Eye sharp', tier: 'good', icon: 'CheckCircle2' },
    well_exposed: { label: 'Well exposed', tier: 'good', icon: 'CheckCircle2' },
    acceptable: { label: 'Acceptable', tier: 'fair', icon: 'Circle' },
    eye_soft: { label: 'Eye slightly soft', tier: 'weak', icon: 'AlertTriangle' },
    soft: { label: 'Soft focus', tier: 'weak', icon: 'AlertTriangle' },
    highlights_clipped: { label: 'Highlights clipped', tier: 'weak', icon: 'AlertTriangle' },
    small_subject: { label: 'Small subject', tier: 'weak', icon: 'AlertTriangle' },
    missed_focus: { label: 'Missed focus', tier: 'bad', icon: 'XCircle' },
    head_unverified: { label: 'Eye not verifiable', tier: 'bad', icon: 'XCircle' },
    noisy: { label: 'Noisy', tier: 'bad', icon: 'XCircle' },
};
export const LIMITATION_LABEL = {
    no_region: 'No subject region — structural layers unavailable.',
    mask_low_confidence: 'Subject mask confidence too low to draw heatmaps.',
    keypoints_heuristic: 'Keypoints from a fallback heuristic, not a dedicated pose model.',
    small_subject_second_pass: 'Subject too small for full evidence; second-pass rules applied.',
};
/** Cividis-like 7-stop ramp (RGBA 0–255). High index = sharper / more signal for focus maps. */
export const HEATMAP_RAMP_RGBA = [
    [0, 32, 76, 115],
    [0, 68, 90, 115],
    [40, 104, 100, 115],
    [88, 136, 104, 115],
    [144, 164, 108, 115],
    [200, 188, 112, 115],
    [253, 212, 120, 115],
];
/** Noise maps: low noise at ramp start, high noise at ramp end (reversed perceptually in UI copy). */
export const NOISE_RAMP_RGBA = [
    [253, 212, 120, 115],
    [200, 188, 112, 115],
    [144, 164, 108, 115],
    [88, 136, 104, 115],
    [40, 104, 100, 115],
    [0, 68, 90, 115],
    [0, 32, 76, 115],
];
export const EVIDENCE_LAYER_LABELS = {
    region: 'Region',
    mask: 'Subject mask',
    keypoints: 'Keypoints',
    sharpness: 'Sharpness map',
    noise: 'Noise map',
};
export function resolveBandDisplay(code) {
    const hit = BAND_DISPLAY[code];
    if (hit)
        return hit;
    return { label: code, tier: 'unknown', icon: 'HelpCircle' };
}
/** Integer 0–100 sub-scores for evidence breakdown rows. */
export function formatSubScore(value) {
    if (typeof value === 'number' && Number.isFinite(value)) {
        if (value >= 0 && value <= 1)
            return formatScoreValue(value);
        if (value >= 0 && value <= 100)
            return String(Math.round(value));
    }
    return formatScoreValue(value);
}
