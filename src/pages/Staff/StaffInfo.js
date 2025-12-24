import { useEffect, useState } from "react";

const StaffInfo = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_STRAPI_URL}/staffs?populate=photo`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Staff data");
        }
        const data = await response.json();
        setStaff(data.data || []);
      } catch (err) {
        console.error("Error fetching Staff data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
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
        Staff Members
      </h1>
      {/* <p className="text-gray-600 text-center mb-12 max-w-2xl">
        Our dedicated team of professional staff supporting the department's
        academic and administrative operations.
      </p> */}

      {staff.length === 0 ? (
        <div className="flex justify-center items-center min-h-[40vh]">
          <span className="text-lg text-gray-500">No staff members found.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
          {staff.map((member) => {
            const imageUrl = getImageUrl(member.photo);
            const placeholderImage =
              "https://via.placeholder.com/160?text=No+Image";

            return (
              <div
                key={member.id}
                className="
                  bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300
                  p-6 flex flex-col items-center group h-full min-h-[320px]
                "
              >
                <img
                  src={imageUrl || placeholderImage}
                  alt={member.name || "Staff Member"}
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
                    <h3 className="text-xl font-semibold text-gray-800 leading-tight line-clamp-2 mb-2">
                      {member.name || "Name not available"}
                    </h3>

                    {member.designation && (
                      <p className="text-md text-gray-600 font-medium mb-2 line-clamp-2">
                        {member.designation}
                      </p>
                    )}
                  </div>

                  {member.email && (
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-md/2 text-[#faa519] hover:text-[#f89500] transition-colors duration-200
                        break-all underline
                      "
                    >
                      {member.email}
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

export default StaffInfo;
