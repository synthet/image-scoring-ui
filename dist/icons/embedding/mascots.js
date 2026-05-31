import { jsx as _jsx } from "react/jsx-runtime";
import { PixelIcon } from './pixelGrid.js';
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
];
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
];
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
];
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
];
/** Wide UFO — OpenCLIP L/14. */
const OPENCLIP_ROWS = [
    '.....######.....',
    '...##########...',
    '.##############.',
    '################',
    '.##############.',
    '...##########...',
    '.....######.....',
];
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
];
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
];
/** Diamond sigil — SigLIP2. */
const SIGLIP2_ROWS = [
    '......##........',
    '.....####.......',
    '....######......',
    '...########.....',
    '....######......',
    '.....####.......',
    '......##........',
];
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
];
export function MobilenetMascot(props) {
    return _jsx(PixelIcon, { rows: MOBILENET_ROWS, ...props });
}
export function ClipMascot(props) {
    return _jsx(PixelIcon, { rows: CLIP_ROWS, ...props });
}
export function BioclipMascot(props) {
    return _jsx(PixelIcon, { rows: BIOCLIP_ROWS, ...props });
}
export function BlipMascot(props) {
    return _jsx(PixelIcon, { rows: BLIP_ROWS, ...props });
}
export function OpenClipMascot(props) {
    return _jsx(PixelIcon, { rows: OPENCLIP_ROWS, ...props });
}
export function OpenAiClipMascot(props) {
    return _jsx(PixelIcon, { rows: OPENAI_CLIP_ROWS, ...props });
}
export function Dinov2Mascot(props) {
    return _jsx(PixelIcon, { rows: DINOV2_ROWS, ...props });
}
export function Siglip2Mascot(props) {
    return _jsx(PixelIcon, { rows: SIGLIP2_ROWS, ...props });
}
export function FallbackEmbeddingMascot(props) {
    return _jsx(PixelIcon, { rows: FALLBACK_ROWS, ...props });
}
