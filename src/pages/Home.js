import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import Carousel from "../components/Carousel";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Home = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/about?populate=*")
      .then((res) => {
        setAbout(res.data.data); // NO ".attributes" here!
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch about data", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!about) return <div>Failed to load data.</div>;

  return (
    <div>
      <div className="carousel-home-container">
        <Carousel />
      </div>

      <section id="about" className="py-10 bg-gray-100">
        <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-3">
          <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-4 sm:p-8">
            <div className="prose prose-slate max-w-none prose-sm sm:prose-base">
              {about.content && <BlocksRenderer content={about.content} />}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;