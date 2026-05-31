import { PixelIcon, type PixelIconProps } from './pixelGrid.js';

/** Classic crab-style invader — MobileNet default tower. */
const MOBILENET_ROWS = [
  '......####......',
  '.....######.....',
  '....########....',
  '...##########...',
  '...##......##...',
  '...##.####.##...',
  '....########....',
  '.....######.....',
  '......####......',
] as const;

/** Squid / tentacle invader — CLIP. */
const CLIP_ROWS = [
  '......####......',
  '.....##..##.....',
  '....##....##....',
  '....##....##....',
  '.....######.....',
  '......####......',
  '.....##..##.....',
  '....##....##....',
  '...##......##...',
  '..##........##..',
] as const;

/** Leaf silhouette — BioCLIP. */
const BIOCLIP_ROWS = [
  '......##........',
  '.....####.......',
  '....######......',
  '...########.....',
  '..##########....',
  '...########.....',
  '....######......',
  '.....####.......',
  '......##........',
] as const;

/** Speech bubble — BLIP captioning tower. */
const BLIP_ROWS = [
  '...########.....',
  '..##########....',
  '.############...',
  '.############...',
  '..##########....',
  '...########.....',
  '.....####.......',
  '.....####.......',
  '.....####.......',
  '......##........',
] as const;

/** Wide UFO — OpenCLIP L/14. */
const OPENCLIP_ROWS = [
  '.....######.....',
  '...##########...',
  '.##############.',
  '################',
  '.##############.',
  '...##########...',
  '.....######.....',
] as const;

/** Four-point star — OpenAI CLIP ViT-L/14. */
const OPENAI_CLIP_ROWS = [
  '......##........',
  '.....####.......',
  '....######......',
  '..##########....',
  '...########.....',
  '....######......',
  '.....####.......',
  '......##........',
] as const;

/** Blocky dino head — DINOv2. */
const DINOV2_ROWS = [
  '.....######.....',
  '....########....',
  '...##########...',
  '...##....##.....',
  '...##########...',
  '....########....',
  '.....######.....',
  '......####......',
] as const;

/** Diamond sigil — SigLIP2. */
const SIGLIP2_ROWS = [
  '......##........',
  '.....####.......',
  '....######......',
  '...########.....',
  '....######......',
  '.....####.......',
  '......##........',
] as const;

/** Generic pixel grid for unknown embedding_space codes. */
const FALLBACK_ROWS = [
  '.##..##..##..##.',
  '.##..##..##..##.',
  '................',
  '.##..##..##..##.',
  '.##..##..##..##.',
  '................',
  '.##..##..##..##.',
  '.##..##..##..##.',
] as const;

export function MobilenetMascot(props: PixelIconProps) {
  return <PixelIcon rows={MOBILENET_ROWS} {...props} />;
}

export function ClipMascot(props: PixelIconProps) {
  return <PixelIcon rows={CLIP_ROWS} {...props} />;
}

export function BioclipMascot(props: PixelIconProps) {
  return <PixelIcon rows={BIOCLIP_ROWS} {...props} />;
}

export function BlipMascot(props: PixelIconProps) {
  return <PixelIcon rows={BLIP_ROWS} {...props} />;
}

export function OpenClipMascot(props: PixelIconProps) {
  return <PixelIcon rows={OPENCLIP_ROWS} {...props} />;
}

export function OpenAiClipMascot(props: PixelIconProps) {
  return <PixelIcon rows={OPENAI_CLIP_ROWS} {...props} />;
}

export function Dinov2Mascot(props: PixelIconProps) {
  return <PixelIcon rows={DINOV2_ROWS} {...props} />;
}

export function Siglip2Mascot(props: PixelIconProps) {
  return <PixelIcon rows={SIGLIP2_ROWS} {...props} />;
}

export function FallbackEmbeddingMascot(props: PixelIconProps) {
  return <PixelIcon rows={FALLBACK_ROWS} {...props} />;
}
