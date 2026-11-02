# Icons

Synth app icon family: templates, tokens, fleet masters and the renderer. Rules and wiring:
[`../docs/ICON_FAMILY.md`](../docs/ICON_FAMILY.md).

```
icons/
  tokens.json            plate, silver, tints, sizes
  templates/             mark-1024.svg, mark-32.svg, mark-16.svg (start a new mark here)
  projects/<app>/        mark.svg, mark-32.svg, mark-16.svg for each fleet app
  render_icons.py        masters -> PNG sizes, favicon.ico, app.ico, favicon.svg, touch/manifest icons
```

New mark:

1. Copy the three templates into `icons/projects/<app>/` and rename `mark-1024.svg` to `mark.svg`.
2. Replace the `glyph` paths: one idea inside x/y 224..800, legible in grayscale; simplify by hand for 32 and 16.
3. Render and verify (needs ImageMagick 7 `magick`):

   ```
   uv run --with pillow python icons/render_icons.py --masters icons/projects/<app> --out <output dir>
   ```

4. Wire the outputs as described in `docs/ICON_FAMILY.md`.

The agent skill that walks through this lives in `synthet-code-framework` (`.claude/skills/app-icons`).
