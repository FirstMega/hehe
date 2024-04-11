// components/DataVisualization.js
"use client";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import LineChart from "./LineChart";

const DataVisualization = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Fetch and parse the CSV data
    const fetchData = async () => {
      const response = await fetch("/data.csv");
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);

      // Parse CSV using PapaParse library
      Papa.parse(csv, {
        header: true,
        complete: (result) => {
          setWeatherData(result.data);
        },
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <LineChart data={weatherData} />
    </div>
  );
};

export default DataVisualization;
