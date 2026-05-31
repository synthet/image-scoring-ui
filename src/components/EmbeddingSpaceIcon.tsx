import { EMBEDDING_SPACE_COLORS } from '../constants/embeddingSpaceColors.js';
import { resolveEmbeddingSpaceIcon } from '../constants/embeddingSpaceIcons.js';

export type EmbeddingSpaceIconProps = {
  /** DB / API embedding_space code */
  code: string;
  /** Pixel size (default 14 — Images table + inspector inline) */
  size?: number;
  className?: string;
  /** When true, tint with muted foreground instead of space color */
  muted?: boolean;
  /** Override tint color (hex or CSS variable) */
  color?: string;
};

export function EmbeddingSpaceIcon({
  code,
  size = 14,
  className,
  muted = false,
  color,
}: EmbeddingSpaceIconProps) {
  const Icon = resolveEmbeddingSpaceIcon(code);
  const tint =
    color ??
    (muted ? 'var(--color-text-muted, #6d6d6d)' : EMBEDDING_SPACE_COLORS[code] ?? 'currentColor');

  return <Icon size={size} className={className} style={{ color: tint }} />;
}
