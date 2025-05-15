import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/Navbar.css';


const Navbar = () => {
        useEffect(() => {
        const navLinks = document.querySelectorAll('.toggle-link');
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click(); // Simulate a click on the toggler to close it
                }
            });
        });

        

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', () => {
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                });
            });
        };
    }, []);


    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="navbar-container container">
                <Link className="navbar-brand" to="/">
                    <i className="fas fa-home"></i>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link toggle-link" to="/#about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle"
                                id="peopleDropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >People</button>
                            <ul className="dropdown-menu" aria-labelledby="peopleDropdown">
                                <li><Link className="dropdown-item toggle-link" to="/faculties">Faculty</Link></li>
                                <li><Link className="dropdown-item toggle-link" to="/phd">PhD Students</Link></li>
                                <li><Link className="dropdown-item toggle-link" to="/staff">Staff</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle"
                                id="acadDropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >Academics</button>
                            <ul className="dropdown-menu" aria-labelledby="acadDropdown">
                                <li><Link className="dropdown-item toggle-link" to="/programs">Programs</Link></li>
                                <li><Link className="dropdown-item toggle-link" to="/dugc">DUGC</Link></li>
                                <li><Link className="dropdown-item toggle-link" to="/dpgc">DPGC</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle"
                                id="facilitiesDropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >Facilities</button>
                            <ul className="dropdown-menu" aria-labelledby="facilitiesDropdown">
                                <li><Link className="dropdown-item toggle-link" to="/teaching-labs">Teaching Labs</Link></li>
                                <li><Link className="dropdown-item toggle-link" to="/research-labs">Research Labs</Link></li>
                                <li><Link className="dropdown-item toggle-link" to="/c-labs">Computational Labs</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link toggle-link" to="/cea">CEA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link toggle-link" to="/sponsors">Sponsors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link toggle-link" to="/research">Research</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link toggle-link" to="/consultancy">Consultancy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link toggle-link" to="/donate">Donate</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;