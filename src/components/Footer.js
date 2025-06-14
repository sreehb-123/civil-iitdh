import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleLoginNav = () => {
    navigate('/login');
  };

  return (
    <footer className="bg-[#89288f] text-white pt-6 pb-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          {/* Department & College Name */}
          <div className="md:w-1/3 w-full footer-section text-left">
            <h5 className="text-[#faa519] font-bold mb-2 text-xl">Civil & Infrastructure Engineering</h5>
            <p className="mb-1">Indian Institute of Technology Dharwad</p>
            <p className="text-sm leading-tight">
              Walmi Campus, Belur Industrial Area,<br />
              Near High Court, PB Road,<br />
              Dharwad, Karnataka – 580011, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3 w-full footer-section text-left">
            <h5 className="text-[#faa519] font-bold mb-2 text-xl">Quick Links</h5>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              <li><a href="/" className="text-white text-base hover:text-[#faa519] transition">Home</a></li>
              <li><a href="/faculties" className="text-white text-base hover:text-[#faa519] transition">Faculty</a></li>
              <li><a href="/staff" className="text-white text-base hover:text-[#faa519] transition">Staff</a></li>
              <li><a href="/teaching-labs" className="text-white text-base hover:text-[#faa519] transition">Teaching Labs</a></li>
              <li><a href="/research-labs" className="text-white text-base hover:text-[#faa519] transition">Research Labs</a></li>
              <li><a href="/computational-labs" className="text-white text-base hover:text-[#faa519] transition">Computational Labs</a></li>
            </ul>
          </div>

          {/* Contact Us with Icons and Button beside */}
          <div className="md:w-1/3 w-full footer-section flex flex-col items-start">
            <h5 className="text-[#faa519] font-bold mb-2 text-xl">Contact Us</h5>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#faa519] text-lg" />
                <a href="mailto:department@example.com" className="text-white hover:text-[#faa519] transition">department@example.com</a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#faa519] text-lg" />
                <span>+91 98765 43210</span>
              </div>
              <button
                className="mt-2 px-7 py-2 rounded-lg bg-[#faa519] text-[#e8e9f3] font-semibold text-base hover:bg-[#d28a15] transition self-start"
                onClick={handleLoginNav}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
        <hr className="border-[#faa519] my-3" />
        <div className="text-center text-xs pb-2">
          © {new Date().getFullYear()} <span className="font-bold text-[#faa519]">Civil & Infrastructure Engineering, IIT Dharwad</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
