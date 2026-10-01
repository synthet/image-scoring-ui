# Evidence overlay Storybook checklist (Phase 1)

When Storybook is added to this package, cover:

1. **Legend card** — sharpness ramp with `soft` / `sharp` labels using `--evidence-*` vars.
2. **Heatmap swatch** — 7-stop cividis-like strip from `HEATMAP_RAMP_RGBA`.
3. **Chip states** — on, off, disabled (gated), mutual exclusivity hint for sharpness vs noise.

Until then, `scripts/test-evidence.mjs` guards ramp length and `resolveBandDisplay` fallbacks.
