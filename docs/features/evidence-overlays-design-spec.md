---
type: Feature Spec
title: Evidence overlays — design system
description: Tokens, ramps, band labels, and TS display constants for subject-quality inspector overlays.
resource: docs/features/evidence-overlays-design-spec.md
tags: [features, design-system, evidence, overlays, clean-room]
timestamp: 2026-09-30T00:00:00Z
okf_version: 0.1
status: partial
---

# Evidence overlays — design specification

**Provenance:** derived from competitive analysis of a commercial application's observable behaviour; contains no code, identifiers, fitted constants or model artefacts from it.

## Scope

Shared **look-and-feel** for evidence layers in the gallery and backend SPA. Does not define grid math or API fields (backend authority).

## Shipped (Phase 0)

| Artifact | Location |
|----------|----------|
| `evidence.*` colours | `src/tokens.json` → `dist/tokens.css` (`--evidence-*` vars) |
| Display constants | `src/constants/evidenceDisplay.ts` |
| Package exports | `src/index.ts` (`HEATMAP_RAMP_RGBA`, `resolveBandDisplay`, …) |

Detailed token tables: [scoring-evidence-tokens.md](../scoring-evidence-tokens.md).

## Visual rules (mandatory)

1. **Heatmaps:** cividis-like 7-stop ramps (`HEATMAP_RAMP_RGBA` / `NOISE_RAMP_RGBA`); not red→green traffic colours.
2. **Bands:** semantic status hues + Lucide icon names in `BAND_DISPLAY`; never colour alone (constitution).
3. **Overlays:** region outline uses `--evidence-region-primary`; mask tint `--evidence-mask-tint`.
4. **Differentiation:** Driftara does not use a fixed cyan diagnostics rail as primary chrome.

## Verification

- `npm test` — `scripts/test-evidence.mjs` + token CSS verification.
- Storybook checklist: [storybook-evidence-checklist.md](../storybook-evidence-checklist.md).

## Remaining phases

- [ ] Storybook / visual regression for legend and chips
- [ ] Publish `1.3.x`; gallery pins released tag (not only `file:` sibling)

## Related specs

- Behaviour: [image-scoring clean-room 05](https://github.com/synthet/image-scoring/blob/main/docs/clean-room/05-diagnostics-and-visual-inspection.md)
- API: [VISUAL_EVIDENCE_API.md](https://github.com/synthet/image-scoring-backend/blob/master/docs/technical/VISUAL_EVIDENCE_API.md)
- Gallery UI: [09-visual-evidence-overlays.md](https://github.com/synthet/image-scoring-gallery/blob/main/docs/features/implemented/09-visual-evidence-overlays.md)
