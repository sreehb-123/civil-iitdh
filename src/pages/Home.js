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

      <section id="about" className="about-section">
        <div className="container my-5">
          {about.content && (
            <BlocksRenderer content={about.content} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;