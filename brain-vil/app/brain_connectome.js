"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function BrainConnectome({ jsonPath }) {
  const [frames, setFrames] = useState([]);
  const [step, setStep] = useState(0);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    fetch(jsonPath)
      .then((res) => res.json())
      .then((data) => setFrames(data));
  }, [jsonPath]);

  if (frames.length === 0)
    return <p className="text-center mt-3">Loading connectome...</p>;

  const nodes = frames[step].nodes;
  const edges = frames[step].edges;

  const buildEdgeCoords = (edgeArray) => {
    const x = [], y = [], z = [];
    edgeArray.forEach(([i, j]) => {
      x.push(nodes[i][0], nodes[j][0], null);
      y.push(nodes[i][1], nodes[j][1], null);
      z.push(nodes[i][2], nodes[j][2], null);
    });
    return { x, y, z };
  };

  const posCoords = buildEdgeCoords(edges.filter((e) => e[2] > 0));
  const negCoords = buildEdgeCoords(edges.filter((e) => e[2] < 0));

  const data = [
    {
      x: posCoords.x,
      y: posCoords.y,
      z: posCoords.z,
      mode: "lines",
      line: { width: 2, color: "#016ec4" },
      type: "scatter3d",
      name: "Positive edges",
    },
    {
      x: negCoords.x,
      y: negCoords.y,
      z: negCoords.z,
      mode: "lines",
      line: { width: 2, color: "#f89f22" },
      type: "scatter3d",
      name: "Negative edges",
    },
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

  const handleSliderChange = (e) => setStep(parseInt(e.target.value));

  return (
    <div ref={containerRef} className="mb-4">
      <h5 className="text-center mb-3">Connectome Animation - Step {step + 1}</h5>

      <div className="card shadow-sm mb-3">
        <div className="card-body p-2">
          <Plot
            data={data}
            layout={{
              width: width || 600,
              height: (width || 600) * 0.75,
              margin: { l: 0, r: 0, t: 0, b: 0 },
              scene: {
                xaxis: { visible: false },
                yaxis: { visible: false },
                zaxis: { visible: false },
                aspectmode: "data",
              },
            }}
            style={{ width: "100%", height: "auto", minHeight: "400px" }}
          />
        </div>
      </div>

      <div className="d-flex align-items-center">
        <input
          type="range"
          min={0}
          max={frames.length - 1}
          value={step}
          onChange={handleSliderChange}
          className="form-range flex-grow-1 me-3"
        />
        <span className="fw-bold">{step + 1}/{frames.length}</span>
      </div>
    </div>
  );
}
