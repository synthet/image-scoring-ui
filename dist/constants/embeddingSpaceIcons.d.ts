import type { ComponentType } from 'react';
import type { PixelIconProps } from '../icons/embedding/pixelGrid.js';
export type EmbeddingSpaceIconComponent = ComponentType<PixelIconProps>;
/** Piggyback spaces shown on every image row in Images grid + inspector. */
export declare const PRIMARY_EMBEDDING_SPACE_CODES: readonly ["mobilenet_v2_imagenet_gap", "clip_vit_b32_image", "bioclip_2_image", "blip_vit_b16_image"];
/** Full registry aligned with modules/embedding_spaces.py SPACE_DIMS. */
export declare const ALL_EMBEDDING_SPACE_CODES: readonly ["mobilenet_v2_imagenet_gap", "clip_vit_b32_image", "bioclip_2_image", "blip_vit_b16_image", "openclip_l14_laion2b_image", "openai_clip_vit_l14_image", "dinov2_reg_base_image", "siglip2_base_image"];
export type KnownEmbeddingSpaceCode = (typeof ALL_EMBEDDING_SPACE_CODES)[number];
export declare const EMBEDDING_SPACE_ICONS: Record<KnownEmbeddingSpaceCode, EmbeddingSpaceIconComponent>;
export declare function resolveEmbeddingSpaceIcon(code: string): EmbeddingSpaceIconComponent;
//# sourceMappingURL=embeddingSpaceIcons.d.ts.map