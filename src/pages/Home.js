import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../styles/Home.css";
import Carousel from "../components/Common/Carousel";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import Alerts from "../components/Common/Alerts";
import { useNavbarHeight } from "../hooks/useNavbarHeight";

const slides = [
        { img: "/carousel_images/landing.jpeg"},
        { img: "/carousel_images/1.png", text: "Intra-Departmental Sports Event 2024-25" },
        { img: "/carousel_images/2.png", text: "Prof. Amarnath Hegde was nominated for the Prof. Satish Dhawan Young Engineers State Award in Engineering Sciences for 2023, instituted by the Government of Karnataka" },
        { img: "/carousel_images/3.png", text: "Our students Mr. Shubham Raj, Mr. Vivek Kumar, and Mr. Tanishq Singh have been awarded the prestigious Hyundai Hope Scholarship by Hyundai Motor India Foundation in collaboration with BharatCares for their innovative project Empowering Sustainable Mobility: Electrical Pavement for Smarter Cities."  },
        { img: "/carousel_images/4.png", text: "World Water Day 2025 Celebration held on 25th March with a session on Water Availability in West Flowing Rivers under Changing Climate featuring Dr. B. Venkatesh (Scientist G, NIH Belgaum) as Chief Guest"},
        { img: "/carousel_images/5.png", text: "World Water Day 2025 Celebration held on 25th March with a session on Water Availability in West Flowing Rivers under Changing Climate featuring Dr. B. Venkatesh (Scientist G, NIH Belgaum) as Chief Guest"},
        { img: "/carousel_images/6.png", text: "Launch of the Civil Engineering Association and the Inaugural Ceremony of the Hands-on Training Program on STAAD.Pro and RCDC, held from 4th to 6th October 2024." },
];

const alertsData = [
  {
    title: "Life Cycle and Transport Distance Sensitivity Analysis for the Practical Selection of Vertical Cutoff Walls",
    link: "https://ascelibrary.org/doi/full/10.1061/JHTRBP.HZENG-1638",
  },
  {
    title: "A Finite Difference Model for Heavy Metal Contaminant Transport in a Sand-Bentonite Cutoff Wall",
    link: "https://doi.org/10.1061/JHTRBP.HZENG-1572",
  },
  {
    title: "Effect of Glass-Fiber on Mechanical Performance and Microstructure of Bentonite-Fly Ash and Bentonite-Sand Mixes for Landfill Liner Application",
    link: "https://doi.org/10.1007/s10064-026-04808-3",
  },
  {
    title: "Study on Multiscale Evaluation of Moisture Resistance of a High-Performance Cold Stone Matrix Asphalt: An Extensive Laboratory Investigation",
    link: "https://doi.org/10.1016/j.conbuildmat.2026.145514",
  },
  {
    title: "Assessing Moisture Resistance of Calcium Lignosulphonate Modified Bitumen Through SFE, BBS, and ITS Approaches",
    link: "https://doi.org/10.1016/j.ijadhadh.2026.104305",
  },
  {
    title: "Effect of Various Fibers and Filler Materials on the Mechanical Performance of Stone Matrix Asphalt Mixtures",
    link: "https://doi.org/10.1061/JMCEE7.MTENG-21444",
  },
  {
    title: "Adhesion Characteristics of Natural Aggregate or Slag with Water Based Warm Mix Asphalt Modified Binder Using Surface Free Energy Method",
    link: "https://doi.org/10.1080/01694243.2025.2460645",
  },
  {
    title: "Macro-Micro-Nano Scale Investigation of Moisture Resistant Performance of Warm Asphalt Mixes Prepared with Different Asphalt Binder and Aggregate Types",
    link: "https://doi.org/10.1016/j.conbuildmat.2026.145115",
  },
  {
    title: "Sensitivity of Binder-Aggregate Compatibility, Rutting and Moisture Resistance Performance of Warm-Stone Matrix Asphalt Mixes in Dry and Wet Condition",
    link: "https://doi.org/10.1016/j.conbuildmat.2026.145112",
  },
  {
    title: "A Study on Influence of Carbon Curing on the Performance of Agro Biochar Based Geopolymer Mortars",
    link: "https://doi.org/10.1016/j.conbuildmat.2026.146072",
  },
  {
    title: "Valorisation of Clay Mine Waste as a Precursor for Low Carbon Alkali Activated Bricks",
    link: "https://doi.org/10.1016/j.jobe.2026.115643",
  },
  {
    title: "Assessing the Efficacy of Alkali-Activated Rice Husk Ash Amended Bauxite Residue Composites for Pavement Applications",
    link: "https://doi.org/10.1016/j.dibe.2026.100876",
  },
  {
    title: "Landslide Susceptibility Assessment of Western Ghats of Karnataka Region in India: A Case Study of Ankola Landslide",
    link: "https://doi.org/10.1016/j.ghm.2026.01.003",
  },
  {
    title: "Hybrid Approach for Landslide Susceptibility Mapping and Socio-Economic Landslide Risk Assessment in Meghalaya, India",
    link: "https://doi.org/10.1016/j.pes.2026.100207",
  },
  {
    title: "Engineering Soil, Water and Environment for Sustainable Infrastructure",
    link: "https://doi.org/10.1007/978-981-96-7552-4",
  },
];

const Home = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { height: navbarHeight } = useNavbarHeight();

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

  useEffect(() => {
    if (location.hash !== "#about") return;

    const scrollToAbout = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const top = aboutSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    };

    const frame = window.requestAnimationFrame(scrollToAbout);
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, navbarHeight]);

  if (loading) return <div>Loading...</div>;
  if (!about) return <div>Failed to load data.</div>;

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 px-3 sm:px-4 md:px-6 lg:px-8 pt-4">
        {/* Alerts Sidebar - Responsive */}
        <div className="w-full lg:w-1/4 order-2 lg:order-1">
          <div className="sticky top-4">
            <Alerts data={alertsData} heading="Journals"/>
          </div>
        </div>

        {/* Carousel Section - Responsive */}
        <div className="w-full lg:w-3/4 order-1 lg:order-2">
          <div className="carousel-home-container">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>

      {/* About Section - Fully Responsive */}
      <section id="about" className="py-10 bg-gray-100">
        <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-3">
          <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-4 sm:p-8">
            <div className="prose prose-slate max-w-none prose-sm text-justify">
              {about.content && <BlocksRenderer content={about.content} />}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;