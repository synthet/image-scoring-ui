---
name: design-tokens
description: >-
  Edit @synthet/image-scoring-design tokens, build the package, verify CSS/TS
  exports, and coordinate consumer bumps across image-scoring-backend and
  image-scoring-gallery. Use when changing src/tokens.json, embedding icons,
  palette, publishing the design package, or cross-repo token sync.
---

# Design tokens (image-scoring-ui)

## When to apply

- Editing **`src/tokens.json`**, embedding mascots, or package TS exports
- Publishing or tagging `@synthet/image-scoring-design`
- Cross-repo sync after token or icon contract changes

## Read first

1. [docs/UX_UI_CONSTITUTION.md](../../docs/UX_UI_CONSTITUTION.md) — mandatory rules
2. [docs/DESIGN_SYSTEM.md](../../docs/DESIGN_SYSTEM.md) — palette, icons, implementation map
3. [docs/LESSONS_LEARNED.md](../../docs/LESSONS_LEARNED.md) — common traps
4. Backend [AGENT_COORDINATION §6](https://github.com/synthet/image-scoring-backend/blob/main/docs/technical/AGENT_COORDINATION.md)

## What lives where

| Concern | Location |
|---------|----------|
| Color values (source of truth) | `src/tokens.json` |
| Generated CSS | `dist/tokens.css`, `dist/tailwind-theme.css`, `dist/gradio-snippet.css` |
| Label / phase hex helpers | `src/constants/labelColors.ts` |
| Stage display names | `src/constants/stageDisplay.ts` |
| Embedding colors / labels / icons | `src/constants/embeddingSpace*.ts`, `src/components/EmbeddingSpaceIcon.tsx` |
| Score formatting | `src/format/scores.ts` |

**Colors:** edit `tokens.json` only. **Labels/icons** that are not colors: edit TS in `src/constants/` or `src/icons/` and keep aligned with backend `modules/phases.py` / `modules/embedding_spaces.py`.

## Workflow

1. Edit `src/tokens.json` (or TS/icon files as needed).
2. From repo root:
   ```bash
   npm run build && npm test
   ```
3. If publishing: bump `package.json` version, commit, tag `v*`.
4. Update consumers:
   - **Backend:** `frontend/package.json` uses `file:../../image-scoring-ui` — run `npm install` in `frontend/` if needed; `npm run design:sync` for Gradio CSS.
   - **Gallery:** bump git tag in `package.json` (e.g. `github:synthet/image-scoring-ui#v1.2.x`); `npm install`.
5. Run consumer checks: backend `cd frontend && npm run design:check`; gallery `npm run design:check`.
6. Visual smoke on `/ui/` and gallery; mention version in PR; append `docs/log.md` in touched repos.

## Do not

- Add hex literals in backend `frontend/` or gallery `src/` — extend tokens here instead
- Skip `npm run build` before sibling `file:` consumers pick up changes
- Change `STAGE_DISPLAY` or embedding registry without checking backend phase/embedding authority

## Boundaries

- **No HTTP API** in this repo — tokens and UI constants only
- App-specific layout (Tailwind utilities, CSS Modules) → use consumer skills (`backend-frontend-ui`, `gallery-ui`)

## Deliverable format

End with: files changed, `npm test` result, consumer bump checklist status, and whether Gradio sync is required.
