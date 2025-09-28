"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function BrainConnectome({ jsonPath }) {
  const [frames, setFrames] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    fetch(jsonPath)
      .then((res) => res.json())
      .then((data) => setFrames(data));
  }, [jsonPath]);

  if (frames.length === 0) return <p>Loading connectome...</p>;

  const nodes = frames[step].nodes;
  const edges = frames[step].edges;

  const posEdges = edges.filter((e) => e[2] > 0);
  const negEdges = edges.filter((e) => e[2] < 0);

  const buildEdgeCoords = (edgeArray) => {
    const x = [], y = [], z = [];
    edgeArray.forEach(([i, j]) => {
      x.push(nodes[i][0], nodes[j][0], null);
      y.push(nodes[i][1], nodes[j][1], null);
      z.push(nodes[i][2], nodes[j][2], null);
    });
    return { x, y, z };
  };

  const posCoords = buildEdgeCoords(posEdges);
  const negCoords = buildEdgeCoords(negEdges);

  const handleSliderChange = (e) => setStep(parseInt(e.target.value));

  const data = [
    // Positive edges
    {
      x: posCoords.x,
      y: posCoords.y,
      z: posCoords.z,
      mode: "lines",
      line: { width: 2, color: "#016ec4" },
      type: "scatter3d",
      name: "Positive edges",
    },
    // Negative edges
    {
      x: negCoords.x,
      y: negCoords.y,
      z: negCoords.z,
      mode: "lines",
      line: { width: 2, color: "#f89f22" },
      type: "scatter3d",
      name: "Negative edges",
    },
    // Nodes
    {
      x: nodes.map((n) => n[0]),
      y: nodes.map((n) => n[1]),
      z: nodes.map((n) => n[2]),
      mode: "markers",
      marker: { size: 2, color: "gray" },
      type: "scatter3d",
      name: "Nodes",
    },
  ];

  return (
    <div>
      <h2>Connectome Animation - Step {step + 1}</h2>
      <Plot
        data={data}
        layout={{
          width: 800,
          height: 600,
          scene: {
            xaxis: { visible: false },
            yaxis: { visible: false },
            zaxis: { visible: false },
            aspectmode: "data",
          },
        }}
        style={{ width: "100%", height: "80vh" }}
      />
      <input
        type="range"
        min={0}
        max={frames.length - 1}
        value={step}
        onChange={handleSliderChange}
        style={{ width: "100%" }}
      />
    </div>
  );
}
