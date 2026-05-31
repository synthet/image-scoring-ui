#!/usr/bin/env node
/**
 * Build CSS artifacts from src/tokens.json.
 * Run: npm run build
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC = join(ROOT, 'src', 'tokens.json');
const DIST = join(ROOT, 'dist');

const tokens = JSON.parse(readFileSync(SRC, 'utf8'));
const c = tokens.color;
const g = tokens.gradio;
const labels = tokens.label;
const emb = tokens.embedding;

mkdirSync(DIST, { recursive: true });

function cssVar(name, value) {
  return `  ${name}: ${value};`;
}

function themeColorVars({ tailwindRefs = false } = {}) {
  const running = tailwindRefs ? 'var(--color-accent-bright)' : c.accentBright;
  const pending = tailwindRefs ? 'var(--color-text-muted)' : c.textMuted;
  return [
    cssVar('--color-bg-primary', c.bgPrimary),
    cssVar('--color-bg-secondary', c.bgSecondary),
    cssVar('--color-bg-tertiary', c.bgTertiary),
    cssVar('--color-bg-elevated', c.bgElevated),
    cssVar('--color-bg-preview', c.bgPreview),
    cssVar('--color-border', c.border),
    cssVar('--color-border-muted', c.borderMuted),
    cssVar('--color-text-primary', c.textPrimary),
    cssVar('--color-text-secondary', c.textSecondary),
    cssVar('--color-text-muted', c.textMuted),
    cssVar('--color-text-on-accent', c.textOnAccent),
    cssVar('--color-text-placeholder', c.textPlaceholder),
    cssVar('--color-accent', c.accent),
    cssVar('--color-accent-hover', c.accentHover),
    cssVar('--color-accent-dim', c.accentDim),
    cssVar('--color-accent-bright', c.accentBright),
    cssVar('--color-accent-border', c.accentBorder),
    cssVar('--color-success', c.success),
    cssVar('--color-success-bg', c.successBg),
    cssVar('--color-success-muted', c.successMuted),
    cssVar('--color-success-border', c.successBorder),
    cssVar('--color-warning', c.warning),
    cssVar('--color-warning-bg', c.warningBg),
    cssVar('--color-warning-muted', c.warningMuted),
    cssVar('--color-warning-border', c.warningBorder),
    cssVar('--color-danger', c.danger),
    cssVar('--color-danger-bg', c.dangerBg),
    cssVar('--color-danger-muted', c.dangerMuted),
    cssVar('--color-danger-border', c.dangerBorder),
    cssVar('--color-info', c.info),
    cssVar('--color-info-bg', c.infoBg),
    cssVar('--color-running', running),
    cssVar('--color-pending', pending),
    cssVar('--color-score-gold', c.scoreGold),
    cssVar('--embedding-mobilenet', emb.mobilenetV2ImagenetGap),
    cssVar('--embedding-clip', emb.clipVitB32Image),
    cssVar('--embedding-bioclip', emb.bioclip2Image),
    cssVar('--embedding-blip', emb.blipVitB16Image),
    cssVar('--embedding-openclip', emb.openclipL14Laion2bImage),
    cssVar('--embedding-openai-clip', emb.openaiClipVitL14Image),
    cssVar('--embedding-dinov2', emb.dinov2RegBaseImage),
    cssVar('--embedding-siglip2', emb.siglip2BaseImage),
  ];
}

const canonicalLines = [
  '/* Auto-generated from @synthet/image-scoring-design — do not edit */',
  ':root {',
  ...themeColorVars(),
  cssVar('--label-red', labels.red),
  cssVar('--label-yellow', labels.yellow),
  cssVar('--label-green', labels.green),
  cssVar('--label-blue', labels.blue),
  cssVar('--label-purple', labels.purple),
  '',
  '  /* Gallery legacy aliases (one transition cycle) */',
  cssVar('--bg-dark', 'var(--color-bg-primary)'),
  cssVar('--bg-darker', '#121212'),
  cssVar('--bg-light', 'var(--color-bg-secondary)'),
  cssVar('--border', 'var(--color-border)'),
  cssVar('--text-primary', 'var(--color-text-primary)'),
  cssVar('--text-secondary', 'var(--color-text-secondary)'),
  cssVar('--text-on-accent', 'var(--color-text-on-accent)'),
  cssVar('--text-placeholder', 'var(--color-text-placeholder)'),
  cssVar('--accent', 'var(--color-accent)'),
  cssVar('--success', 'var(--color-success)'),
  cssVar('--danger', 'var(--color-danger)'),
  '}',
  '',
].join('\n');

writeFileSync(join(DIST, 'tokens.css'), canonicalLines, 'utf8');

const tailwindLines = [
  '/* Auto-generated Tailwind v4 @theme — import from frontend index.css */',
  '@theme {',
  ...themeColorVars({ tailwindRefs: true }),
  '}',
  '',
].join('\n');

writeFileSync(join(DIST, 'tailwind-theme.css'), tailwindLines, 'utf8');

const gradioLines = [
  '/* Auto-generated Gradio token overrides — appended after main UI CSS */',
  ':root {',
  cssVar('--bg-primary', g.bgPrimary),
  cssVar('--bg-secondary', g.bgSecondary),
  cssVar('--bg-tertiary', g.bgTertiary),
  cssVar('--bg-elevated', g.bgElevated),
  cssVar('--text-primary', c.textPrimary),
  cssVar('--text-secondary', g.textSecondary),
  cssVar('--text-muted', g.textMuted),
  cssVar('--accent-primary', g.accentPrimary),
  cssVar('--accent-hover', g.accentHover),
  cssVar('--accent-success', g.accentSuccess),
  cssVar('--accent-warning', g.accentWarning),
  cssVar('--accent-danger', g.accentDanger),
  cssVar('--accent-queued', g.accentQueued),
  '}',
  '',
].join('\n');

writeFileSync(join(DIST, 'gradio-snippet.css'), gradioLines, 'utf8');

console.log('Built dist/tokens.css, tailwind-theme.css, gradio-snippet.css');
