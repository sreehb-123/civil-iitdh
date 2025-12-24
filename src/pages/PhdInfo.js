import { useEffect, useState } from "react";

const PhdInfo = () => {
  const [phds, setPhds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhds = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_STRAPI_URL}/phds?populate=photo`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch PhD data");
        }
        const data = await response.json();
        setPhds(data.data || []);
      } catch (err) {
        console.error("Error fetching PhD data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhds();
  }, []);

  const getImageUrl = (photoField) => {
    if (!photoField || !photoField.url) return null;
    
    if (photoField.url.startsWith("http")) {
      return photoField.url;
    }
    
    // Remove /api from REACT_APP_STRAPI_URL to get the /strapi base path
    const baseUrl = process.env.REACT_APP_STRAPI_URL.replace(/\/api$/, '');
    return `${baseUrl}${photoField.url}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center pt-20">
        <span className="text-lg font-medium text-gray-600">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center pt-20">
        <span className="text-lg text-red-600">Error: {error}</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        PhD Students
      </h1>
      {/* <p className="text-gray-600 text-center mb-12 max-w-2xl">
        Meet our doctoral researchers working on cutting-edge problems in civil
        and infrastructure engineering.
      </p> */}

      {phds.length === 0 ? (
        <div className="flex justify-center items-center min-h-[40vh]">
          <span className="text-lg text-gray-500">No PhD students found.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
          {phds.map((phd) => {
            const imageUrl = getImageUrl(phd.photo);
            const placeholderImage =
              "https://via.placeholder.com/160?text=No+Image";

            return (
              <div
                key={phd.id}
                className="
                  bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300
                  p-6 flex flex-col items-center group h-full min-h-[360px]
                "
              >
                <img
                  src={imageUrl || placeholderImage}
                  alt={phd.name || "PhD Student"}
                  className="
                    w-32 h-32 border-2 border-gray-200 rounded-full object-cover
                    group-hover:scale-105 transition-transform duration-300
                  "
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />

                <div className="mt-6 text-center flex flex-col justify-between flex-grow w-full">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight line-clamp-3 mb-2">
                      {phd.name || "Name not available"}
                    </h3>

                    {phd.rollNo && (
                      <p className="text-md text-gray-400 font-medium mb-3">
                        {phd.rollNo}
                      </p>
                    )}

                    {phd.researchArea && (
                      <p className="text-sm text-gray-600 font-medium mb-4 line-clamp-3">
                        {phd.researchArea}
                      </p>
                    )}
                  </div>

                  {phd.email && (
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${phd.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-md/2 text-[#faa519] hover:text-[#f89500] transition-colors duration-200
                        break-all underline
                      "
                    >
                      {phd.email}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PhdInfo;
