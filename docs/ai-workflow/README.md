---
type: Documentation Hub
title: AI Workflow & Asset Map
description: Design-token repo — agent SDLC lives in sibling image-scoring-backend and image-scoring-gallery.
resource: ai-workflow/README.md
tags: [docs, agents, workflow]
timestamp: 2026-07-04T00:00:00Z
okf_version: 0.1
---

# AI workflow — image-scoring-ui

This repository ships **design tokens** only (`@synthet/image-scoring-design`). Full agent infrastructure lives in sibling repos:

| Need | Repo |
|------|------|
| Backend pipeline, MCP, WSL, pytest | [image-scoring-backend docs/ai-workflow/README.md](https://github.com/synthet/image-scoring-backend/blob/main/docs/ai-workflow/README.md) |
| Gallery Electron, IPC, npm lint/tsc | [image-scoring-gallery docs/ai-workflow/README.md](https://github.com/synthet/image-scoring-gallery/blob/main/docs/ai-workflow/README.md) |
| Generic upstream patterns | [synthet-code-framework](https://github.com/synthet/synthet-code-framework) |

## This repo

- **Skill:** [`.cursor/skills/design-tokens/SKILL.md`](../../.cursor/skills/design-tokens/SKILL.md)
- **Constitution:** [`docs/UX_UI_CONSTITUTION.md`](../UX_UI_CONSTITUTION.md)
- **No** CLI hub, sync script, or agent-infra CI here — by design.

## Token change loop

1. Edit `src/tokens.json` → `npm run build` → `npm test`
2. Tag release; bump consumers in backend `frontend/` and gallery `package.json`

See [AGENTS.md](../../AGENTS.md).
