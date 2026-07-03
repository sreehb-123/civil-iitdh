import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaAward, FaBookOpen, FaFlask, FaGraduationCap, FaLeaf, FaRoad, FaUserGraduate, FaUsers } from "react-icons/fa";
import "../styles/Home.css";
import Carousel from "../components/Common/Carousel";

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

const homeSidebarData = [
  {
    title: "Upcoming workshops & talks",
    link: "#",
  },
  {
    title: "PG admission updates",
    link: "#",
  },
  {
    title: "Students achievements",
    link: "#",
  },
  {
    title: "Faculty accomplishments",
    link: "#",
  },
  {
    title: "Research positions",
    link: "#",
  },
  {
    title: "Other news",
    link: "#",
  },
];

export const alertsData = [
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

const departmentStats = [
  {
    label: "Faculty",
    value: "9",
    icon: FaUsers,
  },
  {
    label: "PhD scholars",
    value: "30",
    icon: FaUserGraduate,
  },
  {
    label: "Research Grants",
    value: "10+",
    icon: FaFlask,
  },
  {
    label: "Publications",
    value: "250+",
    icon: FaBookOpen,
  },
  {
    label: "Patents",
    value: "5+",
    icon: FaAward,
  },
];

const aboutThrustAreas = [
  "Structural Engineering and Materials",
  "Net-Zero Energy-Efficient Infrastructures",
  "Transportation Engineering",
  "Geotechnical Engineering",
];

const missionPoints = [
  "Develop a curriculum based on the present and future challenges of civil infrastructure.",
  "Conduct impactful research to build a smart, sustainable and resilient civil infrastructure.",
  "Establish strong collaborations with civil engineering industries to address the challenges of built environment.",
  "Foster the potential of students to excel as future entrepreneurs in the construction industry.",
];

const aboutHighlights = [
  {
    title: "Founded in 2022",
    icon: FaAward,
    summary:
      "A young department with a strong academic foundation and a growing research culture at IIT Dharwad.",
  },
  {
    title: "B.Tech + Ph.D. Pathways",
    icon: FaGraduationCap,
    summary:
      "Comprehensive four-year undergraduate learning paired with advanced postgraduate research opportunities.",
  },
  {
    title: "Research-Ready Environment",
    icon: FaFlask,
    summary:
      "State-of-the-art laboratories and facilities that support real-world problem solving and innovation.",
  },
];

const Home = () => {
  const location = useLocation();
  const { height: navbarHeight } = useNavbarHeight();

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

  return (
    <div className="min-h-screen bg-gray-100 pb-10 overflow-x-hidden">
      <div className="home-shell container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-[clamp(320px,30vw,420px)_minmax(0,1fr)] gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Alerts Sidebar - Responsive */}
          <div className="min-w-0 order-2 lg:order-1">
            <div className="sticky top-4">
              <Alerts data={homeSidebarData} heading="News & Updates"/>
            </div>
          </div>

          {/* Carousel Section - Responsive */}
          <div className="min-w-0 order-1 lg:order-2">
            <div className="carousel-home-container">
              <Carousel slides={slides} />
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="py-10 bg-gray-100">
        <div className="home-shell container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">About</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl">Department of Civil and Infrastructure Engineering</h2>
            <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
              From towering skyscrapers and robust bridges to efficient water systems and next-generation transportation, civil and infrastructure engineering shapes our world. As climate challenges intensify and technology transforms the way and quality of life, the demand for smart, sustainable, climate-resilient, and energy-efficient infrastructure has never been more urgent. Realizing such infrastructures requires a multidisciplinary, cross-cutting approach that bridges traditional civil engineering with emerging technologies and innovative design strategies. A flexible interdisciplinary curriculum is key to preparing future civil engineers to tackle these challenges holistically, ensuring infrastructure that endures the test of time while embracing social, economic, and environmental sustainability.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {aboutHighlights.map((item) => {
              const ItemIcon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_12px_30px_rgba(39,38,53,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(39,38,53,0.12)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f] transition-transform duration-300 group-hover:scale-105">
                      <ItemIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">{item.summary}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
            <div className="max-w-5xl space-y-4 text-gray-700">
              <p className="text-sm leading-7 sm:text-base">
                Founded in 2022, the Department of Civil & Infrastructure Engineering at IIT Dharwad offers a comprehensive four-year B.Tech program that blends core civil engineering principles with modern advancements in sustainable energy-efficient construction, smart materials, and infrastructure resilience. At the postgraduate level, the department offers a Ph.D. program across diverse research areas as mentioned below. With state-of-the-art laboratories and cutting-edge research facilities, the department empowers its researchers to develop innovative, real-world solutions that drive progress in both industry and society.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {aboutThrustAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-[#f8f4ff] px-4 py-4 text-sm font-semibold text-gray-700 shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f]">
                  <FaBookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">Key Thrust Areas</p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">Research focus</h3>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {aboutThrustAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#faa519]/30 hover:bg-white hover:shadow-[0_12px_24px_rgba(39,38,53,0.08)]"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f]">
                  <FaUsers className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">Consultancy</p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">Industry engagement</h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
                The department actively collaborates with public and private sector organizations, providing consultancy services in the aforementioned domains, along with expertise in infrastructure design, construction management, and sustainability solutions. These engagements foster strong industry-academia partnerships while offering students valuable exposure to real-world challenges.
              </p>
            </section>
          </div>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f]">
                <FaLeaf className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">Vision</p>
                <h3 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">Leading civil and infrastructure engineering for a sustainable future</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
                  To be a global leader in civil and infrastructure engineering education and research, contributing to the sustainable development of society.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
            <div className="max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">Mission</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">What drives the department</h3>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {missionPoints.map((point, index) => (
                <article
                  key={point}
                  className="group rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-[#f8f4ff] p-5 shadow-[0_12px_30px_rgba(39,38,53,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(39,38,53,0.12)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-sm font-bold text-[#89288f] transition-transform duration-300 group-hover:scale-105">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm leading-7 text-gray-700">{point}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>
      </section>

      <section className="py-6 bg-gray-100">
        <div className="home-shell container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="department-stats-grid">
            {departmentStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article key={stat.label} className="department-stat-card">
                  <div className="department-stat-icon">
                    <Icon />
                  </div>
                  <div>
                    <div className="department-stat-value">{stat.value}</div>
                    <h3 className="department-stat-label">{stat.label}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;