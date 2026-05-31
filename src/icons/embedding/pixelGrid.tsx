import type { CSSProperties, SVGProps } from 'react';

export type PixelIconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  size?: number;
};

/** Render a 16×16 (or custom) pixel sprite from `#` filled cells. */
export function PixelIcon({
  rows,
  size = 16,
  className,
  style,
  ...rest
}: PixelIconProps & { rows: readonly string[] }) {
  const width = rows[0]?.length ?? 16;
  const height = rows.length;
  const pixels: JSX.Element[] = [];

  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x += 1) {
      if (row[x] === '#') {
        pixels.push(
          <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="currentColor" />,
        );
      }
    }
  });

  const mergedStyle: CSSProperties = {
    imageRendering: 'pixelated',
    ...style,
  };

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={size}
      height={size}
      className={className}
      style={mergedStyle}
      aria-hidden="true"
      {...rest}
    >
      {pixels}
    </svg>
  );
}
