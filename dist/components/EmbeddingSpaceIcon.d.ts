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
export declare function EmbeddingSpaceIcon({ code, size, className, muted, color, }: EmbeddingSpaceIconProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=EmbeddingSpaceIcon.d.ts.map