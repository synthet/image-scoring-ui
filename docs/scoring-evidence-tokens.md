---
type: Plan
title: Scoring-evidence tokens and display constants
description: Proposed design tokens and TS constants for subject-quality evidence (criterion bands, reason chips, best/nearly-tied badges, diagnostic overlays and heatmaps) shared by the gallery and the backend SPA.
resource: docs/scoring-evidence-tokens.md
tags: [docs, tokens, design-system, culling, evidence, clean-room]
timestamp: 2026-09-24T00:00:00Z
okf_version: 0.1
status: proposed
---

# Scoring-evidence tokens and display constants

> **Status:** proposal. No `tokens.json` change yet. It must follow the
> [UX/UI constitution](UX_UI_CONSTITUTION.md) and the [design system](DESIGN_SYSTEM.md).

## Provenance (clean-room)

This is UI vocabulary for features derived from a competitive analysis of a commercial wildlife
burst-culling application's user-visible behaviour. All values below are ours, taken from the
existing VS Code Dark+ palette or from open colour maps. Nothing (colours, icons, copy) is taken from
that product.

## Why this package

Two consumers will render the same evidence:
- the gallery ([burst culling explainability](https://github.com/synthet/image-scoring-gallery/blob/main/docs/features/planned/burst-culling-explainability.md))
- the backend SPA (analytics)

The backend source is its
[subject-aware culling evidence](https://github.com/synthet/image-scoring-backend/blob/master/docs/planning/subject-aware-culling-evidence.md)
plan, inside the localization rollout Stage 6. Shared tokens stop the two apps drifting apart.

## Rules

- **Never colour alone.** Every band colour pairs with an icon and a text label. This is already a
  constitution requirement.
- **Reuse semantic status hues** for band quality. No new greens, ambers or reds.
- **Heatmaps use a perceptually uniform, colour-vision-deficiency-safe ramp** (cividis-like), not
  red→green.
- Overlays are drawn over photos, so they need an alpha and a dark outline for any background.

## Proposed tokens (`tokens.json` → `evidence.*`)

### Band quality

| Token | Value (existing alias) | Icon (Lucide) | Use |
|---|---|---|---|
| `evidence.bandGood` | `color.success` `#89d185` | `CheckCircle2` | sharp, well exposed, good fill |
| `evidence.bandFair` | `color.info` `#9cdcfe` | `Circle` | acceptable / slightly soft |
| `evidence.bandWeak` | `color.warning` `#cca700` | `AlertTriangle` | soft, clipped, small subject |
| `evidence.bandBad` | `color.danger` `#f44747` | `XCircle` | missed focus, eye not visible |
| `evidence.bandUnknown` | `color.textMuted` `#6d6d6d` | `HelpCircle` | limitation: not measurable |

### Burst badges

| Token | Value | Icon | Use |
|---|---|---|---|
| `evidence.bestFrame` | `color.warning` `#cca700` fill | `Star` | best frame in (sub-)burst |
| `evidence.nearlyTied` | `color.info` outline | `Scale` | ≥ 2 frames within the tie threshold |
| `evidence.adjusted` | `color.accent` `#007acc` | `SlidersHorizontal` | composite re-weighted client-side |
| `evidence.experimental` | `color.textSecondary` dashed outline | `FlaskConical` | shadow-only evidence shown by toggle |

### Overlays

| Token | Value | Use |
|---|---|---|
| `evidence.regionPrimary` | `#ffffff` 2 px + 1 px `#000000` outer | primary subject box |
| `evidence.regionSecondary` | `#9d9d9d` 1 px dashed | other regions |
| `evidence.maskTint` | `color.accent` @ 35% alpha | subject mask |
| `evidence.keypointVisible` | `color.success` dot, 1 px dark ring | visible eye/head point |
| `evidence.keypointOccluded` | `color.warning` hollow ring | occluded / low-confidence point |
| `evidence.heatmapRamp` | 7-stop cividis-like ramp, alpha 0.45 | focus map (high = sharp) |
| `evidence.noiseRamp` | same ramp, reversed | noise map (high = noisy) |

The ramp is exported as an array for canvas rendering. `tailwind-theme.css` and `gradio-snippet.css`
get only the scalar colours.

## Proposed TS constants (`src/constants/evidenceDisplay.ts`)

- `CRITERIA_ORDER`: `focus, eye, exposure, composition, noise, context`.
- `CRITERION_LABEL`: display names, e.g. `eye` → "Eye".
- `BAND_DISPLAY`: backend band code → `{ label, tier: good|fair|weak|bad|unknown, icon }`. Examples:
  - `eye_soft` → "Eye slightly soft" / weak
  - `highlights_clipped` → "Highlights clipped" / weak
  - `head_unverified` → "Eye not verifiable" / bad
- `LIMITATION_LABEL`: `no_region`, `mask_low_confidence`, `keypoints_heuristic`,
  `small_subject_second_pass` → muted explanatory text.
- `formatSubScore(n)`: an integer 0–100 (reuses `formatScoreValue` conventions).

Band codes are owned by the backend evidence schema. This package only maps them to display. An
unknown code falls back to `bandUnknown` with the raw code as its label, and never throws.

## Acceptance

- Contrast: band text on `bgSecondary` meets AA. Overlay outlines stay visible on pure white and pure
  black photo patches.
- A CVD simulation (deuteranopia/protanopia) of the heatmap ramp stays monotonic in lightness.
- A version bump (minor) with a changelog entry. The gallery and backend SPA adopt it in the same
  release as their evidence UI.
