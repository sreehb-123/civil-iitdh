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
        <div className="flex flex-col gap-8 w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-10">
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
  );
};

export default Cea;