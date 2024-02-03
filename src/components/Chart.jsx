import React from "react";
import Plot from "react-plotly.js";

const Chart = ({ data, selectedIds }) => {
  // Filter data to only include selected users and map to plot data
  const plotData = data
    .filter((user) => selectedIds.includes(user.id))
    .map((user) => ({
      x: [user.firstName],
      y: [user.age],
      type: "bar",
      name: user.firstName,
    }));

  // Chart layout configuration
  const layout = {
    width: 720,
    height: 440,
    title: "Age Distribution",
    xaxis: { title: "Name" },
    yaxis: { title: "Age" },
    margin: { l: 50, r: 50, b: 100, t: 100, pad: 4 },
  };

  // Style for the chart container
  const style = {
    display: "block",
    margin: "auto",
    border: "2px dashed black",
    padding: "1rem",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={style}>
      <Plot
        data={plotData}
        layout={layout}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Chart;
