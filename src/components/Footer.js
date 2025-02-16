import React from "react";
import "../styles/Footer.css"; 
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  const handleLoginNav = () => {
    navigate('/login');
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          
          {/* Department & College Name */}
          <div className="col-md-4 footer-section">
            <h5>Civil & Infrastructure Engineering</h5>
            <p>Indian Institute of Technology Dharwad</p>
          </div>

          {/* Quick Links - Displayed in Grid */}
          <div className="col-md-4 footer-section quick-links">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/faculties">Faculty</a></li>
              <li><a href="#">Staff</a></li>
              <li><a href="/teaching-labs">Teaching Labs</a></li>
              <li><a href="#">Research Labs</a></li>
              <li><a href="#">Computational Labs</a></li>
            </ul>
          </div>

          {/* Contact Us with Icons */}
          <div className="col-md-4 footer-section contact-section">
            <h5>Contact Us</h5>
            <p><FaEnvelope /> department@example.com</p>
            <p><FaPhone /> +91 98765 43210</p>

            <button className='mt-4 login-btn' onClick={handleLoginNav}>LOGIN</button>

          </div>

        </div>

        <hr className="footer-divider" />

        {/* Designed & Developed by */}
        <div className="text-center">
          <p>Designed & Developed by <span className="developer-name">Sai Sreeharsha Bolloju</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;