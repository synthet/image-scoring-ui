import type { SVGProps } from 'react';
export type PixelIconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
    size?: number;
};
/** Render a 16×16 (or custom) pixel sprite from `#` filled cells. */
export declare function PixelIcon({ rows, size, className, style, ...rest }: PixelIconProps & {
    rows: readonly string[];
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=pixelGrid.d.ts.map