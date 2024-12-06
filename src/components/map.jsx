import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip, TooltipProvider } from "react-tooltip"; 

const geoUrl =
  "https://path-to-geojson-file.geojson";

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  const data = {
    China: 98,
    USA: 0,
    India: 180,
    Brazil: 120,
    // Add more country data here
  };

  return (
    <TooltipProvider>
      <div className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Mandatory Minimum Length of Paid Maternity Leave
        </h2>

        {/* Tooltip Component */}
        <Tooltip id="map-tooltip" />

        <ComposableMap
          projectionConfig={{
            scale: 200,
          }}
          className="mx-auto rounded-lg shadow-lg"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.NAME;
                const leaveDays = data[countryName] || "No data";

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id="map-tooltip"
                    data-tooltip-content={`${countryName}: ${leaveDays} days`}
                    onClick={() => {
                      alert(`Clicked on ${countryName}`);
                    }}
                    style={{
                      default: {
                        fill: leaveDays === "No data" ? "#E5E7EB" : "#A7F3D0",
                        outline: "none",
                      },
                      hover: {
                        fill: "#10B981",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#065F46",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </TooltipProvider>
  );
};

export default WorldMap;
