import { Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
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
                            <Link className="nav-link" to="/#about">About</Link>
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
                                <li><Link className="dropdown-item" to="/faculties">Faculty</Link></li>
                                <li><Link className="dropdown-item" to="#phd">PhD Students</Link></li>
                                <li><Link className="dropdown-item" to="#staff">Staff</Link></li>
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
                                <li><Link className="dropdown-item" to="#programs">Programs</Link></li>
                                <li><Link className="dropdown-item" to="#dugc">DUGC</Link></li>
                                <li><Link className="dropdown-item" to="#dpgc">DPGC</Link></li>
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
                                <li><Link className="dropdown-item" to="#t-labs">Teaching Labs</Link></li>
                                <li><Link className="dropdown-item" to="#r-labs">Research Labs</Link></li>
                                <li><Link className="dropdown-item" to="#c-labs">Computational Labs</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cea">CEA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sponsors">Sponsors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/research">Research</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/consultancy">Consultancy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/donate">Donate</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;