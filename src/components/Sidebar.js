import { useEffect, useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaUsers,
  FaBookOpen,
  FaTasks,
  FaChalkboardTeacher,
  FaAward,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const sections = [
  { id: "profile", label: "Profile", icon: FaUser },
  { id: "edu-exp", label: "Education & Exp.", icon: FaGraduationCap },
  { id: "research-team", label: "Research Team", icon: FaUsers },
  { id: "publications", label: "Publications", icon: FaBookOpen },
  { id: "prof-activities", label: "Professional Activities", icon: FaTasks },
  { id: "teaching", label: "Teaching", icon: FaChalkboardTeacher },
  { id: "awards", label: "Awards & Honours", icon: FaAward },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640); // Tailwind 'sm'
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false);
    }
  };

  // Mobile: Floating hamburger button
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-inner flex sm:hidden">
      {sections.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => handleScroll(id)}
          className="flex-1 flex flex-col items-center py-2"
          title={label}
        >
          <Icon className="w-5 h-5 text-indigo-700" />
          {/* You can comment out the next line for icons-only */}
          <span className="text-[10px] mt-1">{label.replace(/ &.*|Honours/, '')}</span>
        </button>
      ))}
    </div>
    );
  }

  // Desktop: sidebar as before
  return (
    <nav
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`
        fixed left-0 top-0 h-full z-30 flex flex-col items-center
        transition-all duration-300 bg-white shadow-lg
        ${expanded ? "w-48" : "w-16"}
      `}
    >
      <div className="flex flex-col gap-4 mt-24 w-full">
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            className={`
              flex items-center gap-4 w-full px-4 py-2
              hover:bg-indigo-100 focus:bg-indigo-100 rounded-xl
              transition-colors
              ${expanded ? "justify-start" : "justify-center"}
            `}
            title={label}
          >
            <Icon className="w-6 h-6 text-indigo-700" />
            {expanded && (
              <span className="text-md font-medium text-gray-700">
                {label}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;