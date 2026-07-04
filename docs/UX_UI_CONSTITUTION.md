# UX/UI Constitution

Governing principles and mandatory rules for all Vexlum Scoring and Driftara Gallery user interfaces. **Palette tables, icon inventory, and implementation maps** live in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) — this document states *what must hold* across every surface.

## Scope

| Surface | Repo | Entry | Styling |
|---------|------|-------|---------|
| Primary product UI | image-scoring-backend | `/ui/` (React + Vite SPA) | Tailwind v4 + `tailwind-theme.css` |
| Operator status | image-scoring-backend | `/app` (minimal Gradio) | Base Gradio + `gradio-snippet.css` |
| Desktop gallery | image-scoring-gallery | Electron renderer | CSS Modules + `tokens.css` |

App-specific binding (stack wiring, file paths, checklists): [backend UX_UI_CONSTITUTION](https://github.com/synthet/image-scoring-backend/blob/main/docs/design/UX_UI_CONSTITUTION.md), [gallery UX_UI_CONSTITUTION](https://github.com/synthet/image-scoring-gallery/blob/main/docs/design/UX_UI_CONSTITUTION.md).

## Visual identity

- **Theme:** VS Code Dark+ — dark-only, no light-mode variant.
- **Tone:** Utilitarian, information-dense, pro-tool aesthetic (developer IDE, not consumer photo app).
- **Density:** Tight padding and margins; maximize content area for images, tables, and pipeline status.
- **Consistency:** Both main apps share the same semantic colors, accent blue, and status affordances via `@synthet/image-scoring-design`.

## Authority stack

```
src/tokens.json  (this repo — source of truth for color values)
       ↓  npm run build
@synthet/image-scoring-design  (dist/*.css + TS exports)
       ↓  install / file: / git tag
Consumers: backend frontend/, gallery src/, Gradio gradio-snippet.css
```

**Do not** fork hex tables or duplicate token JSON in consumer repos. **Do not** add new colors in app code without extending `src/tokens.json` here first.

Non-color exports (`STAGE_DISPLAY`, embedding labels/icons) live in this package's TypeScript but align with backend schema authority ([PIPELINE_TERMINOLOGY](https://github.com/synthet/image-scoring-backend/blob/main/docs/technical/PIPELINE_TERMINOLOGY.md), `modules/phases.py`, `modules/embedding_spaces.py`).

## Articles (mandatory rules)

### Article 1 — Tokens before literals

No new hex, rgb, or hsl literals in consumer application code. Extend `src/tokens.json`, run `npm run build && npm test`, publish or refresh sibling installs, then use CSS variables or package TS exports.

### Article 2 — Semantic vs photo labels

`--color-success`, `--color-warning`, `--color-danger`, and `--color-info` are **UI status** colors. `--label-red` through `--label-purple` are **Lightroom-style photo color tags** only. Never use label tokens for toasts, phase status, or validation.

### Article 3 — Text on accent

Filled accent buttons, chips, and pills use `--color-text-on-accent` (`#ffffff`). Never place `--color-text-primary` or `#eee` on solid `--color-accent` backgrounds.

### Article 4 — Scores

Normalized **0–1** scores display via `formatScoreValue()` from this package. Integer `1` must render as `100.00%`, not `1`. Unscored rows show a muted chip, not a bare em dash.

### Article 5 — Icons

- **Chrome and actions:** [lucide-react](https://lucide.dev) only — one concept, one icon (see DESIGN_SYSTEM icon contract).
- **Embedding spaces:** `EmbeddingSpaceIcon` and pixel mascots from this package only — do not substitute Lucide for model badges.
- **Severity:** `Info`, `CheckCircle2`, `AlertTriangle`, `XCircle` — `AlertCircle` is retired where it overlaps these four.

### Article 6 — Pipeline labels

User-facing stage names come from package `STAGE_DISPLAY` (Discovery → Tagging). **`phase_code` values** (`indexing`, `metadata`, …) are defined only in **image-scoring-backend** — apps mirror labels, not codes.

### Article 7 — Accessibility

Minimum contrast pairings (WCAG AA for normal copy on dark chrome):

| Foreground | Background | Tokens |
|------------|------------|--------|
| On accent fill | `#007acc` | `--color-text-on-accent` on `--color-accent` |
| Placeholder | input surface | `--color-text-placeholder` on `--color-bg-tertiary` |
| Body | page | `--color-text-primary` on `--color-bg-primary` |

Interactive controls need visible focus (accent ring or equivalent). Prefer Radix (backend) or `aria-*` toggles (gallery) for keyboard and screen-reader support.

### Article 8 — Dialogs and feedback

Use in-app toasts, trays, or Radix dialogs — not browser `alert()`, `confirm()`, or `prompt()` for product flows.

## Cross-repo change protocol

When changing `src/tokens.json`, package version, or breaking TS/CSS exports:

1. Change **image-scoring-ui** first; run `npm run build && npm test`; bump `@synthet/image-scoring-design` version when publishing.
2. Refresh backend `frontend/package.json` (`file:../../image-scoring-ui`) and gallery `package.json` (git tag pin).
3. Backend: `npm run design:sync` (Gradio CSS); both consumers: `npm run design:check`.
4. Visual smoke on `/ui/` and gallery shell; append `docs/log.md` in affected repos; mention version in PR.

Full coordination context: [AGENT_COORDINATION §6](https://github.com/synthet/image-scoring-backend/blob/main/docs/technical/AGENT_COORDINATION.md).

## Verification

| Repo | Command |
|------|---------|
| **image-scoring-ui** | `npm run build && npm test` |
| **backend** | `cd frontend && npm run design:check` |
| **gallery** | `npm run design:check` |

## Anti-patterns (reject in review)

- Material Design greens/reds (`#4caf50`, `#f44336`) — use `--color-success` / `--color-danger`
- Tailwind default blues or ad-hoc palette unrelated to VS Code Dark+
- Parallel phase-status icon or color maps in gallery without backend alignment
- Stale `dist/` after editing `tokens.json` without rebuild
- React duplicate-instance errors from mismatched design-package versions across siblings

## Agent skills

| Task | Skill |
|------|-------|
| Edit tokens, icons, publish package | `.cursor/skills/design-tokens/SKILL.md` (this repo) |
| Backend `/ui/` or Gradio styling | `backend-frontend-ui` in image-scoring-backend |
| Gallery renderer styling | `gallery-ui` in image-scoring-gallery |

**See also:** [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) · [LESSONS_LEARNED.md](LESSONS_LEARNED.md) · [AGENTS.md](../AGENTS.md)
