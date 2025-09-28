"use client"; 
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Load Plot only on the client
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const ConnectomeAnimation = ({ jsonPath }) => {
  const [frames, setFrames] = useState([]);
  const [step, setStep] = useState(0);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // Load JSON on client
  useEffect(() => {
    fetch(jsonPath)
      .then((res) => res.json())
      .then((data) => {
        setFrames(data);
        setNodes(data[0].nodes);
        setEdges(data[0].edges);
      });
  }, [jsonPath]);

  const handleSliderChange = (e) => {
    const s = parseInt(e.target.value);
    setStep(s);
    setNodes(frames[s].nodes);
    setEdges(frames[s].edges);
  };

  const getEdgeCoords = (edges, nodes) => {
    const x = [], y = [], z = [];
    edges.forEach((e) => {
      const [i, j] = e;
      x.push(nodes[i][0], nodes[j][0], null);
      y.push(nodes[i][1], nodes[j][1], null);
      z.push(nodes[i][2], nodes[j][2], null);
    });
    return { x, y, z };
  };

  const edgeCoords = getEdgeCoords(edges, nodes);

  return (
    <div>
      <h2>Connectome Animation - Step {step + 1}</h2>
      <Plot
        data={[
          {
            x: nodes.map((n) => n[0]),
            y: nodes.map((n) => n[1]),
            z: nodes.map((n) => n[2]),
            mode: "markers",
            marker: { size: 3, color: "red" },
            type: "scatter3d",
            name: "Nodes",
          },
          {
            x: edgeCoords.x,
            y: edgeCoords.y,
            z: edgeCoords.z,
            mode: "lines",
            line: { width: 2, color: "blue" },
            type: "scatter3d",
            name: "Edges",
          },
        ]}
        layout={{
          width: 800,
          height: 600,
          scene: { xaxis: { visible: false }, yaxis: { visible: false }, zaxis: { visible: false } },
        }}
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
};

export default ConnectomeAnimation;
