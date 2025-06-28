import React, { useEffect, useState } from "react";
import axios from "axios";

const AltTeam = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:1337/api/faculties/xtbcl55dj7wi98zr1ey42vl2?populate[researchTeam][populate][0]=education"
                );
                setData(res.data?.data?.researchTeam || []);
            } catch (err) {
                setError("Could not fetch research team");
            } finally {
                setLoading(false);
            }
        };
        fetchTeam();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-32 text-gray-600">
                Loading research team…
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-32 text-red-500">
                {error}
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-32 text-gray-600">
                No research team data available.
            </div>
        );
    }

    return (
        <section id="research-team" className="my-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary-700 tracking-tight">
                    Research Team
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {data.map((member, index) => (
                        <div
                            className="bg-white rounded-2xl shadow-xl hover:scale-105 transition-scale duration-300 p-6 flex flex-col md:flex-row items-center"
                            key={index}
                        >
                            <div className="flex-shrink-0">
                                {/* Avatar or image here if needed */}
                            </div>
                            <div className="flex-1 md:ml-8 mt-6 md:mt-0 w-full">
                                <h4 className="text-2xl font-semibold text-primary-800 mb-2">{member.name}</h4>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-medium">Email:</span> {member.email}
                                </p>
                                <div className="mb-2">
                                    <span className="font-medium text-gray-700">Education:</span>
                                    <ul className="ml-5 list-disc">
                                        {member.education?.map((edu, eduIndex) => (
                                            <li key={eduIndex} className="text-gray-600">
                                                <span className="font-semibold">{edu.degreeOrRole}</span>{" "}
                                                <span className="italic">{edu.description}</span>{" "}
                                                <span className="text-gray-500">({edu.duration})</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {member.linkedinUrl && (
                                    <a
                                        href={member.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`LinkedIn Profile of ${member.name}`}
                                        className="inline-block mt-2 text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.795-1.75-1.732s.784-1.732 1.75-1.732c.966 0 1.75.795 1.75 1.732s-.784 1.732-1.75 1.732zm13.5 10.268h-3v-4.604c0-1.098-.021-2.508-1.529-2.508-1.53 0-1.765 1.197-1.765 2.43v4.682h-3v-9h2.881v1.228h.041c.401-.76 1.38-1.561 2.842-1.561 3.041 0 3.602 2.001 3.602 4.6v4.733z"/>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AltTeam;