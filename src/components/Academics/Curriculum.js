import { useState } from "react";
import data from './courses.json';

import { ChevronDown } from "lucide-react";

export default function Circulum() {
    const [semester, setSemester] = useState(1);
    const batches = Object.keys(data).sort((a, b) => b - a);
    const [batch, setBatch] = useState(batches[0]); // Future use

    const [open, setOpen] = useState(false);

    const circulum  = data[batch]?.courses || {};
    const semesterLinks = data[batch]?.links || {};

    return(
        <div className="max-w-5xl mx-auto p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    UG Curriculum
                </h2>

                {/* Custom Batch Dropdown */}
                {/* Batch Dropdown (Left-aligned, gray theme) */}
                {/* Batch Dropdown (gray dropdown menu) */}
                <div className="relative inline-block text-left">
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center justify-between w-44 sm:w-48 px-4 py-2 
                        rounded-xl font-medium bg-[#89288f]/10 border border-[#89288f]/30 text-[#89288f]
                        shadow-sm hover:bg-[#89288f]/20 focus:outline-none
                        transition-all duration-200"
                    >
                        Batch {batch}
                        <ChevronDown
                            size={18}
                            className={`ml-2 transition-transform duration-200 ${
                                open ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {open && (
                        <div
                            className="absolute left-0 mt-2 w-44 sm:w-48 bg-gray-100 border border-gray-300 
                            rounded-xl shadow-lg z-10 overflow-hidden animate-fadeIn"
                        >
                            {batches.map((batchItem) => (
                                <button
                                    key={batchItem}
                                    onClick={() => {
                                        setBatch(batchItem);
                                        setSemester(1);
                                        setOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 transition ${
                                        batchItem === batch
                                            ? "bg-gray-200 text-[#89288f]"
                                            : "hover:bg-gray-200"
                                    }`}
                                >
                                    {batchItem}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Tabs for semesters */}
            <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:justify-center mb-3">
                {Object.keys(circulum).map((sem) => (
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
                    {circulum[semester].map((course, idx) => (
                    <tr
                        key={idx}
                        className="border-b last:border-none hover:bg-gray-50"
                    >
                        <td className="px-4 py-2">{course.code ? course.code : " - "}</td>
                        <td className="px-4 py-2">{course.name}</td>
                        <td className="px-4 py-2">{course.credits === 0 ? "PP/NP" : course.credits}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            <div className="flex justify-end mt-8">
                <a
                    href={semesterLinks[semester]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#faa519]"
                >
                    Click here for course contents
                </a>
            </div>
        </div>
    );
}