"use client";

import TopNavbar from "../src/components/TopNavBar";
import dynamic from "next/dynamic";

// Dynamically import ConnectomeAnimation for client-side rendering
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
          <h3 className="text-2xl font-semibold mb-4">Young Connectome</h3>
          <div className="border rounded-lg p-4 shadow-md mb-10">
            <ConnectomeAnimation jsonPath="/group_0_connectome.json" brainVoxelsJson="/brain_voxels.json" />
          </div>

          <h3 className="text-2xl font-semibold mb-4">Elder Connectome</h3>
          <div className="border rounded-lg p-4 shadow-md">
            <ConnectomeAnimation jsonPath="/group_1_connectome.json" brainVoxelsJson="/brain_voxels.json" />
          </div>
        </section>
      </main>
    </>
  );
}
