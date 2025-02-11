import React, { useState } from "react";
import '../styles/TeachingLabs.css';

const TeachingLabs = () => {
  // Lab data
  const labs = [
    {
      id: 1,
      name: "Construction Materials Lab",
      image: "https://civil.iith.ac.in/wp-content/uploads/2016/05/1341404667_146579545_1-Pictures-of-Building-construction-materials-150x150.jpg",
      description: "Placeholder description for Construction Materials Lab.",
      equipment: [
        {
          name: "Placeholder Equipment 1",
          image: "https://placehold.co/150", // Replace with actual image
          specifications: "Specifications for placeholder equipment 1.",
        },
      ],
    },
    {
      id: 2,
      name: "Environmental Engineering Lab",
      image: "https://civil.iith.ac.in/wp-content/uploads/2016/05/civil_departmant_webpage_2014025025.jpg",
      description: "State-of-the-art facilities for environmental research.",
      equipment: [
        {
          name: "Portable Multimeter",
          image: "https://placehold.co/150", // Replace with actual image
          specifications: "Model: Multi(pH, CDC, DO, ORP)",
        },
        {
          name: "pH Liquid Probe",
          image: "https://placehold.co/150", // Replace with actual image
          specifications:
            "Range: 0 - 14 pH | Accuracy: ±0.02 pH | Electrode Type: Non-Refillable Gel",
        },
        {
          name: "Conductivity Probe",
          image: "https://placehold.co/150", // Replace with actual image
          specifications:
            "Range: Conductivity: 0.0 µS/cm - 200 mS/cm | TDS: 0.00 mg/L - 50.0 g/L as NaCl",
        },
        {
          name: "LDO Probe",
          image: "https://placehold.co/150", // Replace with actual image
          specifications:
            "Range: 0.05 - 20.0 mg/L, 1 - 200% saturation | Accuracy: ±0.1 mg/L from 0 to 8 mg/L, ±0.2 mg/L for greater than 8 mg/L | Resolution: 0.01/0.1 (5 digits max.)",
        },
        {
          name: "Turbidity Meter",
          image: "https://placehold.co/150", // Replace with actual image
          specifications:
            "Range: 0 to 1000 NTU | Light Source: Tungsten filament lamp | Measurement Method: Ratio turbidimetric determination using a primary Nephelometric light scatter signal (90°) to the transmitted light scatter signal | Accuracy: ±2% of reading plus stray light from 0 to 1000 NTU",
        },
        {
          name: "Power Module",
          image: "https://placehold.co/150", // Replace with actual image
          specifications:
            "To support Turbidity Meter | Power Requirement: 110-230 Vac, 50/60 Hz",
        },
        {
          name: "Jar Test Apparatus",
          image: "https://placehold.co/150", // Replace with actual image
          specifications:
            "Model: 1926 for 6 stirrers | Material: MS Body with SS Spindle | Speed: 10-300 RPM",
        },
        {
          name: "BOD Incubator",
          image: "https://placehold.co/150", // Replace with actual image
          specifications:
            "Double-walled chamber | Refrigeration with compressor, air-cooled condenser | Temperature Range: 5°C to 60°C | Chamber Size: 630 x 395 x 400 mm",
        },
        {
          name: "BOD Holder",
          image: "https://placehold.co/150", // Replace with actual image
          specifications:
            "BOD Bottle Storage Rack | Material: Epoxy-coated Steel | Capacity: 300 m",
        },        
      ],
    },
    {
      id: 3,
      name: "GeoTechnical Engineering Lab",
      image: "https://civil.iith.ac.in/wp-content/uploads/2016/05/civil_departmant_webpage_2014025022.jpg",
      description: "Placeholder description for Structural Engineering Lab.",
      equipment: [
        {
          name: "Placeholder Equipment 2",
          image: "https://placehold.co/150", // Replace with actual image
          specifications: "Specifications for placeholder equipment 2.",
        },
      ],
    },
  ];

  // State for active lab
  const [activeLab, setActiveLab] = useState(null);

  return (
    <div className="container mt-5 d-flex">
      {/* line (Left) */}
      <div className="line-sidebar">
        <h3 className="text-center mb-4">Teaching Labs</h3>
        <ul className="line-list">
          {labs.map((lab) => (
            <li
              key={lab.id}
              className={`line-item ${
                activeLab === lab.id ? "active" : ""
              }`}
              onClick={() => setActiveLab(lab.id)}
            >
              <img
                src={lab.image}
                alt={`${lab.name} icon`}
                className="lab-icon"
              />
              <span className="lab-name">{lab.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Lab Details (Right) */}
      <div className="lab-details flex-grow-1 p-4">
        {activeLab ? (
          <>
            <h2 className="text-center">
              {labs.find((lab) => lab.id === activeLab).name}
            </h2>
            {/* <p className="text-muted text-center">
              {labs.find((lab) => lab.id === activeLab).description}
            </p> */}

            <div className="equipment-list">
              {labs
                .find((lab) => lab.id === activeLab)
                .equipment.map((item, index) => (
                  <div key={index} className="equipment-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="equipment-image"
                    />
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
  );
};

export default TeachingLabs;