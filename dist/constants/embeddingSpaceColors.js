import tokens from '../tokens.json' with { type: 'json' };
const { embedding } = tokens;
/** DB / API embedding_space codes → display hex (icons, badges). */
export const EMBEDDING_SPACE_COLORS = {
    mobilenet_v2_imagenet_gap: embedding.mobilenetV2ImagenetGap,
    clip_vit_b32_image: embedding.clipVitB32Image,
    bioclip_2_image: embedding.bioclip2Image,
    blip_vit_b16_image: embedding.blipVitB16Image,
    openclip_l14_laion2b_image: embedding.openclipL14Laion2bImage,
    openai_clip_vit_l14_image: embedding.openaiClipVitL14Image,
    dinov2_reg_base_image: embedding.dinov2RegBaseImage,
    siglip2_base_image: embedding.siglip2BaseImage,
};
export const EMBEDDING_SPACE_LABELS = {
    mobilenet_v2_imagenet_gap: 'MobileNetV2 (1280d)',
    clip_vit_b32_image: 'CLIP (512d)',
    bioclip_2_image: 'BioCLIP (768d)',
    blip_vit_b16_image: 'BLIP (768d)',
    openclip_l14_laion2b_image: 'OpenCLIP L/14 (768d)',
    openai_clip_vit_l14_image: 'OpenAI CLIP L/14 (768d)',
    dinov2_reg_base_image: 'DINOv2 (768d)',
    siglip2_base_image: 'SigLIP2 (768d)',
};
