---
type: Lessons Learned
title: Agent lessons — design tokens
description: Transcript-mined agent lessons and conventions for image-scoring-ui.
resource: docs/LESSONS_LEARNED.md
tags: [lessons, agent, okf]
timestamp: 2026-06-16T00:00:00Z
okf_version: 0.1
---

# Agent lessons — design tokens

Lessons from Cursor sessions that touched **image-scoring-ui** (often via multi-root
workspaces with backend + gallery).

## Token workflow

- **Source of truth:** `src/tokens.json` — never edit generated `dist/` by hand.
- **Build before consume:** Run `npm run build` before `npm install` in sibling repos
  using `"file:../image-scoring-ui"`.
- **Publishing:** Tag releases (`v1.2.x`); gallery may pin `github:synthet/image-scoring-ui#v*`.
- **Cross-repo bumps:** After token/icon changes, update backend SPA and gallery
  dependencies in the same release window to avoid React minified errors from stale bundles.

## Embedding space icons

- Icons and labels live in `src/constants/embeddingSpaceIcons.ts` and
  `src/icons/embedding/`; export via `EmbeddingSpaceIcon`.
- When adding a new embedding space in backend, add matching icon/label here first,
  then bump consumers (see backend `docs/EMBEDDINGS.md`).

## Common traps

| Trap | Mitigation |
|------|------------|
| Stale `dist/` in consumers | Rebuild this repo; reinstall in backend/gallery |
| React #525 minified errors | Usually version skew or duplicate React — rebuild all three |
| Gradio vs SPA styling | Use `gradio-snippet.css` export for `/app` only |

## Related

- [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)
- [`../AGENTS.md`](../AGENTS.md)
