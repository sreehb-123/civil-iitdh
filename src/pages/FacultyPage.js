import '../styles/Faculty.css';
import Timeline from '../components/Timeline';
import ResearchTeam from '../components/Team';
import Publications from '../components/Publications';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import ProfActivities from '../components/ProfActivities';
import Teaching from '../components/Teaching';
import Projects from '../components/Projects';
import PublicationsArray from '../components/PublicationsArray';
import Awards from '../components/Awards';
import '../styles/Headers.css';

const FacultyPage = () => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [facultyData,setFacultyData] = useState([]);
    const [isEditable,setIsEditable] = useState(false);

    const { id } = useParams();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const fetchFacultyData = async() => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/faculty/${id}`);
                setFacultyData(response.data);

                const auth = getAuth();
                const user = auth.currentUser;


                if(user?.email === response.data.email){
                    setIsEditable(true);
                }

            } catch (err) {
                console.error('Error fetching faculty data ', err);
            }
        };

        fetchFacultyData();
    },[id]);
    
    const researchInterests = facultyData.researchInterests;
    const teaching = facultyData.teaching;
    const projects = facultyData.projects;
    
    return (
        <div className="d-flex">
            <button className='sidebar-toggle' onClick={toggleSidebar}>
                <i className='fas fa-bars'></i>
            </button>
            <nav className={`bg-light sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#edu-exp" data-label="Education & Experience">
                            <i className="fas fa-graduation-cap"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#research-team" data-label="Research Team">
                            <i className="fas fa-users"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#publications" data-label="Publications">
                            <i className="fas fa-book"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#prof-activities" data-label="Professional Activities">
                            <i className="fas fa-briefcase"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#teaching" data-label="Teaching">
                            <i className="fas fa-chalkboard-teacher"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#projects" data-label="Projects">
                            <i className="fas fa-project-diagram"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sidebar-link" href="#awards" data-label="Awards">
                            <i className="fas fa-trophy"></i>
                        </a>
                    </li>
                    
                    <div className='quick-links'>
                        <a href={facultyData.linkedin} className="mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href={facultyData.googleScholar} className="mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-google fa-2x"></i>
                        </a>
                        <a href={facultyData.researchGate} className="mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-researchgate fa-2x"></i>
                        </a>
                    </div>

                </ul>
            </nav>

            <div className="main-content container-fluid">
                <div className="container my-4">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center">
                            <img
                                src={facultyData.image}
                                alt="Faculty"
                                className="mb-3"
                                style={{ width: '200px', height: '200px' }}
                            />
                            <div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className='prof-container'>
                                <div className='prof-basic'>
                                    <h2 className='name-header'>{facultyData.name}</h2>
                                    <h4>{facultyData.role}</h4>
                                    <p>
                                        <strong>Address: </strong>
                                        {facultyData.address?.length > 0 ? (
                                            <span>{facultyData.address}</span>
                                        ) : (
                                            <span>Address not available</span>
                                        )}
                                    </p>

                                </div>

                                <div className='research-interests'>
                                    <h4>Research Interests</h4>
                                    {researchInterests?.length > 0 ? (
                                        <ul>
                                        {researchInterests.map((interest, index) => (
                                            <li key={index}>{interest}</li>
                                        ))}
                                        </ul>
                                    ) : (
                                        <p>No research interests listed.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section id='edu-exp'>
                    <div className="my-5 text-center">
                        <h2 className='main-headers'>EDUCATION - EXPERIENCE</h2>
                        <Timeline data={facultyData.educationAndExperience}/>
                    </div>
                </section>

                <section id='research-team'>
                    <div className='my-5 text-center'>
                        <h2 className='pb-4 text-center main-headers'>RESEARCH TEAM</h2>
                        <ResearchTeam data={facultyData.researchTeam}/>
                    </div>
                </section>


                {facultyData.publicationsArray && facultyData.publicationsArray.length > 0 ? (
                    <section id="publications">
                        <div className="my-5">
                            <h2 className="text-center pb-4 main-headers">PUBLICATIONS</h2>
                            <PublicationsArray data={facultyData.publicationsArray} />
                        </div>
                    </section>
                ) : facultyData.publications && facultyData.publications.length > 0 ? (
                    <section id="publications">
                        <div className="my-5">
                            <h2 className="text-center pb-4 main-headers">PUBLICATIONS</h2>
                            <Publications data={facultyData.publications} isEditable={isEditable} />
                        </div>
                    </section>
                ) : null}


                <section id="prof-activities">
                    <div className="my-5">
                        <h2 className="text-center pb-4 main-headers">PROFESSIONAL ACTIVITIES</h2>
                        <ProfActivities professionalActivities={facultyData.professionalActivities} isEditable={isEditable} />
                    </div>
                </section>

                <section id='teaching'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4 main-headers'>TEACHING</h2>
                        <Teaching teaching={teaching} isEditable={isEditable}/>
                    </div>
                </section>

                <section id='projects'>
                    <div className="my-5">
                        <h2 className="text-center pb-4 main-headers">PROJECTS</h2>
                        <Projects projects={projects} isEditable={isEditable}/>
                    </div>
                </section>

                <section id="awards">
                    <Awards awards={facultyData.awards} isEditable={isEditable}/>
                </section>

            </div>
        </div>
    );
};

export default FacultyPage;