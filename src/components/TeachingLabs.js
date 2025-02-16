import React, { useState, useEffect } from "react";
import '../styles/TeachingLabs.css';
import { FaArrowCircleRight } from "react-icons/fa"; // Importing arrow icon


const TeachingLabs = () => {
  const [activeLab, setActiveLab] = useState(null);
  const [labsData, setLabsData] = useState([]);
  const [sidebarOpenTeach, setSidebarOpenTeach] = useState(false); // Sidebar toggle state

  useEffect(() => {
    fetch("/teaching-labs.json")
      .then((response) => response.json())
      .then((data) => setLabsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-5">
      {/* Sidebar Toggle Button (Only visible on small screens) */}
      <button className="sidebar-toggle-teach d-md-none" onClick={() => setSidebarOpenTeach(!sidebarOpenTeach)}>
      <FaArrowCircleRight />
      </button>

      <div className="content-wrapper-teach d-flex">
        {/* Sidebar */}
        <div className={`line-sidebar ${sidebarOpenTeach ? "open" : ""}`}>
          <h3 className="text-center mb-4">Teaching Labs</h3>
          <ul className="line-list">
            {labsData.map((lab) => (
              <li
                key={lab.id}
                className={`line-item ${activeLab === lab.id ? "active" : ""}`}
                onClick={() => {
                  setActiveLab(lab.id);
                  setSidebarOpenTeach(false); // Close sidebar when a lab is selected on mobile
                }}
              >
                <img src={lab.image} alt={`${lab.name} icon`} className="lab-icon" />
                <span className="lab-name">{lab.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lab Details Section */}
        <div className="lab-details flex-grow-1 p-4">
          {activeLab ? (
            <>
              <h2 className="text-center">{labsData.find((lab) => lab.id === activeLab).name}</h2>
              <div className="equipment-list">
                {labsData.find((lab) => lab.id === activeLab).equipment.map((item, index) => (
                  <div key={index} className="equipment-item">
                    <img src={item.image} alt={item.name} className="equipment-image" />
                    <div className="equipment-details">
                      <h3>{item.name}</h3>
                      <p>{item.specifications}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-muted">Select a lab from the list to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeachingLabs;
