# CASTICaD

**CASTICaD** is a cross-attentional spatiotemporal framework designed to integrate brain connectivity and functional dynamics for the study of healthy brain ageing.

This repository contains code associated with a scientific study based on multimodal neuroimaging data from the LEMON (Leipzig Mind-Brain-Body) dataset.

---

## Dataset

This study uses data from the **Max Planck Institute Leipzig Mind-Brain-Body Dataset (LEMON)**.

- Total dataset: 228 healthy adults  
- Subjects used in this study: 208  
  - Young group: 140 subjects (25.1 ± 3.1 years, range 20–35)
  - Elderly group: 68 subjects (67.6 ± 4.7 years, range 59–77)

### Modalities
- T1-weighted MRI (T1w)
- Resting-state fMRI (rs-fMRI)
- Diffusion-weighted imaging (DWI)

The dataset is **not included** in this repository. Users must request access from the original data providers.

---

## Preprocessing

Data preprocessing follows previous studies to derive:
- Structural connectivity (SC) from DWI
- Functional connectivity (FC) from rs-fMRI
- Regional BOLD time series

Brain parcellation is performed using the **Brainnetome atlas**, selected for its integration of anatomical and resting-state functional information and its high replicability.

---

## Method

CASTICaD integrates:
- Structural connectivity
- Functional connectivity
- Functional time series

using a **cross-attention-based spatiotemporal framework** to model interactions between brain connectivity and functional dynamics.
