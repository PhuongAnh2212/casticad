"use client";

import TopNavbar from "../src/components/TopNavBar";
import dynamic from "next/dynamic";

const ConnectomeAnimation = dynamic(() => import("./brain_connectome"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <TopNavbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-justify mb-6 py-4 bg-blue-100 rounded">
          CASTICaD: A Cross-Attentional SpatioTemporal Framework Integrating Brain Connectivity and Functional Dynamics for Healthy Brain Ageing Study
        </h1>

        <p className="text-gray-700 leading-relaxed text-justify mb-8">
          This study collects data from the “Max Planck Institute Leipzig Mind-Brain-Body Dataset” – LEMON. This dataset contains multimodal data from 228 healthy adults, including a young group (N=154, 25.1±3.1 years, range 20–35 years, 45 female) and an elderly group (N=74, 67.6±4.7 years, range 59–77 years, 37 female). In this study, we used T1-weighted (T1w), resting-state fMRI (rs-fMRI), and diffusion-weighted imaging (DWI) from 208 subjects (140 young and 68 elderly) to extract functional connectivity, structural connectivity, and time series. Data preprocessing followed previous studies to calculate functional connectivity (FC), structural connectivity (SC), and extract BOLD time series. The Brainnetome atlas was chosen as brain template for parcellation due to its construction from both rs-fMRI and anatomical information, and its high replicability.
        </p>

        <section className="mt-10">          
          <h3 className="text-2xl font-semibold mb-4">Young Connectome Graph</h3>
          <div className="border rounded-lg p-4 shadow-md mb-4">
            <ConnectomeAnimation jsonPath="/group_0_connectome.json" brainVoxelsJson="/brain_voxels.json" />
          </div>
            <p className="text-justify text-sm text-gray-500 italic mt-2 mb-10">
              Figure 1. Top 1/1000 Mamba-induced edge weights over 652 time steps in the young adult cohort (N = 140, mean age = 25.1 ± 3.1 years). 
              The visualization highlights the strongest functional and structural connections among brain regions of interest (ROIs) derived from BOLD time series. 
              Young participants exhibit more negative connections and fewer recruited nodes, reflecting efficient and specialized neural activation consistent with preserved cognitive performance.
            </p>

          <h3 className="text-2xl font-semibold mb-4">Elderly Connectome Graph</h3>
          <div className="border rounded-lg p-4 shadow-md mb-4">
            <ConnectomeAnimation jsonPath="/group_1_connectome.json" brainVoxelsJson="/brain_voxels.json" />
          </div>
            <p className="text-justify text-sm text-gray-500 italic mt-2 mb-10">
              Figure 2. Top 1/1000 Mamba-induced edge weights over 652 time steps in the elderly cohort (N = 68, mean age = 67.6 ± 4.7 years). 
              The graph shows broader recruitment of brain regions and fewer negative causal connections, consistent with the brain compensation and dedifferentiation hypotheses. 
              These patterns indicate age-related alterations in excitatory and inhibitory interactions, while the top strongest edges span all major cortical networks, suggesting preserved cognitive reserve through distributed network engagement.
            </p>
        </section>
      </main>
    </>
  );
}
