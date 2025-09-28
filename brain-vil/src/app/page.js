import React from "react";
import ConnectomeAnimation from "./brain_connectome";

export default function Home() {
  return (
    <>
      <h1>
        CASTICaD: A Cross-Attentional SpatioTemporal Framework Integrating Brain Connectivity and Functional Dynamics for Healthy Brain Ageing Study
      </h1>

      <div>
        <h3>Group 0 Connectome</h3>
        <ConnectomeAnimation 
          jsonPath="/group_0_connectome.json" 
          brainVoxelsJson="/brain_voxels.json" 
        />

        <h3>Group 1 Connectome</h3>
        <ConnectomeAnimation 
          jsonPath="/group_1_connectome.json" 
          brainVoxelsJson="/brain_voxels.json" 
        />
      </div>
    </>
  );
}
