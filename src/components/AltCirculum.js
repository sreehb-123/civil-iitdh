import { useState } from "react";

export default function AltCirculum() {
  // ✅ Mock data (replace with Strapi data later)
  const curriculum = {
    1: [
      { code: "CE101", name: "Engineering Mechanics", credits: 4 },
      { code: "MA101", name: "Calculus", credits: 3 },
      { code: "PH101", name: "Physics", credits: 3 },
    ],
    2: [
      { code: "CE201", name: "Strength of Materials", credits: 4 },
      { code: "MA201", name: "Linear Algebra", credits: 3 },
    ],
    3: [
      { code: "CE301", name: "Fluid Mechanics", credits: 4 },
      { code: "CE302", name: "Surveying", credits: 3 },
    ],
    4: [
      { code: "CE401", name: "Structural Analysis", credits: 4 },
      { code: "CE402", name: "Geotechnical Engg", credits: 3 },
    ],
    5: [
      { code: "CE501", name: "Design of Concrete Structures", credits: 4 },
      { code: "CE502", name: "Transportation Engg", credits: 3 },
    ],
    6: [
      { code: "CE601", name: "Hydrology & Irrigation", credits: 4 },
      { code: "CE602", name: "Foundation Engineering", credits: 3 },
    ],
    7: [
      { code: "CE701", name: "Design of Steel Structures", credits: 4 },
      { code: "CE702", name: "Environmental Engg", credits: 3 },
    ],
    8: [
      { code: "CE801", name: "Project Work", credits: 6 },
      { code: "CE802", name: "Elective - I", credits: 3 },
    ],
  };

  const [openSems, setOpenSems] = useState([]);

  const toggleSemester = (sem) => {
    setOpenSems((prev) =>
      prev.includes(sem) ? prev.filter((s) => s !== sem) : [...prev, sem]
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Civil Engineering Curriculum
      </h1>

      <div className="space-y-4">
        {Object.keys(curriculum).map((sem) => {
          const semNum = Number(sem);
          const isOpen = openSems.includes(semNum);

          return (
            <div
              key={semNum}
              className="border rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggleSemester(semNum)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="font-semibold">Semester {semNum}</span>
                <span className={`transform transition ${isOpen ? "rotate-90" : ""}`}>
                  ▶
                </span>
              </button>

              {/* Content */}
              {isOpen && (
                <div className="p-4 bg-white shadow-2xl">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-gray-700">
                        <th className="px-4 py-2">Course Code</th>
                        <th className="px-4 py-2">Course Name</th>
                        <th className="px-4 py-2">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {curriculum[semNum].map((course, idx) => (
                        <tr
                          key={idx}
                          className="border-b last:border-none hover:bg-gray-50"
                        >
                          <td className="px-4 py-2">{course.code}</td>
                          <td className="px-4 py-2">{course.name}</td>
                          <td className="px-4 py-2">{course.credits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}