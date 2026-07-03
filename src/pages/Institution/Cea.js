import Carousel from "../../components/Common/Carousel";
import Alerts from "../../components/Common/Alerts";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaEnvelope,
  FaFutbol,
  FaLaptopCode,
  FaLinkedin,
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaUserFriends,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

const slides = [{ img: "/carousel_images/cea.JPG" }];

const alertsData = [
  { title: "CEA orientation and onboarding updates", link: "#" },
  { title: "Upcoming expert talk announcements", link: "#" },
  { title: "Workshop registration information", link: "#" },
  { title: "Student activity and event highlights", link: "#" },
  { title: "Faculty interaction session notices", link: "#" },
];

const activityCards = [
  {
    title: "Technical Seminars & Expert Talks",
    icon: FaChalkboardTeacher,
    summary:
      "Sessions by industry leaders and professionals highlighting emerging trends, challenges, and career opportunities in civil and infrastructure engineering.",
  },
  {
    title: "Software Workshops",
    icon: FaLaptopCode,
    summary:
      "Hands-on training in widely used engineering tools and platforms like STAAD.Pro, AutoCAD, and other domain-relevant software.",
  },
  {
    title: "Informal Faculty Interactions",
    icon: FaUserFriends,
    summary:
      "Candid discussions with faculty members sharing their personal journeys, research insights, and career experiences.",
  },
  {
    title: "Celebration of Key Days",
    icon: FaCalendarAlt,
    summary:
      "Events on Engineers' Day, Teachers' Day, World Water Day, and other occasions to promote awareness and engagement.",
  },
  {
    title: "Intra-Departmental Events",
    icon: FaFutbol,
    summary:
      "Sports meets, quizzes, and technical contests that encourage collaboration, creativity, and camaraderie among students.",
  },
  {
    title: "Site Visits",
    icon: FaProjectDiagram,
    summary:
      "Educational trips to infrastructure projects and construction sites for real-world exposure to field practices and challenges.",
  },
];

const contactLinks = [
  {
    label: "YouTube",
    value: "Civil Engineering Association",
    href: "https://www.youtube.com/@CivilengineeringAssociation",
    icon: FaYoutube,
    accent: "text-red-600",
  },
  {
    label: "LinkedIn",
    value: "CEA IIT Dharwad",
    href: "https://www.linkedin.com/company/105620229/admin/dashboard/",
    icon: FaLinkedin,
    accent: "text-blue-700",
  },
  {
    label: "Email",
    value: "cea@iitdh.ac.in",
    href: "mailto:cea@iitdh.ac.in",
    icon: FaEnvelope,
    accent: "text-[#89288f]",
  },
  {
    label: "Location",
    value: "Department of Civil & Infrastructure Engineering",
    href: "https://iitdh.ac.in",
    icon: FaMapMarkerAlt,
    accent: "text-[#faa519]",
  },
];

const Cea = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 pb-10 pt-14 sm:pt-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] items-stretch">
          <div className="min-w-0">
            <Alerts data={alertsData} heading="What's New" />
          </div>

          <div className="min-w-0">
            <div className="carousel-home-container h-full">
              <Carousel slides={slides} />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] items-stretch">
          <aside className="min-w-0 h-full">
            <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">
                  Connect
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">
                  Contact Us
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Reach out to the Civil Engineering Association to stay updated on events, workshops, and opportunities within the department.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {contactLinks.map((link) => {
                  const LinkIcon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="group flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50/80 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#faa519]/30 hover:bg-white hover:shadow-[0_12px_24px_rgba(39,38,53,0.08)]"
                    >
                      <span className={`mt-0.5 ${link.accent}`}>
                        <LinkIcon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          {link.label}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-6 text-gray-800 transition-colors group-hover:text-[#89288f]">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-auto pt-6">
                <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-[#f8f4ff] p-4 shadow-[0_12px_30px_rgba(39,38,53,0.08)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f]">
                      <FaUsers className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        CEA Logo
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-dashed border-[#89288f]/20 bg-white p-4">
                    <img
                      src="/cea-logo.png"
                      alt="CEA Logo"
                      className="mx-auto h-24 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="min-w-0 h-full">
            <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_18px_40px_rgba(39,38,53,0.08)] sm:p-6 lg:p-8">
              <div className="max-w-5xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">
                  About CEA
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">
                  Civil Engineering Association, IIT Dharwad
                </h2>
              </div>

              <div className="mt-5 space-y-5 text-gray-700">
                <p className="text-sm leading-7 sm:text-base">
                  <strong>Civil Engineering Association (CEA)</strong> at IIT Dharwad is a vibrant student-led body comprising undergraduate students, postgraduate scholars, and faculty members from the Department of Civil and Infrastructure Engineering. The association serves as a dynamic platform to foster professional development, peer-to-peer learning, and a strong sense of community within the department.
                </p>
                <p className="text-sm leading-7 sm:text-base">
                  CEA aims to bridge the gap between academic knowledge and real-world application by organizing various technical and cultural activities that enhance practical skills and professional awareness. Through regular interactions with industry professionals and subject matter experts, the association nurtures curiosity, builds networks, and encourages interdisciplinary thinking.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#89288f]">
                      Key Activities
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-gray-800 sm:text-3xl">
                      What CEA does
                    </h3>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {activityCards.map((activity) => {
                    const ActivityIcon = activity.icon;

                    return (
                      <article
                        key={activity.title}
                        className="group flex h-full min-h-[12rem] flex-col rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-[#f8f4ff] p-5 shadow-[0_12px_30px_rgba(39,38,53,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(39,38,53,0.12)]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faa519]/15 text-[#89288f] transition-transform duration-300 group-hover:scale-105">
                            <ActivityIcon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-lg font-bold text-gray-800">
                              {activity.title}
                            </h4>
                            <p className="mt-2 text-sm leading-7 text-gray-600">
                              {activity.summary}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50/80 p-5 text-sm leading-7 text-gray-700">
                CEA continues to evolve as a proactive and inclusive platform where learning extends beyond the classroom, inspiring future-ready civil engineers committed to innovation and sustainability.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cea;
