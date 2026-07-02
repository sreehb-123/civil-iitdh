import { useState } from "react";
import { FaBookOpen, FaChevronDown, FaFlask, FaLayerGroup, FaRulerCombined, FaShieldAlt, FaTree } from "react-icons/fa";

const researchAreas = [
  {
    title: "Structural Engineering and Materials",
    icon: FaRulerCombined,
  },
  {
    title: "Net-Zero Energy-Efficient Infrastructures",
    icon: FaShieldAlt,
  },
  {
    title: "Transportation Engineering",
    icon: FaLayerGroup,
  },
  {
    title: "Geotechnical Engineering",
    icon: FaFlask,
  },
  {
    title: "Water Resources Engineering",
    icon: FaTree,
  },
];

const admissionCategories = {
  fullTime: [
    {
      title: "Teaching Assistantship (TA)",
      detail: "Funded by the Ministry of Education (MoE), Government of India, the TAs are expected to assist in the academic/administrative work for the smooth functioning of the Institute. Students under this category are entitled to financial support as per the MoE norms.",
    },
    {
      title: "Project Staff-Teaching/Research Assistantship through Project (TAP/PA)",
      detail: "Funded from projects sponsored by industries and government funding agencies. Under this category, candidates will be paid fellowship as per the rules & regulations of the governing project.",
    },
    {
      title: "Govt./Semi Govt. Fellowship Awardee (FA)",
      detail: "The financial support under this category is provided by various Government / Semi-Government schemes (for example, CSIR, UGC, DAE, DST, DBT, NBHM, etc.) and some other organizations. A valid Junior Research fellowship (JRF) award letter from the Government/ Semi-Government agencies (e.g. CSIR / UGC / DAE / DST / DBT / NBHM / (confirmed) DST INSPIRE, etc.) is required for the execution of this fellowship.",
    },
    {
      title: "Sponsored Candidates (SF)",
      detail: "This is a full-time Ph.D. admission category where the candidates are fully funded by their parent organisation. They are not eligible for any financial support from the institute (IIT Dharwad).",
    },
    {
      title: "Foreign (International) Students (FS)",
      detail: "International students having a valid sponsorship/ fellowship. INTERNATIONAL STUDENTS are required to register and apply through the Study In India portal (https://studyinindia.gov.in/).",
    },
  ],
  partTime: [
    {
      title: "External Category (EX)",
      detail: "The candidates employed in recognized R&D organizations with at least two years of work experience in the relevant area and desirous of pursuing Ph.D. program while in employment may apply for admission as external candidates. Persons working in colleges/universities are not eligible under this category. After fulfilling the coursework requirement at the Institute, these candidates will be allowed to register for Ph.D. with a Supervisor (internal) from the Institute and a Co-supervisor (external) from their parent organization where they will be doing the research work.",
    },
    {
      title: "College Teacher (CT)",
      detail: "Teachers from the AICTE/UGC approved colleges in the vicinity of IIT Dharwad with a minimum of 2 years of work experience can apply in this category. After fulfilling the coursework requirement at the Institute, these candidates will be allowed to register for Ph.D.",
    },
    {
      title: "Institute Staff (IS)",
      detail: "A permanent employee of IIT Dharwad with 2.5 years of continuous service is eligible to apply for a PhD position under this category subject to the institute norms.",
    },
    {
      title: "Quality Improvement Program (QIP)",
      detail: "The Government of India launched the Quality Improvement Programme in 1970. One of the main objectives of the programme is to upgrade the expertise and capabilities of the faculty members of the degree and diploma level institutions in the country. The programme is implemented and monitored by All India Council for Technical Education.",
    },
  ],
};

const phdButtons = [
  {
    label: "Apply Now",
    href: "https://www.iitdh.ac.in/phd",
    external: true,
  },
  {
    label: "Modes of Entry",
    href: "/pdfs/Mode of Entry.pdf",
    external: false,
  },
  {
    label: "Phd Rulebook",
    href: "public/pdfs/PhD Rulebook _Rulebook_27Jul25.pdf",
    external: false,
  },
];

