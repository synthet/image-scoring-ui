export const STAGE_DISPLAY = {
    indexing: {
        name: 'Discovery',
        description: 'Scan and register image files',
    },
    metadata: {
        name: 'Inspection',
        description: 'Extract EXIF metadata and generate thumbnails',
    },
    scoring: {
        name: 'Quality Analysis',
        description: 'AI-powered quality scoring (MUSIQ, LIQE, TOPIQ, Q-Align)',
    },
    culling: {
        name: 'Similarity Clustering',
        description: 'Group similar images into stacks',
    },
    keywords: {
        name: 'Tagging',
        description: 'Generate keywords and captions via BLIP/CLIP',
    },
    bird_species: {
        name: 'Bird Species ID',
        description: 'Identify bird species with BioCLIP 2 (run after Tagging)',
    },
    maintenance: {
        name: 'Maintenance',
        description: 'Database optimization, tag propagation, or embedding backfills',
    },
};
