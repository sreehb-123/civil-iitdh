import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import Carousel from "../components/Carousel";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import Alerts from "../components/Alerts";

const slides = [
        { img: "/carousel_images/IMG-20250614-WA0008.jpg"},
        { img: "/carousel_images/1.png", text: "Intra-Departmental Sports Event 2024-25" },
        { img: "/carousel_images/2.png", text: "Prof. Amarnath Hegde was nominated for the Prof. Satish Dhawan Young Engineers State Award in Engineering Sciences for 2023, instituted by the Government of Karnataka" },
        { img: "/carousel_images/3.png", text: "Our students Mr. Shubham Raj, Mr. Vivek Kumar, and Mr. Tanishq Singh have been awarded the prestigious Hyundai Hope Scholarship by Hyundai Motor India Foundation in collaboration with BharatCares for their innovative project Empowering Sustainable Mobility: Electrical Pavement for Smarter Cities."  },
        { img: "/carousel_images/4.png", text: "World Water Day 2025 Celebration held on 25th March with a session on Water Availability in West Flowing Rivers under Changing Climate featuring Dr. B. Venkatesh (Scientist G, NIH Belgaum) as Chief Guest"},
        { img: "/carousel_images/5.png", text: "World Water Day 2025 Celebration held on 25th March with a session on Water Availability in West Flowing Rivers under Changing Climate featuring Dr. B. Venkatesh (Scientist G, NIH Belgaum) as Chief Guest"},
        { img: "/carousel_images/6.png", text: "Launch of the Civil Engineering Association and the Inaugural Ceremony of the Hands-on Training Program on STAAD.Pro and RCDC, held from 4th to 6th October 2024." },
];

const alertsData = [
    { message: "New feature: Dark Mode now live!" },
    { message: "Scheduled maintenance: Sep 15, 12 AM - 2 AM" },
    { message: "50% discount on premium plans till end of month!" },
    { message: "Upcoming workshop: React Advanced Patterns - 20th Sep." },
    { message: "Office closed on 30th Sep for a public holiday." },
    { message: "New research published by faculty members." },
  ]

const Home = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_STRAPI_URL}/about?populate=*`)
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
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 pb-10">
      <div className="flex flex-col md:flex-row items-start">
        <div className="md:w-1/4">
          <Alerts data={alertsData} heading="Alerts & Updates"/>
        </div>

        <div className="md:w-3/4">
          <div className="carousel-home-container">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>

      <section id="about" className="py-10 bg-gray-100">
        <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-3">
          <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-4 sm:p-8">
            <div className="prose prose-slate max-w-none prose-sm sm:prose-base text-justify">
              {about.content && <BlocksRenderer content={about.content} />}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;