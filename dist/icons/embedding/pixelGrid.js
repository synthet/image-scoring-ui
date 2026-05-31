import { jsx as _jsx } from "react/jsx-runtime";
/** Render a 16×16 (or custom) pixel sprite from `#` filled cells. */
export function PixelIcon({ rows, size = 16, className, style, ...rest }) {
    const width = rows[0]?.length ?? 16;
    const height = rows.length;
    const pixels = [];
    rows.forEach((row, y) => {
        for (let x = 0; x < row.length; x += 1) {
            if (row[x] === '#') {
                pixels.push(_jsx("rect", { x: x, y: y, width: 1, height: 1, fill: "currentColor" }, `${x}-${y}`));
            }
        }
    });
    const mergedStyle = {
        imageRendering: 'pixelated',
        ...style,
    };
    return (_jsx("svg", { viewBox: `0 0 ${width} ${height}`, width: size, height: size, className: className, style: mergedStyle, "aria-hidden": "true", ...rest, children: pixels }));
}
