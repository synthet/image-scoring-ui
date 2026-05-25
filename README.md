# @synthet/image-scoring-design

Shared **VS Code Dark+** design tokens and UI constants for **Vexlum Scoring** (`image-scoring-backend` React SPA, `image-scoring-gallery` Electron app, and Gradio operator surfaces).

**Canonical token source:** `src/tokens.json` — CSS and TypeScript artifacts are generated from this file.

## Install

```bash
npm install @synthet/image-scoring-design
```

For local development, link or file-depend from this repo:

```bash
cd d:/Projects/image-scoring-ui
npm run build
npm link
# in consumer: npm link @synthet/image-scoring-design
```

## Build

```bash
npm install
npm run build   # scripts/build.mjs + tsc
npm test        # verifies dist/*.css against tokens.json
```

Outputs under `dist/`:

| Artifact | Export path | Use |
|----------|-------------|-----|
| `tokens.css` | `@synthet/image-scoring-design/tokens.css` | Gallery CSS Modules, any app `:root` variables |
| `tailwind-theme.css` | `@synthet/image-scoring-design/tailwind-theme.css` | Backend frontend: `@import` in Tailwind v4 `index.css` |
| `gradio-snippet.css` | `@synthet/image-scoring-design/gradio-snippet.css` | Gradio `/app` overrides after main UI CSS |
| `index.js` | `@synthet/image-scoring-design` | `LABEL_COLORS`, `PHASE_STATUS_COLORS`, `phaseStatusColor`, `STAGE_DISPLAY` |
| `tokens.json` | `@synthet/image-scoring-design/tokens.json` | Tooling, docs, custom generators |

## Usage

### CSS (gallery or static apps)

```css
@import '@synthet/image-scoring-design/tokens.css';
```

### Tailwind v4 (backend frontend)

```css
@import 'tailwindcss';
@import '@synthet/image-scoring-design/tailwind-theme.css';
```

Regenerate local copies after token changes: run `npm run build` in this package, then bump the dependency in consumers.

### TypeScript

```ts
import {
  LABEL_COLORS,
  phaseStatusColor,
  STAGE_DISPLAY,
} from '@synthet/image-scoring-design';
```

## Documentation

- **[docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)** — Palette, icon contract, phase colors, migration notes (human-oriented; mirrors backend wiki with package-centric implementation map).

## Repository

https://github.com/synthet/image-scoring-ui

## License

MIT
