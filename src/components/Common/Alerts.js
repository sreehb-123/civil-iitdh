import { useEffect, useState } from "react";
import axios from "axios";

export default function Alerts({ data, heading }) {
  // Uncomment this when integrating with Strapi
  /*
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_STRAPI_URL}/alerts`)
      .then((res) => setAlerts(res.data.data))
      .catch((err) => console.error("Failed to fetch alerts", err));
  }, []);
  */

  const loopedData = [...data, ...data];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 overflow-hidden alerts-panel"
    style={{ height: "91vh" }}>
      {heading && (
        <h2 className="text-lg font-bold mb-4 mt-3 alerts-heading" style={{ color: "#89288f" }}>
          {heading}
        </h2>
      )}
      
      <div className="alerts-marquee">
        <div className="alerts-track">
          {loopedData.map((alert, idx) => (
            <a
              key={`${alert.link}-${idx}`}
              href={alert.link}
              target="_blank"
              rel="noreferrer noopener"
              className="alerts-item p-3 rounded border-l-4 block transition-transform hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderColor: "#faa519", backgroundColor: "#f9f9f9", color: "#000" }}
            >
              {alert.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}