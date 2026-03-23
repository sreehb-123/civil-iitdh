import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../../components/Common/Carousel";
import Alerts from "../../components/Common/Alerts";

const slides = [
        { img: "/carousel_images/cea.JPG"},
];

const alertsData = [
    { message: "New feature: Dark Mode now live!" },
    { message: "Scheduled maintenance: Sep 15, 12 AM - 2 AM" },
    { message: "50% discount on premium plans till end of month!" },
    { message: "Upcoming workshop: React Advanced Patterns - 20th Sep." },
    { message: "Office closed on 30th Sep for a public holiday." },
];

const Cea = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_STRAPI_URL}/cea?populate=*`)
      .then((res) => {
        setContent(res.data.data); // If your API changes, adjust accordingly
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch about data", err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <span className="text-lg font-medium text-gray-500">Loading...</span>
    </div>
  );
  if (!content) return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <span className="text-lg text-red-500">Failed to load data.</span>
    </div>
  );

  // If "programs" is an array, map over it. If it's a single rich text, just render.
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 pb-10">
        {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        CEA
        </h1> */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-1/4">
            <Alerts data={alertsData} heading="What's New"/>
          </div>
  
          <div className="md:w-3/4">
            <div className="carousel-home-container">
              <Carousel slides={slides} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-start w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto mt-10">
          <div className="md:w-1/3 w-full">
            <div className="bg-white shadow-xl rounded-xl p-5 sm:p-6 border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>

              <div className="grid grid-cols-1 gap-4">
                <a
                  href="https://www.youtube.com/@CivilengineeringAssociation"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  <span className="text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                      <path d="M23.498 6.186a2.995 2.995 0 0 0-2.11-2.116C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.57A2.995 2.995 0 0 0 .502 6.186C0 8.08 0 12 0 12s0 3.92.502 5.814a2.995 2.995 0 0 0 2.11 2.116c1.883.57 9.388.57 9.388.57s7.505 0 9.388-.57a2.995 2.995 0 0 0 2.11-2.116C24 15.92 24 12 24 12s0-3.92-.502-5.814ZM9.6 15.568V8.432L15.818 12 9.6 15.568Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">YouTube</p>
                    <p className="text-gray-800 font-medium">Civil Engineering Association</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/company/105620229/admin/dashboard/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  <span className="text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                      <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.119 20.452H3.56V9h3.559v11.452zM5.339 7.433a2.06 2.06 0 1 1 0-4.119 2.06 2.06 0 0 1 0 4.119zM20.452 20.452h-3.558v-5.569c0-1.328-.027-3.037-1.851-3.037-1.852 0-2.136 1.447-2.136 2.94v5.666H9.35V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <p className="text-gray-800 font-medium">CEA IIT Dh</p>
                  </div>
                </a>

                <a
                  href="mailto:cea@iitdh.ac.in"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  <span className="text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5v9a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 16.5v-9m19.5 0A2.25 2.25 0 0 0 19.5 5.25h-15A2.25 2.25 0 0 0 2.25 7.5m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.92l-7.5 4.687a2.25 2.25 0 0 1-2.36 0l-7.5-4.687a2.25 2.25 0 0 1-1.07-1.92V7.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800 font-medium">cea@iitdh.ac.in</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 w-full">
            {content.ceaContent ? (
              <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 border border-gray-200 prose prose-slate max-w-none prose-sm sm:prose-base">
                <BlocksRenderer content={content.ceaContent} />
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow p-6 text-gray-500 text-center">
                No program content available.
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Cea;