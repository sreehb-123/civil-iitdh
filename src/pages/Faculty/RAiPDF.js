import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = `${process.env.REACT_APP_STRAPI_URL}/ra-ipdfs?sort=name`;

export default function RAiPDF() {
  const [raData, setRaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setRaData(res.data.data || []);
        console.log("RA/iPDF Data:", res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching RA/iPDF data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;

  if (raData.length === 0) {
    return <div className="text-center py-8 text-gray-500">No RA/iPDF data available.</div>;
  }

  return (
    <>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-gray-800">RA/iPDF</h2>
        <div className="flex-grow border-t-2 border-gray-300"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {raData.map((ra) => {
          const { documentId, name, email, imageUrl, phd, mentor, areasOfInterest } = ra;

          return (
            <div
              key={documentId}
              className="
                bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 
                p-6 flex flex-col items-center group
                h-full min-h-[380px]
              "
            >
              <img
                src={imageUrl}
                alt={name}
                className="
                  w-32 h-32 border-2 border-gray-200 rounded-full object-cover 
                  group-hover:scale-105 transition-transform
                "
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/128?text=No+Image';
                }}
              />
              <div className="mt-4 text-center flex flex-col justify-between flex-grow w-full">
                <div>
                  <div className="text-xl font-semibold text-gray-800 leading-tight line-clamp-2">
                    {name}
                  </div>
                  
                  <div className="mt-3 text-sm text-gray-700 space-y-2">
                    <div>
                      <span className="font-semibold text-gray-800">Email:</span>{" "}
                      <a
                        href={`mailto:${email}`}
                        className="text-[#faa519] hover:underline break-words"
                      >
                        {email}
                      </a>
                    </div>

                    {phd && (
                      <div>
                        <span className="font-semibold text-gray-800">PhD:</span>{" "}
                        <span className="text-gray-700">{phd}</span>
                      </div>
                    )}

                    {mentor && (
                      <div>
                        <span className="font-semibold text-gray-800">Mentor:</span>{" "}
                        <span className="text-gray-700">{mentor}</span>
                      </div>
                    )}

                    {areasOfInterest && (
                      <div>
                        <span className="font-semibold text-gray-800">Areas of Interest:</span>{" "}
                        <span className="text-gray-700 break-words">{areasOfInterest}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
