/**
 * UI-facing pipeline stage codes — align with backend `modules/phases.py` / `UiStageCode`.
 * Display names align with PIPELINE_TERMINOLOGY.md (Discovery, Inspection, …).
 */
export type StageCode = 'indexing' | 'metadata' | 'scoring' | 'culling' | 'keywords' | 'bird_species' | 'maintenance';
export declare const STAGE_DISPLAY: Record<StageCode, {
    name: string;
    description: string;
}>;
//# sourceMappingURL=stageDisplay.d.ts.map