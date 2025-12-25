import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RAiPDF from "./RAiPDF";

const API_URL =
  `${process.env.REACT_APP_STRAPI_URL}/faculties?sort=name&fields[0]=name&fields[1]=role&fields[2]=imageUrl&fields[3]=personalUrl&fields[4]=isHOD`;

export default function FacultyCards() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper function to remove common prefixes for sorting
  const cleanNameForSort = (name) => {
    return name
      .replace(/^(prof\.|professor|dr\.|doctor|associate|assistant|post.*doc)/gi, "")
      .trim();
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        let facultyList = res.data.data || [];
        
        // Separate HOD and non-HOD faculties
        const hodFaculty = facultyList.filter(f => f.isHOD);
        const regularFaculties = facultyList.filter(f => !f.isHOD);
        
        // Sort non-HOD faculties by cleaned name
        regularFaculties.sort((a, b) => {
          const cleanA = cleanNameForSort(a.name);
          const cleanB = cleanNameForSort(b.name);
          return cleanA.localeCompare(cleanB);
        });
        
        // Combine: HOD first, then sorted regular faculties
        const sortedFaculties = [...hodFaculty, ...regularFaculties];
        setFaculties(sortedFaculties);
        console.log(sortedFaculties);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-14 sm:pt-16 pb-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Faculty</h2>
      
      {/* HOD Card - displayed separately if exists */}
      {faculties.length > 0 && faculties[0]?.isHOD && (
        <div className="w-full max-w-6xl px-4 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Head of Department</h3>
            <div className="flex-grow border-t-2 border-gray-300"></div>
          </div>
          <div className="flex justify-center">
            {(() => {
              const hod = faculties[0];
              const { name, role, imageUrl, personalUrl, documentId } = hod;

              const Wrapper = ({ children }) =>
                personalUrl ? (
                  <a
                    href={personalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    {children}
                  </a>
                ) : (
                  <Link to={`/facultyPage/${documentId}`} className="no-underline">
                    {children}
                  </Link>
                );

              return (
                <Wrapper>
                  <div
                    className="
                      bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 
                      p-8 flex flex-col items-center group
                      h-full min-h-[320px] w-full max-w-sm
                      border-t-4 border-[#faa519]
                    "
                  >
                    <img
                      src={imageUrl}
                      alt={name}
                      className="
                        w-40 h-40 border-2 border-gray-200 rounded-full object-cover 
                        group-hover:scale-105 transition-transform
                      "
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/160?text=No+Image";
                      }}
                    />
                    <div className="mt-4 text-center flex flex-col justify-between flex-grow">
                      <div className="text-2xl font-bold text-gray-800 leading-tight line-clamp-2">
                        {name}
                      </div>
                      <div className="text-[#faa519] text-lg font-semibold mt-2 line-clamp-2">
                        {role}
                      </div>
                    </div>
                  </div>
                </Wrapper>
              );
            })()}
          </div>
        </div>
      )}

      {/* Regular Faculty Grid */}
      <div className="w-full max-w-6xl px-4">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-gray-800">Faculty</h3>
          <div className="flex-grow border-t-2 border-gray-300"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {faculties.slice(faculties[0]?.isHOD ? 1 : 0).map((fac) => {
            const { name, role, imageUrl, personalUrl, documentId } = fac;

            const Wrapper = ({ children }) =>
              personalUrl ? (
                <a
                  href={personalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  {children}
                </a>
              ) : (
                <Link to={`/facultyPage/${documentId}`} className="no-underline">
                  {children}
                </Link>
              );

            return (
              <Wrapper key={documentId}>
                <div
                  className="
                    bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 
                    p-6 flex flex-col items-center group
                    h-full min-h-[280px] border-t-4 border-[#faa519]
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
                      e.target.src =
                        "https://via.placeholder.com/128?text=No+Image";
                    }}
                  />
                  <div className="mt-4 text-center flex flex-col justify-between flex-grow">
                    <div className="text-xl font-semibold text-gray-800 leading-tight line-clamp-2">
                      {name}
                    </div>
                    <div className="text-[#faa519] text-sm font-medium mt-1 line-clamp-2">
                      {role}
                    </div>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>

      {/* RA/iPDF Section */}
      <div className="w-full max-w-6xl mx-auto px-4 mt-16 mb-10">
        <RAiPDF />
      </div>
    </div>
  );
}