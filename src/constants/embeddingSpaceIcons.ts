import type { ComponentType } from 'react';
import type { PixelIconProps } from '../icons/embedding/pixelGrid.js';
import {
  BioclipMascot,
  BlipMascot,
  ClipMascot,
  Dinov2Mascot,
  FallbackEmbeddingMascot,
  MobilenetMascot,
  OpenAiClipMascot,
  OpenClipMascot,
  Siglip2Mascot,
} from '../icons/embedding/mascots.js';

export type EmbeddingSpaceIconComponent = ComponentType<PixelIconProps>;

/** Piggyback spaces shown on every image row in Images grid + inspector. */
export const PRIMARY_EMBEDDING_SPACE_CODES = [
  'mobilenet_v2_imagenet_gap',
  'clip_vit_b32_image',
  'bioclip_2_image',
  'blip_vit_b16_image',
] as const;

/** Full registry aligned with modules/embedding_spaces.py SPACE_DIMS. */
export const ALL_EMBEDDING_SPACE_CODES = [
  ...PRIMARY_EMBEDDING_SPACE_CODES,
  'openclip_l14_laion2b_image',
  'openai_clip_vit_l14_image',
  'dinov2_reg_base_image',
  'siglip2_base_image',
] as const;

export type KnownEmbeddingSpaceCode = (typeof ALL_EMBEDDING_SPACE_CODES)[number];

export const EMBEDDING_SPACE_ICONS: Record<KnownEmbeddingSpaceCode, EmbeddingSpaceIconComponent> = {
  mobilenet_v2_imagenet_gap: MobilenetMascot,
  clip_vit_b32_image: ClipMascot,
  bioclip_2_image: BioclipMascot,
  blip_vit_b16_image: BlipMascot,
  openclip_l14_laion2b_image: OpenClipMascot,
  openai_clip_vit_l14_image: OpenAiClipMascot,
  dinov2_reg_base_image: Dinov2Mascot,
  siglip2_base_image: Siglip2Mascot,
};

export function resolveEmbeddingSpaceIcon(code: string): EmbeddingSpaceIconComponent {
  return (
    EMBEDDING_SPACE_ICONS[code as KnownEmbeddingSpaceCode] ?? FallbackEmbeddingMascot
  );
}
