import React, { useState, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import videoFile from '../assets/videoBackground.mp4';

// Skeleton components as above...
function SidebarSkeleton() {
  return (
    <ul>
      {[1, 2, 3, 4].map(n => (
        <li key={n} className="flex items-center gap-3 px-4 py-3 my-2 rounded-xl bg-gray-200 animate-pulse">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </li>
      ))}
    </ul>
  );
}

function MainSkeleton() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl">
      {[1, 2].map(n => (
        <div key={n} className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 bg-gray-100 rounded-xl shadow-lg animate-pulse">
          <div className="w-36 h-36 rounded-lg bg-gray-300" />
          <div className="flex-1 mt-3 sm:mt-0">
            <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
            <div className="h-4 w-56 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EquipmentImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-48 h-48">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        width={150}
        height={150}
        className={`w-48 h-48 object-cover rounded-lg transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={e => { e.target.src = "https://via.placeholder.com/150?text=No+Image"; setLoaded(true); }}
      />
    </div>
  );
}

const ResearchLabs = () => {
  const [activeLab, setActiveLab] = useState(null);
  const [labsData, setLabsData] = useState([]);
  const [sidebarOpenTeach, setSidebarOpenTeach] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    fetch("/research-labs.json")
      .then((response) => response.json())
      .then((data) => setLabsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const loading = labsData.length === 0;

  return (
    <div className="min-h-screen bg-[#f4f4f9] flex flex-col pt-10">
      {/* Sidebar Toggle Button (mobile only) */}
      <button
        className="fixed top-6 left-4 z-30 md:hidden bg-[#89288f] hover:bg-[#faa519] text-white p-3 text-2xl rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-[#faa519] transition"
        onClick={() => setSidebarOpenTeach(!sidebarOpenTeach)}
        aria-label="Toggle Sidebar"
      >
        <FaArrowCircleRight />
      </button>

      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-6 px-3 md:px-6">
        {/* Sidebar */}
        <aside
          className={`
            bg-[#e8e9f3] p-5 rounded-xl shadow-xl h-screen md:h-[80vh] mt-2 md:mt-0
            md:w-1/4 w-11/12 max-w-xs fixed md:relative z-20 top-0 left-0 transition-all duration-300
            ${sidebarOpenTeach ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          `}
        >
          <h3 className="text-2xl font-extrabold text-center mb-4 tracking-wide text-[#89288f]">
            RESEARCH LABS
          </h3>
          {loading ? <SidebarSkeleton /> : (
            <ul className="list-none p-0 m-0">
              {labsData.map((lab) => (
                <li
                  key={lab.id}
                  tabIndex={0}
                  className={`
                    flex items-center gap-3 px-4 py-3 my-2 cursor-pointer rounded-xl border border-transparent
                    bg-[#89288f] text-white transition-all duration-200 ring-2 ring-transparent
                    hover:bg-[#faa519] hover:text-[#272635] hover:ring-[#faa519] outline-none
                    ${activeLab === lab.id ? "bg-[#faa519] text-[#272635] font-bold ring-[#faa519]" : ""}
                  `}
                  onClick={() => {
                    setActiveLab(lab.id);
                    setSidebarOpenTeach(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveLab(lab.id);
                      setSidebarOpenTeach(false);
                    }
                  }}
                >
                  <img
                    src={lab.image}
                    alt={`${lab.name} icon`}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                    loading="lazy"
                    onError={e => { e.target.src = "https://via.placeholder.com/40?text=No+Image"; }}
                  />
                  <span className="text-base">{lab.name}</span>
                </li>
              ))}
            </ul>
          )}
        </aside>

        {/* Sidebar overlay for mobile */}
        {sidebarOpenTeach && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
            onClick={() => setSidebarOpenTeach(false)}
          />
        )}

        {/* Lab Details */}
        <main className="bg-white rounded-xl shadow-xl px-4 py-6 w-full md:w-3/4 min-h-[60vh] overflow-y-auto flex flex-col items-center">
          {loading ? (
            <MainSkeleton />
          ) : activeLab ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#89288f] drop-shadow-sm">
                {labsData.find(lab => lab.id === activeLab)?.name}
              </h2>
              <div className="flex flex-col gap-4 w-full max-w-3xl">
                {labsData.find(lab => lab.id === activeLab)?.equipment.map((item, idx) => {
                  const isOpen = expandedItem === idx;
                  return (
                    <div
                      key={idx}
                      className="p-4 bg-[#f8f9fa] rounded-xl shadow-lg cursor-pointer transition-all"
                    >
                      {/* Header (always visible) */}
                      <div
                        className="flex justify-between items-center"
                        onClick={() => setExpandedItem(isOpen ? null : idx)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setExpandedItem(isOpen ? null : idx);
                          }
                        }}
                        tabIndex={0}
                      >
                        <h3 className="text-[#89288f] text-lg md:text-xl font-semibold">
                          {item.name}
                        </h3>
                        <span className="text-[#272635] font-bold text-xl">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>

                      {/* Content (only visible when expanded) */}
                      {isOpen && (
                        <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                          <EquipmentImage src={item.image} alt={item.name} />
                          <p className="text-[#272635] text-sm md:text-base">
                            {item.specifications}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center w-full h-80">
              <video autoPlay muted loop className="rounded-lg shadow-xl max-w-full max-h-100 object-cover">
                <source src={videoFile} type="video/mp4" />
                Your browser doesn't support the video tag
              </video>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ResearchLabs;