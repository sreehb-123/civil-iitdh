import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";

// Utility: for scroll background change
function useNavbarScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

const navLinks = [
  { label: "About", to: "/#about" },
  {
    label: "People",
    dropdown: [
      { label: "Faculty", to: "/faculties" },
      { label: "PhD Students", to: "/phd" },
      { label: "Staff", to: "/staff" }
    ]
  },
  {
    label: "Academics",
    dropdown: [
      { label: "Programs", to: "/programs" },
      { label: "DUGC", to: "/dugc" },
      { label: "DPGC", to: "/dpgc" }
    ]
  },
  {
    label: "Facilities",
    dropdown: [
      { label: "Teaching Labs", to: "/teaching-labs" },
      { label: "Research Labs", to: "/research-labs" },
      { label: "Computational Labs", to: "/c-labs" }
    ]
  },
  { label: "CEA", to: "/cea" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Research", to: "/research" },
  { label: "Consultancy", to: "/consultancy" },
  { label: "Donate", to: "/donate" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const scrolled = useNavbarScrolled();

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-40 transition-colors duration-300
        bg-[#89288f]/95 shadow 
        py-1.5 min-h-[46px]
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[#faa519] font-bold text-2xl transition-colors duration-300">
            <i className="fas fa-home"></i>
          </span>
        </Link>
        {/* Toggler */}
        <button
          className="lg:hidden p-2 border border-[#A6A6A8] rounded-md text-gray-200 focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((item, idx) =>
            item.dropdown ? (
              <li key={item.label} className="relative group">
                <button
                  className={`
                    nav-link px-3 py-1.5 rounded-lg font-bold text-[1.2rem] transition-all duration-300
                    text-[#E8E9F3] hover:text-[#faa519] hover:scale-110
                  `}
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 inline ml-1" />
                </button>
                {/* Dropdown */}
                <ul
                  className={`
                    absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg min-w-[180px] border-0
                    opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition
                    pointer-events-none z-40
                    ${openDropdown === idx ? "opacity-100 pointer-events-auto" : ""}
                  `}
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.dropdown.map((drop) => (
                    <li key={drop.to}>
                      <Link
                        to={drop.to}
                        className={`
                          dropdown-item block px-5 py-2 text-[#272635] text-[1.1rem] font-normal relative whitespace-nowrap
                          transition-all duration-200 hover:scale-110
                          before:absolute before:bottom-0 before:left-2 before:h-0.5 before:bg-[#faa519] before:w-0 before:transition-all before:duration-300
                          hover:before:w-[80%]
                        `}
                        style={{
                          transition: "transform 0.2s ease-in-out"
                        }}
                      >
                        {drop.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`
                    nav-link px-3 py-1.5 rounded-lg font-bold text-[1.2rem] transition-all duration-300
                    text-[#E8E9F3] hover:text-[#faa519] hover:scale-110
                  `}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      {/* Mobile Nav */}
        <div
        className={`
            lg:hidden fixed top-16 left-0 w-full z-40 transition-all duration-300
            ${mobileOpen ? "max-h-[800px] opacity-100 py-4 px-3" : "max-h-0 opacity-0 overflow-hidden px-3"}
        `}
        >
        <ul className="flex flex-col gap-0 bg-white divide-y divide-gray-200 shadow-lg rounded-b-xl">
            {navLinks.map((item, idx) =>
                item.dropdown ? (
                    <li key={item.label}>
                        <details className="group">
                            <summary className="flex items-center justify-between px-4 py-3 text-black text-[1.1rem] cursor-pointer hover:bg-gray-50 rounded">
                            {item.label}
                            <ChevronDown className="w-4 h-4 group-open:rotate-180 transition" />
                            </summary>
                            <ul className="pl-4 flex flex-col">
                            {item.dropdown.map((drop) => (
                                <li key={drop.to} className="border-t border-gray-100 last:border-b">
                                <Link
                                    to={drop.to}
                                    className="block px-6 py-3 rounded text-black hover:bg-gray-50"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {drop.label}
                                </Link>
                                </li>
                            ))}
                            </ul>
                        </details>
                    </li>
                ) : (
                    <li key={item.to}>
                        <Link
                            to={item.to}
                            className="block px-4 py-3 text-black text-[1.1rem] hover:bg-gray-50 rounded"
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </li>
                )
            )}
        </ul>
        </div>
    </nav>
  );
}