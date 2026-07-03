import { FaBuilding, FaCogs, FaEnvelope, FaHardHat, FaLeaf, FaRoad, FaRulerCombined, FaWater } from "react-icons/fa";

const consultancyAreas = [
  {
    title: "Structural Engineering",
    icon: FaRulerCombined,
    summary: "Consulting support for analysis, design, review, and structural assessment of civil infrastructure.",
  },
  {
    title: "Energy-Efficient / Net-Zero Buildings",
    icon: FaLeaf,
    summary: "Guidance on sustainable building design, operational efficiency, and low-carbon infrastructure strategies.",
  },
  {
    title: "Infrastructure Sustainability Assessments",
    icon: FaBuilding,
    summary: "Evaluation of infrastructure projects for environmental performance, resilience, and long-term value.",
  },
  {
    title: "Transportation Engineering",
    icon: FaRoad,
    summary: "Planning and technical inputs for mobility systems, roadway performance, and transport infrastructure.",
  },
  {
    title: "Geotechnical Engineering",
    icon: FaHardHat,
    summary: "Site investigations, soil-structure guidance, and foundation-related consultancy solutions.",
  },
  {
    title: "Water Resources Engineering",
    icon: FaWater,
    summary: "Support for hydrology, drainage, flood management, and water systems planning.",
  },
  {
    title: "Construction Management & Material Testing",
    icon: FaCogs,
    summary: "Advisory work for execution planning, quality control, and material testing support.",
  },
];

const Consultancy = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 pb-10 pt-14 sm:pt-16">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">Consultancy</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl">Consultancy Services</h1>
        </div>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
          <div className="mx-auto max-w-5xl space-y-4 text-gray-700">
            <p className="text-sm leading-7 sm:text-base">
              The Department of Civil and Infrastructure Engineering at IIT Dharwad actively engages in consultancy projects to provide technological expertise and innovative solutions to both public and private sector organizations. Through these consultancy services, the department contributes meaningfully to planning, designing, and implementing infrastructure projects that support sustainable development and societal well-being.
            </p>
            <p className="text-sm leading-7 sm:text-base">
              Our consultancy activities span a wide range of domains, including the areas listed below.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">Areas</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">Consultancy Domains</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {consultancyAreas.map((area) => {
              const AreaIcon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group min-h-[12rem] rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-[#f8f4ff] p-5 shadow-[0_12px_30px_rgba(39,38,53,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(39,38,53,0.12)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f] transition-transform duration-300 group-hover:scale-105">
                      <AreaIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-gray-800">{area.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600">{area.summary}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f]">
                <FaEnvelope className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">For Queries</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">Write to us</h2>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  Kindly write to the following email address for queries regarding consultancy services.
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=head.civil@iitdh.ac.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center rounded-2xl border border-[#89288f] bg-[#89288f] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(137,40,143,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6f2274]"
                >
                  head.civil@iitdh.ac.in
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Consultancy;