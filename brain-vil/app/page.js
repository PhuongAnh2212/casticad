"use client";
import TopNavbar from "../src/components/TopNavBar";
import ConnectomeAnimation from "./brain_connectome";


export default function Page() {
return (
<>
<TopNavbar />
<main className="container mt-4">
<h1>
CASTICaD: A Cross-Attentional SpatioTemporal Framework Integrating Brain Connectivity and Functional Dynamics for Healthy Brain Ageing Study
</h1>


<section className="mt-5">
<h3>Young Connectome</h3>
<ConnectomeAnimation jsonPath="/group_0_connectome.json" brainVoxelsJson="/brain_voxels.json" />


<h3 className="mt-5">Elder Connectome</h3>
<ConnectomeAnimation jsonPath="/group_1_connectome.json" brainVoxelsJson="/brain_voxels.json" />
</section>
</main>
</>
);
}
