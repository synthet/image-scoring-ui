---
type: Plan
title: Evidence review design-system candidates
description: Clean-room proposals for reusable evidence, comparison, uncertainty, and action-safety UI primitives.
resource: docs/reference-workflow-improvement-candidates.md
tags: [planning, design-system, evidence, review, clean-room]
timestamp: 2026-09-25T18:00:00Z
okf_version: 0.1
status: proposed
---

# Evidence review design-system candidates

> Provenance: derived from competitive analysis of a commercial application's observable behaviour and documentation; contains no code, identifiers, fitted constants or model artefacts from it.

This page proposes behavior-level additions to the shared design system. It avoids prescribing a copied layout, visual asset, color value, or proprietary interaction. Product repositories should validate the components with their own users and data.

Related pages:

- [Scoring evidence tokens](scoring-evidence-tokens.md)
- [UX/UI constitution](UX_UI_CONSTITUTION.md)
- [Design system](DESIGN_SYSTEM.md)

## 1. Separate evidence state dimensions

Provide semantic primitives for four independent dimensions:

- measured quality or value;
- confidence in that measurement;
- applicability to the current image; and
- processing state, including pending, ready, degraded, and failed.

Components should not use one color or icon to carry all four meanings. Text labels and accessible names must remain sufficient without color.

## 2. Add comparison-layout primitives

Define reusable shells for two-up, multi-candidate, and winner-versus-runner-up comparison. The primitives should support synchronized pan and zoom, equivalent crop framing, independent reset, keyboard focus, and a visible indication when views are no longer synchronized.

The package should specify behavior and tokens; applications retain control over image decoding, virtualization, and domain-specific actions.

## 3. Standardize evidence panels

Create a composable panel pattern for summary, evidence groups, provenance, confidence, missing states, and diagnostics. Evidence rows should support a value, unit, confidence, applicability, source label, and explanation. Unknown or failed evidence must remain visible when it affects a recommendation.

Reason chips should link a recommendation to the relevant panel section or overlay without pretending that a compact label is the complete explanation.

## 4. Define overlay controls

Provide tokens and interaction guidance for boxes, landmarks, masks, crop regions, and focus maps. Every overlay needs a legend, accessible description, visibility toggle, opacity control where useful, and a non-color differentiator. Overlays should remain legible over bright, dark, and varied imagery.

Applications should be able to show evidence selectively so dense diagnostics do not obscure the photograph.

## 5. Add decision-state semantics

Standardize labels and icon roles for candidate winner, close call, adjusted recommendation, user-confirmed choice, and unresolved result. Machine recommendations and user decisions must look and read differently. A user override should display the current state and preserve access to the prior recommendation.

## 6. Add action-safety patterns

Define shared states for proposed actions, previewed actions, stale manifests, in-progress application, completed actions, partial failure, and undo availability. Destructive actions should present affected-item counts and identity conflicts before execution. Recovery status must be available after the dialog closes.

## 7. Represent progressive and degraded results

Long-running analysis should reveal stable partial evidence without making the final recommendation appear complete. Components need explicit states for queued, measuring, refining, unavailable, and retryable failure. If the system falls back to cheaper evidence, the UI should say so and identify which conclusions are provisional.

## 8. Make keyboard and focus behavior part of the contract

Comparison and review components should define arrow-key navigation, focus restoration, dialog trapping, zoom shortcuts, selection behavior, and screen-reader announcements. Applications should not need to invent these behaviors independently.

Shortcut hints must come from an application command registry so labels stay aligned with actual bindings and platform conventions.

## 9. Provide accessible analytical displays

Add patterns for score distributions, confidence intervals, disagreement, and before/after ranking changes. Every chart should have a text summary and tabular alternative. Hover-only details need focus equivalents, and uncertainty should not be encoded solely as transparency.

## 10. Support dense, large-library workflows

Define density, truncation, loading-placeholder, and virtualized-list tokens that preserve readable selection and focus states. Components should remain stable when evidence arrives incrementally or rows are recycled. Avoid layout shifts that move the active candidate during review.

## 11. Publish stable TypeScript semantics

Expose typed constants and discriminated states for evidence status, confidence class, applicability, decision state, and action safety. Changes should be additive where possible and carry a migration note when semantics change. Applications should map domain values into these stable UI concepts rather than importing model-specific names.

## 12. Test meaning as well as pixels

Add contract tests for generated artifacts, semantic-state snapshots, keyboard paths, contrast, reduced motion, and screen-reader labels. Test combinations such as low confidence plus high measured quality, unknown evidence plus a manual decision, and partial failure during an action. Visual snapshots alone cannot verify these distinctions.

## Suggested delivery order

1. Stabilize evidence, confidence, applicability, and processing-state semantics.
2. Add evidence rows, decision badges, and degraded-state messaging.
3. Add comparison shells and synchronized-view behavior contracts.
4. Add overlay controls and accessible analytical displays.
5. Add action-safety and recovery primitives.
6. Publish cross-consumer examples and migration guidance.

## Acceptance evidence

- Consumers can represent all evidence states without app-specific literal colors.
- Quality, confidence, applicability, and processing state remain distinguishable.
- Comparison components work with keyboard-only and screen-reader navigation.
- Charts and overlays have non-visual equivalents or descriptions.
- Machine recommendations, user decisions, and unresolved cases have distinct semantics.
- Action components expose preview, stale-input, partial-failure, and recovery states.
- Package builds and contract tests pass for every supported consumer.

## Non-goals

- Copying a commercial interface, visual asset, layout, or literal style value.
- Moving model or ranking logic into the design-system package.
- Owning application data fetching, decoding, or persistence.
- Encoding one product's terminology into shared semantic primitives.
