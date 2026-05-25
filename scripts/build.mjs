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

mkdirSync(DIST, { recursive: true });

function cssVar(name, value) {
  return `  ${name}: ${value};`;
}

const canonicalLines = [
  '/* Auto-generated from @synthet/image-scoring-design — do not edit */',
  ':root {',
  cssVar('--color-bg-primary', c.bgPrimary),
  cssVar('--color-bg-secondary', c.bgSecondary),
  cssVar('--color-bg-tertiary', c.bgTertiary),
  cssVar('--color-bg-elevated', c.bgElevated),
  cssVar('--color-border', c.border),
  cssVar('--color-border-muted', c.borderMuted),
  cssVar('--color-text-primary', c.textPrimary),
  cssVar('--color-text-secondary', c.textSecondary),
  cssVar('--color-text-muted', c.textMuted),
  cssVar('--color-accent', c.accent),
  cssVar('--color-accent-hover', c.accentHover),
  cssVar('--color-accent-dim', c.accentDim),
  cssVar('--color-accent-bright', c.accentBright),
  cssVar('--color-accent-border', c.accentBorder),
  cssVar('--color-success', c.success),
  cssVar('--color-success-bg', c.successBg),
  cssVar('--color-success-border', c.successBorder),
  cssVar('--color-warning', c.warning),
  cssVar('--color-warning-bg', c.warningBg),
  cssVar('--color-warning-border', c.warningBorder),
  cssVar('--color-danger', c.danger),
  cssVar('--color-danger-bg', c.dangerBg),
  cssVar('--color-danger-border', c.dangerBorder),
  cssVar('--color-info', c.info),
  cssVar('--color-info-bg', c.infoBg),
  cssVar('--color-running', c.accentBright),
  cssVar('--color-pending', c.textMuted),
  cssVar('--score-gold', c.scoreGold),
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
  cssVar('--color-bg-primary', c.bgPrimary),
  cssVar('--color-bg-secondary', c.bgSecondary),
  cssVar('--color-bg-tertiary', c.bgTertiary),
  cssVar('--color-bg-elevated', c.bgElevated),
  cssVar('--color-border', c.border),
  cssVar('--color-border-muted', c.borderMuted),
  cssVar('--color-text-primary', c.textPrimary),
  cssVar('--color-text-secondary', c.textSecondary),
  cssVar('--color-text-muted', c.textMuted),
  cssVar('--color-accent', c.accent),
  cssVar('--color-accent-hover', c.accentHover),
  cssVar('--color-accent-dim', c.accentDim),
  cssVar('--color-accent-bright', c.accentBright),
  cssVar('--color-accent-border', c.accentBorder),
  cssVar('--color-success', c.success),
  cssVar('--color-success-bg', c.successBg),
  cssVar('--color-success-border', c.successBorder),
  cssVar('--color-warning', c.warning),
  cssVar('--color-warning-bg', c.warningBg),
  cssVar('--color-warning-border', c.warningBorder),
  cssVar('--color-danger', c.danger),
  cssVar('--color-danger-bg', c.dangerBg),
  cssVar('--color-danger-border', c.dangerBorder),
  cssVar('--color-info', c.info),
  cssVar('--color-info-bg', c.infoBg),
  cssVar('--color-running', `var(--color-accent-bright)`),
  cssVar('--color-pending', `var(--color-text-muted)`),
  cssVar('--color-score-gold', c.scoreGold),
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
