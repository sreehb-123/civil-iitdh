import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "http://localhost:1337/api/faculties?sort=name&fields[0]=name&fields[1]=role&fields[2]=imageUrl";

export default function FacultyCards() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setFaculties(res.data.data || []);
        console.log(faculties);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Faculty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4">
        {faculties.map((fac) => {
        //   const { name, role, imageUrl } = fac.attributes;
          return (
            <div
              key={fac.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center group"
            >
              <img
                src={fac.imageUrl}
                alt={fac.name}
                className="w-32 h-32 border-2 border-gray-200 rounded-full object-cover group-hover:scale-105 transition-transform"
                onError={e => { e.target.src = "https://via.placeholder.com/128?text=No+Image"; }}
              />
              <div className="mt-4 text-center">
                <div className="text-xl font-semibold text-gray-800">{fac.name}</div>
                <div className="text-[#faa519] text-sm font-medium mt-1">{fac.role}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}