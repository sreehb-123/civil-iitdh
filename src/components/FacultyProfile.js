import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // or pass documentId as prop

export default function FacultyProfile() {
  //const { documentId } = useParams(); // If you're using React Router
  // OR, if not using router: pass documentId as a prop to the component

  const documentId = "xtbcl55dj7wi98zr1ey42vl2";

  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!documentId) return;
    const API_URL = `http://localhost:1337/api/faculties/${documentId}?populate=*`;
    axios
      .get(API_URL)
      .then((res) => {
        setFaculty(res.data.data || null);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [documentId]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (!faculty)
    return (
      <div className="text-center py-8 text-red-600">Faculty not found.</div>
    );

  // const {
  //   name,
  //   role,
  //   researchInterests, // Could be an array or comma-separated string
  //   email,
  //   address,
  //   imageUrl,
  // } = faculty;

  // If researchInterests is a string, convert to array
  // const researchList = Array.isArray(faculty.researchInterests)
  //   ? faculty.researchInterests
  //   : typeof faculty.researchInterests === "string"
  //   ? faculty.researchInterests.split(",").map((item) => item.trim())
  //   : [];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10 px-2">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full flex flex-col items-center">
        <img
          src={faculty.imageUrl}
          alt={faculty.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-200 mb-6"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/160?text=No+Image";
          }}
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-1 text-center">{faculty.name}</h2>
        <div className="text-lg text-indigo-600 font-medium mb-4 text-center">{faculty.role}</div>
        <div className="w-full mb-6">
          <div className="font-semibold text-gray-700 mb-1">Research Interests</div>
          <ul className="list-disc list-inside text-gray-600">
            {faculty.researchInterests.length > 0
              ? faculty.researchInterests.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item.string}
                  </li>
                ))
              : <li className="italic text-gray-400">No interests listed</li>
            }
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div>
            <span className="font-semibold text-gray-700">Email: </span>
            <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:underline">{faculty.email}</a>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Address: </span>
            <span className="text-gray-600">{faculty.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}