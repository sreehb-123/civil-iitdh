import { useState } from "react";

export default function Circulum() {
    const curriculum = {
        1: [
            { code: "CH102", name: "Fundamental Concepts & Applications of Chemistry", credits: 6 },
            { code: "MA101", name: "Calculus", credits: 9 },
            { code: "ME201", name: "Engineering Mechanics", credits: 6 },
            { code: "PH101", name: "Quantum Physics and Applications", credits: 6 },
            { code: "CS101", name: "Computer Programming", credits: 9 },
            { code: "HS106", name: "Design Thinking and Creativity", credits: 1 },
            { code: "NO101/NO103", name: "NSO/NSS", credits: 2 },
        ],
        2: [
            { code: "CE101", name: "Introduction to Civil Engineering", credits: 6 },
            { code: "CE301", name: "Environmental Studies", credits: 6 },
            { code: "MA201", name: "Linear Algebra & Differential Equations - I", credits: 9 },
            { code: "ME111", name: "Engineering Graphics Laboratory", credits: 5 },
            { code: "CS106", name: "Data Structures and Algorithms", credits: 6 },
            { code: "CS111", name: "Data Structures and Algorithms Laboratory", credits: 3 },
            { code: "ME113", name: "Hands on Engineering Laboratory", credits: 3 },
            { code: "NO102/NO104", name: "NSO/NSS", credits: 2 },
        ],
        3: [
            { code: "CE2XX", name: "Building Materials and Construction", credits: 6 },
            { code: "CE2XX", name: "Sustainable Infrastructure Planning", credits: 6 },
            { code: "ME203", name: "Fluid Mechanics", credits: 6 },
            { code: "ME222", name: "Mechanics of Materials", credits: 6 },
            { code: "HS201", name: "Economics", credits: 6 },
            { code: "CE2XX", name: "Construction Materials Laboratory", credits: 3 },
            { code: "CE2XX", name: "Building Drawing Practice", credits: 3 },
        ],
        4: [
            { code: "CE202", name: "Surveying and Geomatics", credits: 6 },
            { code: "CE205", name: "Structural Analysis", credits: 6 },
            { code: "CE206", name: "Water Resources Engineering", credits: 6 },
            { code: "CE212", name: "Surveying and Geomatics Laboratory", credits: 3 },
            { code: "CE2XX", name: "Hydraulics and Hydraulic Machinery", credits: 6 },
            { code: "ME224", name: "Fluid Mechanics Laboratory", credits: 3 },
            { code: "ME312", name: "Solid Mechanics Laboratory", credits: 3 },
        ],
        5: [
            { code: "CE302", name: "Design of Concrete Structures", credits: 6 },
            { code: "CE303", name: "Geotechnical Engineering", credits: 6 },
            { code: "CE304", name: "Transportation Engineering", credits: 6 },
            { code: "CE305", name: "Environmental Engineering", credits: 6 },
            { code: "CE311", name: "Transportation Engineering Laboratory", credits: 3 },
            { code: "CE312", name: "Geotechnical Engineering Laboratory", credits: 3 },
            { code: "CE313", name: "Environmental Engineering Laboratory", credits: 3 },
        ],
        6: [
            { code: "CE306", name: "Design of Steel Structures", credits: 6 },
            { code: "CE401", name: "Construction Engineering and Management", credits: 6 },
            { code: "CE308", name: "Foundation Engineering", credits: 6 },
            { code: "InstituteElective1/R&D", name: "Institute Elective - I / R&D Project in Civil Engineering", credits: 6 },
            { code: "CE3XX", name: "Sensors and Instrumentation in Civil Engineering Laboratory", credits: 3 },
            { code: "InstituteElective2", name: "Institute Elective - II", credits: 6 },
        ],
        7: [
            { code: "CE403", name: "Civil and Infrastructure Engineering Design", credits: 6 },
            { code: "CE402", name: "BTP-I / Intensive BTP-I", credits: 6 }, // 9 if Intensive
            { code: "CE309", name: "Estimation and Costing in Civil Engineering", credits: 6 },
            { code: "InstituteElective3/ProgramElective1", name: "Institute Elective - III / Program Elective - I", credits: 6 },
            { code: "InstituteElective4", name: "Institute Elective - IV", credits: 6 },
        ],
        8: [
            { code: "CE404", name: "BTP-II / Intensive BTP-II", credits: 6 }, // 9 if Intensive
            { code: "InstituteElective5/ProgramElective2", name: "Institute Elective - V / Program Elective - II", credits: 6 },
        ],
    };

    const semesterLinks = {
        1: "https://www.iitdh.ac.in/sites/default/files/2024-12/BTECH2024-Civil%20and%20Infrastructure%20Engineering-Semester%20I_v2.pdf",
        2: "https://www.iitdh.ac.in/sites/default/files/2024-09/BTECH2024-Civil%20and%20Infrastructure%20Engineering-Semester%20II.pdf",
        3: "https://www.iitdh.ac.in/sites/default/files/2024-09/BTECH2024-Civil%20and%20Infrastructure%20Engineering-Semester%20III.pdf",
        4: "https://www.iitdh.ac.in/sites/default/files/2024-09/BTECH2024-Civil%20and%20Infrastructure%20Engineering-Semester%20IV.pdf",
        5: "https://www.iitdh.ac.in/sites/default/files/2024-09/BTECH2024-Civil%20and%20Infrastructure%20Engineering-Semester%20V.pdf",
        6: "https://iitdh.ac.in/sites/default/files/2025-01/Semester%20VI.pdf",
        7: "https://www.iitdh.ac.in/sites/default/files/2024-12/BTECH2024-Civil%20and%20Infrastructure%20Engineering-Semester%20VII_v2.pdf",
        8: "https://www.iitdh.ac.in/sites/default/files/2024-09/BTECH2024-Civil%20and%20Infrastructure%20Engineering-Semester%20VIII.pdf",
    };


    const [semester, setSemester] = useState(1);

    return(
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">
                UG Curriculum
            </h1>

            {/* Tabs for semesters */}
            <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:justify-center mb-3">
                {Object.keys(curriculum).map((sem) => (
                <button
                    key={sem}
                    onClick={() => setSemester(Number(sem))}
                    className={`px-4 py-2 rounded-xl font-medium transition
                    ${
                        semester === Number(sem)
                        ? "bg-[#faa519] text-white shadow-md"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                    Sem {sem}
                </button>
                ))}
            </div>

            <div className="flex justify-end">
                <a
                    href={semesterLinks[semester]}
                    target="_blank"
                    rel="noopener nonreferrer"
                    className="text-[#faa519]"
                >
                    Click here for course contents
                </a>
            </div>

            {/* Table of courses */}
            <div className="bg-white rounded-xl shadow-2xl p-4 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                    <th className="px-4 py-2">Course Code</th>
                    <th className="px-4 py-2">Course Name</th>
                    <th className="px-4 py-2">Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {curriculum[semester].map((course, idx) => (
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
        </div>
    );
}