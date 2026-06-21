# Transcript mining review — image-scoring-ui

**Tier:** C · **Chats routed:** 10

## Top sessions (by relevance)

| UUID | Relevance | Themes | Summary |
|------|-----------|--------|---------|
| `39a36e76` | 0.90 | gallery_ipc, db_postgres, pipeline, release | /image-scoring-gallery/release /image-scoring-backend/release |
| `a4f70b1b` | 0.90 | wsl_env, pytest, gallery_ipc, db_postgres | Please check whether we have rolled back, reverted or overwritten some recent ch |
| `3031a9a4` | 0.85 | pytest, gallery_ipc, db_postgres, pipeline | resolve all the uncommited changes. sync with defaul 9master/main) branches. che |
| `6ed23e0b` | 0.76 | db_postgres, pipeline, design_tokens | gallery hangs |
| `536a19b2` | 0.71 | gallery_ipc, pipeline, design_tokens | In D:/Projects/image-scoring-backend and D:/Projects/image-scoring-gallery, anal |
| `9272c6b9` | 0.71 | gallery_ipc, pipeline, design_tokens | In d:\Projects\image-scoring-gallery, analyze uncommitted changes from git statu |
| `a56dd43c` | 0.69 | pipeline, design_tokens | Investigate image-scoring-backend, image-scoring-gallery, and image-scoring-ui g |
| `6cebd412` | 0.69 | pipeline, design_tokens | thorough code/design/UX/UI review; match the visual style with @d:\Projects\imag |
| `9a002576` | 0.64 | pipeline, design_tokens | react-CH9jGrnx.js:8 Uncaught Error: Minified React error #525; visit https://rea |
| `2bd0b298` | 0.59 | pipeline, design_tokens | Perform housekeeping |

## Proposed memory candidates

### `39a36e76` — /image-scoring-gallery/release /image-scoring-backend/releas

- **working_rule** (medium): Design token changes start in image-scoring-ui src/tokens.json; bump consumers after npm build. _(chat 39a36e76)_
- **successful_pattern** (low): Session outcome pattern: Both repos are released, committed, and pushed. _(chat 39a36e76)_

### `a4f70b1b` — Please check whether we have rolled back, reverted or overwr

- **successful_pattern** (low): Session outcome pattern: The first backend pytest run hung (no output after ~13 minutes), so that process was killed. _(chat a4f70b1b)_

### `3031a9a4` — resolve all the uncommited changes. sync with defaul 9master

- **successful_pattern** (low): Session outcome pattern: Recovery is complete on both default branches. Summary: _(chat 3031a9a4)_

### `6ed23e0b` — gallery hangs

- **successful_pattern** (low): Session outcome pattern: **Publish complete.** `image-scoring-ui` v1.2.0 is on GitHub: tag `v1.2.0`, release at https://github.com/synthet/image-scoring-ui/releases/tag/v1.2.0, with built `dist/` in the tag. _(chat 6ed23e0b)_

### `536a19b2` — In D:/Projects/image-scoring-backend and D:/Projects/image-s

- **successful_pattern** (low): Session outcome pattern: ## Git revert commits (last ~30) _(chat 536a19b2)_

### `9272c6b9` — In d:\Projects\image-scoring-gallery, analyze uncommitted ch

- **working_rule** (high): JPEG export EXIF orientation is a separate pass from raster bake; see gallery feature doc. _(chat 9272c6b9)_

### `a56dd43c` — Investigate image-scoring-backend, image-scoring-gallery, an


### `6cebd412` — thorough code/design/UX/UI review; match the visual style wi


### `9a002576` — react-CH9jGrnx.js:8 Uncaught Error: Minified React error #52


### `2bd0b298` — Perform housekeeping

- **successful_pattern** (low): Session outcome pattern: Full housekeeping is complete. All plan todos are done. _(chat 2bd0b298)_

