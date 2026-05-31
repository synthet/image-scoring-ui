import { jsx as _jsx } from "react/jsx-runtime";
import { EMBEDDING_SPACE_COLORS } from '../constants/embeddingSpaceColors.js';
import { resolveEmbeddingSpaceIcon } from '../constants/embeddingSpaceIcons.js';
export function EmbeddingSpaceIcon({ code, size = 14, className, muted = false, color, }) {
    const Icon = resolveEmbeddingSpaceIcon(code);
    const tint = color ??
        (muted ? 'var(--color-text-muted, #6d6d6d)' : EMBEDDING_SPACE_COLORS[code] ?? 'currentColor');
    return _jsx(Icon, { size: size, className: className, style: { color: tint } });
}
