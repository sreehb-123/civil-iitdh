import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <i className="fas fa-home"></i>
                </a>
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
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="peopleDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >People</a>
                            <ul className="dropdown-menu" aria-labelledby="peopleDropdown">
                                <li><a className="dropdown-item" href="#staff">Staff</a></li>
                                <li><a className="dropdown-item" href="/faculty">Faculty</a></li>
                                <li><a className="dropdown-item" href="#phd">PhD Students</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="acadDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >Academics</a>
                            <ul className="dropdown-menu" aria-labelledby="acadDropdown">
                                <li><a className="dropdown-item" href="#programs">Programs</a></li>
                                <li><a className="dropdown-item" href="#dugc">DUGC</a></li>
                                <li><a className="dropdown-item" href="#dpgc">DPGC</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="facilitiesDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >People</a>
                            <ul className="dropdown-menu" aria-labelledby="facilitiesDropdown">
                                <li><a className="dropdown-item" href="#t-labs">Teaching Labs</a></li>
                                <li><a className="dropdown-item" href="#r-labs">Research Labs</a></li>
                                <li><a className="dropdown-item" href="#c-labs">Computational Labs</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cea">CEA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sponsors">Sponsors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/research">Research</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/consultancy">Consultancy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/donate">Donate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;