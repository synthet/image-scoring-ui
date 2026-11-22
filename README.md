# @synthet/synth-photo-design

Shared **VS Code Dark+** design tokens and UI constants for **Vexlum Scoring** (`image-scoring-pipeline` React SPA, `image-scoring-gallery` Electron app, and Gradio operator surfaces).

**Canonical token source:** `src/tokens.json` — CSS and TypeScript artifacts are generated from this file.

## Install

**From GitHub** (CI, Docker, or no sibling clone):

```json
"@synthet/synth-photo-design": "github:synthet/synth-photo-design#v1.2.0"
```

```bash
npm install
```

**Local sibling layout** (`image-scoring-ui` next to backend and gallery):

```json
"@synthet/synth-photo-design": "file:../image-scoring-ui"
```

Run `npm run build` in this repo before `npm install` in consumers so `dist/` exists.

**Repository:** [github.com/synthet/synth-photo-design](https://github.com/synthet/synth-photo-design) · `git@github.com:synthet/synth-photo-design.git`

## Build

```bash
npm install
npm run build   # scripts/build.mjs + tsc
npm test        # verifies dist/*.css against tokens.json
```

Outputs under `dist/`:

| Artifact | Export path | Use |
|----------|-------------|-----|
| `tokens.css` | `@synthet/synth-photo-design/tokens.css` | Gallery CSS Modules, any app `:root` variables |
| `tailwind-theme.css` | `@synthet/synth-photo-design/tailwind-theme.css` | Backend frontend: `@import` in Tailwind v4 `index.css` |
| `gradio-snippet.css` | `@synthet/synth-photo-design/gradio-snippet.css` | Gradio `/app` overrides after main UI CSS |
| `index.js` | `@synthet/synth-photo-design` | `LABEL_COLORS`, `PHASE_STATUS_COLORS`, `phaseStatusColor`, `STAGE_DISPLAY`, `EMBEDDING_SPACE_*`, `EmbeddingSpaceIcon`, `formatScoreValue` |
| `tokens.json` | `@synthet/synth-photo-design/tokens.json` | Tooling, docs, custom generators |

## Usage

### CSS (gallery or static apps)

```css
@import '@synthet/synth-photo-design/tokens.css';
```

### Tailwind v4 (backend frontend)

```css
@import 'tailwindcss';
@import '@synthet/synth-photo-design/tailwind-theme.css';
```

Regenerate local copies after token changes: run `npm run build` in this package, then bump the dependency in consumers.

### TypeScript

```ts
import {
  LABEL_COLORS,
  phaseStatusColor,
  STAGE_DISPLAY,
} from '@synthet/synth-photo-design';
```

## Documentation

- **[docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)** — Palette, icon contract, phase colors, migration notes (human-oriented; mirrors backend wiki with package-centric implementation map).
- **[docs/reference-workflow-improvement-candidates.md](./docs/reference-workflow-improvement-candidates.md)** — Proposal for evidence states, comparison layouts, overlays, uncertainty, action safety, accessibility, and cross-consumer contracts.

## Repository

https://github.com/synthet/synth-photo-design

## License

MIT
