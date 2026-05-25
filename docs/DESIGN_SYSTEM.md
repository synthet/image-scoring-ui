# Design system - palette and icon contract

Canonical source for colors, icons, and sizing across Vexlum Scoring products. **Token values live in this package** (`@synthet/image-scoring-design`, `src/tokens.json`). CSS and TS constants are built into `dist/` on `npm run build`.

Consumers:

- **`image-scoring-backend/frontend`** — React + Tailwind v4 SPA at `/ui/` (import `tailwind-theme.css` + TS constants from this package)
- **`image-scoring-gallery`** — Electron + React + CSS Modules (import `tokens.css` + TS constants)
- **Gradio operator UI** — append `gradio-snippet.css` after main styles

Both main apps share a VS Code Dark+ visual identity. Anything else (Material greens, Tailwind blues, ad-hoc hex literals) is a deviation and should be migrated to a token below.

> Note on terminology: this doc describes UI tokens. For pipeline stage names (Discovery / Inspection / Quality Analysis / …) and `phase_code` mapping, see [PIPELINE_TERMINOLOGY](https://github.com/synthet/image-scoring-backend/blob/main/docs/technical/PIPELINE_TERMINOLOGY.md) in **image-scoring-backend**.

## Palette

### Surfaces and chrome

| Token | Hex | Use |
|---|---|---|
| `--color-bg-primary` | `#1e1e1e` | Default page background |
| `--color-bg-secondary` | `#252526` | Sidebar, side panels, elevated regions |
| `--color-bg-tertiary` | `#2d2d30` | Cards, list rows, modals |
| `--color-bg-elevated` | `#3c3c3c` | Hover row, popovers, input focus |
| `--color-border` | `#474747` | Default 1px divider, card border |
| `--color-border-muted` | `#3c3c3c` | Subtle separator inside a card |

### Text

| Token | Hex | Use |
|---|---|---|
| `--color-text-primary` | `#cccccc` | Body copy, headings |
| `--color-text-secondary` | `#9d9d9d` | Captions, secondary labels |
| `--color-text-muted` | `#6d6d6d` | Disabled / placeholder text, muted icons |

### Accent (interactive blue)

| Token | Hex | Use |
|---|---|---|
| `--color-accent` | `#007acc` | Primary buttons, links, focus ring, running state |
| `--color-accent-hover` | `#1e8ad6` | Hover on accent surfaces |
| `--color-accent-dim` | `#003f6e` | Selected row background, accent border-dim |

### Status (semantic)

| Token | Hex | Use | Lucide icon |
|---|---|---|---|
| `--color-success` | `#89d185` | Done / completed phase, positive toast | `CheckCircle2` |
| `--color-success-bg` | `#1a3320` | Tinted success surface |  |
| `--color-success-border` | `#2d6a2d` | Success card outline |  |
| `--color-warning` | `#cca700` | Warnings, partial / paused | `AlertTriangle` |
| `--color-warning-bg` | `#332900` | Tinted warning surface |  |
| `--color-danger` | `#f44747` | Errors, failed / canceled | `XCircle` |
| `--color-danger-bg` | `#3a1515` | Tinted danger surface |  |
| `--color-danger-border` | `#7a2a2a` | Danger card outline |  |
| `--color-info` | `#9cdcfe` | Informational toast | `Info` |
| `--color-info-bg` | `#003a5c` | Tinted info surface |  |

### Pipeline / phase status

| State | Token | Hex | Lucide icon |
|---|---|---|---|
| `pending` | `--color-text-muted` | `#6d6d6d` | `Circle` |
| `queued` | `--color-text-secondary` | `#9d9d9d` | `Clock3` |
| `running` | `--color-accent` | `#007acc` | `Loader2` (animated) |
| `paused` | `--color-warning` | `#cca700` | `PauseCircle` |
| `done` / `completed` | `--color-success` | `#89d185` | `CheckCircle2` |
| `skipped` | `--color-text-muted` | `#6d6d6d` | `MinusCircle` |
| `failed` / `canceled` | `--color-danger` | `#f44747` | `XCircle` |
| `partial` / `interrupted` / `cancel_requested` | `--color-warning` | `#cca700` | `AlertTriangle` |

Hex helpers for inline TS: `phaseStatusColor()` and `PHASE_STATUS_COLORS` from this package. The backend SPA still uses [PhaseStatusIcon.tsx](https://github.com/synthet/image-scoring-backend/blob/main/frontend/src/components/status/PhaseStatusIcon.tsx) as the single source for run / phase status icons (gallery does not render run status today).

### Photo color labels (Lightroom-style)

User-facing color tags on images. **Not** UI status colors.

| Token | Hex |
|---|---|
| `--label-red` | `#e53935` |
| `--label-yellow` | `#fdd835` |
| `--label-green` | `#43a047` |
| `--label-blue` | `#1e88e5` |
| `--label-purple` | `#8e24aa` |

Use `LABEL_COLORS` from `@synthet/image-scoring-design` in TypeScript.

### Score / rating

| Token | Hex | Use |
|---|---|---|
| `--score-gold` | `#ffd700` | Filled star, score-bar peak |

Star outlines use `--color-text-muted`.

## Icon contract (Lucide)

All icons come from [lucide-react](https://lucide.dev). Both repos pin a recent 0.5x release. Avoid mixing icon libraries.

### One concept, one icon

| Concept | Canonical icon | Notes |
|---|---|---|
| Refresh / reload | `RefreshCw` | Drop `RefreshCcw` |
| Cancel edits / discard | `RotateCcw` | Distinct from refresh |
| External link | `ExternalLink` |  |
| Folder collapsed / open | `Folder` / `FolderOpen` |  |
| Tree expand / collapse | `ChevronRight` / `ChevronDown` |  |
| Pagination | `ChevronLeft` / `ChevronRight` |  |
| Add | `Plus` |  |
| Delete | `Trash2` |  |
| Close / dismiss | `X` |  |
| Star (rating) | `Star` |  |
| Search | `Search` |  |
| Settings | `Settings` |  |
| Tools | `Wrench` |  |
| Brand mark | `Zap` |  |

### Severity (notifications, toasts, banners)

| Severity | Icon | Color token |
|---|---|---|
| `info` | `Info` | `--color-info` |
| `success` | `CheckCircle2` | `--color-success` |
| `warning` | `AlertTriangle` | `--color-warning` |
| `error` | `XCircle` | `--color-danger` |

`AlertCircle` is **retired** wherever it overlaps the four severities above.

### Sizes

| Context | Pixel size | Tailwind class |
|---|---|---|
| Inline with body text | `size={14}` | `h-3.5 w-3.5` |
| Buttons, toolbar | `size={16}` | `h-4 w-4` |
| Panel headers | `size={20}` | `h-5 w-5` |
| Empty-state hero | `size={32}` | `h-8 w-8` |

### Animation

- Spin: `Loader2` with `className="animate-spin"`.

## Do / don't

**Do**

- Import CSS from this package (`tokens.css`, `tailwind-theme.css`).
- Use Tailwind v4 utilities from `@theme` in the backend frontend after importing `tailwind-theme.css`.
- Use `var(--color-...)` in gallery CSS Modules.
- Use `phaseStatusColor` / `PHASE_STATUS_COLORS` for hex in TS when CSS variables are awkward.

**Don't**

- Add new hex literals in app components; extend `src/tokens.json` here, rebuild, publish.
- Mix Material palette with VS Code Dark+ status colors.
- Reuse `--label-*` for status / severity.
- Re-introduce a parallel phase status icon map in gallery without aligning with backend `PhaseStatusIcon`.

## Implementation map

| Concern | Package (`@synthet/image-scoring-design`) | Backend frontend | Gallery |
|---|---|---|---|
| Token JSON (source of truth) | `src/tokens.json` (export `./tokens.json`) | Depend on package; stop duplicating hex in `index.css` over time | Same |
| CSS variables | `dist/tokens.css` | `dist/tailwind-theme.css` via `@import` in [frontend/src/index.css](https://github.com/synthet/image-scoring-backend/blob/main/frontend/src/index.css) | `@import '@synthet/image-scoring-design/tokens.css'` (replace or alias [src/styles/tokens.css](https://github.com/synthet/image-scoring-gallery/blob/main/src/styles/tokens.css)) |
| Gradio overrides | `dist/gradio-snippet.css` | Wire in operator / Gradio bundle | n/a |
| Label / phase hex in TS | `LABEL_COLORS`, `PHASE_STATUS_COLORS`, `phaseStatusColor` | Replace [labelColors.ts](https://github.com/synthet/image-scoring-backend/blob/main/frontend/src/constants/labelColors.ts) imports | Replace gallery constants |
| Pipeline stage display names | `STAGE_DISPLAY` | Align with backend types | Import from package |
| Status icon component | n/a (icons only in apps) | [PhaseStatusIcon.tsx](https://github.com/synthet/image-scoring-backend/blob/main/frontend/src/components/status/PhaseStatusIcon.tsx) | n/a |
| Severity toasts | tokens in CSS | [badge.tsx](https://github.com/synthet/image-scoring-backend/blob/main/frontend/src/components/ui/badge.tsx) | [NotificationTray.tsx](https://github.com/synthet/image-scoring-gallery/blob/main/src/components/Layout/NotificationTray.tsx) |

Build pipeline: `scripts/build.mjs` reads `src/tokens.json` and writes the three CSS files; `tsc` emits `dist/index.js` and `dist/constants/*`.

## Migration notes

- Replace `bg-[#xxxxxx]` with theme utilities after importing package CSS.
- Replace `<RefreshCcw />` with `<RefreshCw />`.
- Replace misplaced `<AlertCircle />` with `AlertTriangle` or `XCircle` per severity table.
- Round odd icon sizes to 14 / 16 / 20 unless there is a documented exception.

**See also:** [README](../README.md) · [Backend design index](https://github.com/synthet/image-scoring-backend/blob/main/docs/design/INDEX.md) · [PIPELINE_TERMINOLOGY](https://github.com/synthet/image-scoring-backend/blob/main/docs/technical/PIPELINE_TERMINOLOGY.md)
