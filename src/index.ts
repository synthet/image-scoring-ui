export {
  LABEL_COLORS,
  LABEL_FALLBACK_COLOR,
  PHASE_STATUS_COLORS,
  phaseStatusColor,
  type PhaseStatusColorKey,
} from './constants/labelColors.js';

export { STAGE_DISPLAY, type StageCode } from './constants/stageDisplay.js';

export {
  EMBEDDING_SPACE_COLORS,
  EMBEDDING_SPACE_LABELS,
} from './constants/embeddingSpaceColors.js';

export {
  ALL_EMBEDDING_SPACE_CODES,
  CULLING_EMBEDDING_SPACE_CODES,
  EMBEDDING_SPACE_ICONS,
  PRIMARY_EMBEDDING_SPACE_CODES,
  resolveEmbeddingSpaceIcon,
  type EmbeddingSpaceIconComponent,
  type KnownEmbeddingSpaceCode,
} from './constants/embeddingSpaceIcons.js';

export { EmbeddingSpaceIcon, type EmbeddingSpaceIconProps } from './components/EmbeddingSpaceIcon.js';

export { formatScoreValue } from './format/scores.js';

export {
  BAND_DISPLAY,
  CRITERIA_ORDER,
  CRITERION_LABEL,
  EVIDENCE_LAYER_LABELS,
  HEATMAP_RAMP_RGBA,
  LIMITATION_LABEL,
  NOISE_RAMP_RGBA,
  formatSubScore,
  resolveBandDisplay,
  type BandDisplay,
  type BandTier,
  type EvidenceCriterion,
  type EvidenceLayerId,
} from './constants/evidenceDisplay.js';
