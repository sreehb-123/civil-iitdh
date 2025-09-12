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

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 overflow-y-auto"
    style={{ height: "91vh" }}>
      {heading && (
        <h2 className="text-lg font-bold mb-4 mt-3 " style={{ color: "#89288f" }}>
          {heading}
        </h2>
      )}
      
      <div className="flex flex-col space-y-3">
        {data.map((alert, idx) => (
          <div key={idx} className="p-3 rounded border-l-4"
               style={{ borderColor: "#faa519", backgroundColor: "#f9f9f9", color: "#000" }}>
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
}