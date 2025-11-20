import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useState, useEffect } from "react";
import axios from "axios";
import Circulum from '../components/Circulum';

const AcadPrograms = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_STRAPI_URL}/program?populate=*`)
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
    <div className="sidepage-container min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Undergraduate Program
        </h1>
        <div className="flex flex-col gap-8 w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 border border-gray-200 prose prose-slate max-w-none prose-sm sm:prose-base">
            <BlocksRenderer content={content.UgProgram} />
            <Circulum />
            {/* <BlocksRenderer content={content.PgProgram} /> */}
          </div>
        </div>
    </div>
  );
};

export default AcadPrograms;
