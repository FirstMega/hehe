"use client";
// components/LineChart.js
import React from "react";
import Plot from "react-plotly.js";

const LineChart = ({ data }) => {
  // Extracting data for plotting
  const dates = data.map((entry) => entry.date);
  const temperatureMax = data.map((entry) => entry.temperature_2m_max);
  const temperatureMin = data.map((entry) => entry.temperature_2m_min);
  const humidityMax = data.map((entry) => entry.relative_humidity_2m_max);
  const humidityMin = data.map((entry) => entry.relative_humidity_2m_min);
  const precipitation = data.map((entry) => entry.precipitation_sum);

  return (
    <Plot
      data={[
        {
          x: dates,
          y: temperatureMax,
          type: "scatter",
          mode: "lines",
          name: "Max Temperature",
        },
        {
          x: dates,
          y: temperatureMin,
          type: "scatter",
          mode: "lines",
          name: "Min Temperature",
        },
        {
          x: dates,
          y: humidityMax,
          type: "scatter",
          mode: "lines",
          name: "Max Humidity",
        },
        {
          x: dates,
          y: humidityMin,
          type: "scatter",
          mode: "lines",
          name: "Min Humidity",
        },
        {
          x: dates,
          y: precipitation,
          type: "bar",
          name: "Precipitation",
        },
      ]}
      layout={{ width: 800, height: 500, title: "Weather Data" }}
    />
  );
};

export default LineChart;
