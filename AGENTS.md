# AI Agents — image-scoring-ui

Shared design-token package (`@synthet/image-scoring-design`). This repo is **not**
an application — agents doing scoring/gallery work should use sibling repos for
MCP, backlog, and pipeline debugging.

## Related projects

| Repo | Role |
|------|------|
| [image-scoring-backend](https://github.com/synthet/image-scoring-backend) | Schema/API authority, FastAPI, MCP (`is-be-mcp`) |
| [image-scoring-gallery](https://github.com/synthet/image-scoring-gallery) | Electron desktop UI, MCP (`is-ui-mcp`) |
| **image-scoring-ui** (this) | Design tokens, embedding icons, score formatting |

Keep **sibling folder layout** (`../image-scoring-backend`, `../image-scoring-gallery`)
for local `file:` installs.

## Canonical docs

- [`docs/UX_UI_CONSTITUTION.md`](docs/UX_UI_CONSTITUTION.md) — governing UX/UI principles (shared across backend and gallery)
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — palette, typography, consumers
- [`docs/LESSONS_LEARNED.md`](docs/LESSONS_LEARNED.md) — transcript-mined token workflow
- Backend cross-repo steps: [AGENT_COORDINATION §6](https://github.com/synthet/image-scoring-backend/blob/main/docs/technical/AGENT_COORDINATION.md)

## Agent skills

- **`.cursor/skills/design-tokens/SKILL.md`** — edit tokens, build, publish, coordinate consumer bumps (minimal agent-sdlc in this repo)

## Commands

```bash
npm install
npm run build    # scripts/build.mjs + tsc → dist/
npm test         # token + score verification
```

## Token change workflow (agents)

1. Edit **`src/tokens.json`** (source of truth).
2. Run **`npm run build`** and **`npm test`**.
3. Commit + tag release on this repo when publishing (`v*` tags).
4. Bump dependency in backend `frontend/package.json` and/or gallery `package.json`.
5. Run consumer builds/tests; coordinate cross-repo PRs when icons or exports change.

## Boundaries

- **No HTTP API** — design tokens only (see backend `OPENAPI_CROSS_PROJECT.md`).
- **Minimal agent-sdlc:** `.cursor/skills/design-tokens/` only; use backend/gallery for slash commands, MCP, and app UI skills.
- **React peer** — `EmbeddingSpaceIcon` requires React ≥ 18 in consumers.

## Transcript mining

Staging output (when mined): `.agent/scratch/transcript-mining/` (gitignored).
Miner lives in backend: `scripts/agent-memory/import_transcripts.py`.