const ExpandableCard = ({ title, icon: Icon, detail, open, onClick, compact = false }) => (
  <button
    type="button"
    onClick={onClick}
    className={`group w-full rounded-3xl border bg-white p-5 text-left shadow-[0_12px_30px_rgba(39,38,53,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(39,38,53,0.12)] ${
      open ? "border-[#89288f]/35 ring-1 ring-[#faa519]/35" : "border-gray-200"
    } ${compact ? "min-h-[7.5rem]" : "min-h-[9rem]"}`}
  >
    <div className="flex items-start gap-4">
      {Icon ? (
        <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f] transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-5 w-5" />
        </div>
      ) : (
        <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f] transition-transform duration-300 group-hover:scale-105">
          <FaBookOpen className="h-5 w-5" />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-gray-800 sm:text-lg">{title}</h3>
          <span className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-transform duration-300 ${open ? "border-[#89288f] bg-[#89288f] text-white rotate-180" : "border-[#faa519] bg-[#faa519]/10 text-[#89288f]"}`}>
            <FaChevronDown className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
          <div className="overflow-hidden">
            <div className="rounded-2xl bg-[#f8f4ff] px-4 py-3 text-sm leading-7 text-gray-700">
              {detail}
            </div>
          </div>
        </div>
      </div>
    </div>
  </button>
);

const TitleCard = ({ title, icon: Icon }) => (
  <div className="group w-full rounded-3xl border border-gray-200 bg-white p-5 text-left shadow-[0_12px_30px_rgba(39,38,53,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(39,38,53,0.12)] min-h-[7.5rem]">
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f] transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-gray-800 sm:text-lg">{title}</h3>
      </div>
    </div>
  </div>
);

const Phd = () => {
  const [openFullTime, setOpenFullTime] = useState("");
  const [openPartTime, setOpenPartTime] = useState("");

  return (
    <div className="sidepage-container min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="text-center text-3xl font-bold text-gray-800 sm:text-4xl">
          Ph.D. Program
        </h1>
        <div className="mt-6 space-y-8">
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
            <div className="mx-auto max-w-5xl space-y-4 text-gray-700">
              <p className="text-sm leading-7 sm:text-base">
                At the postgraduate level, the department currently offers a <strong>Ph.D. program</strong> covering a broad spectrum of research areas, including:
              </p>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {researchAreas.map((area) => {
                  const AreaIcon = area.icon;

                  return (
                    <TitleCard
                      key={area.title}
                      title={area.title}
                      icon={AreaIcon}
                    />
                  );
                })}
              </div>

              <p className="text-sm leading-7 sm:text-base">
                With access to state-of-the-art laboratories and cutting-edge research facilities, scholars at the department are well-equipped to pursue innovative research that addresses real-world challenges and contributes meaningfully to industry and society.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-8">
            <div className="max-w-5xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">Admission Categories</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">Full Time</h2>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {admissionCategories.fullTime.map((item) => {
                const open = openFullTime === item.title;

                return (
                  <ExpandableCard
                    key={item.title}
                    title={item.title}
                    detail={item.detail}
                    open={open}
                    onClick={() => setOpenFullTime(open ? "" : item.title)}
                  />
                );
              })}
            </div>

            <div className="mt-8 max-w-5xl">
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Part Time</h2>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {admissionCategories.partTime.map((item) => {
                const open = openPartTime === item.title;

                return (
                  <ExpandableCard
                    key={item.title}
                    title={item.title}
                    detail={item.detail}
                    open={open}
                    onClick={() => setOpenPartTime(open ? "" : item.title)}
                  />
                );
              })}
            </div>
          </section>

          <section className="px-0 py-2 sm:py-3">
            <div className="grid gap-4 md:grid-cols-3">
              {phdButtons.map((button) => (
                <a
                  key={button.label}
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noreferrer noopener" : undefined}
                  className="inline-flex min-h-[4.25rem] items-center justify-center rounded-2xl border border-gray-200 bg-gray-100/70 px-5 py-4 text-center text-base font-semibold text-[#89288f] shadow-[0_10px_24px_rgba(39,38,53,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#faa519]/30 hover:bg-white/80 hover:text-[#6f2274] hover:shadow-[0_16px_34px_rgba(39,38,53,0.1)]"
                >
                  {button.label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Phd;