import facultyImg from '../assets/intro-1587390568.jpg';
import '../styles/Faculty.css';
import Timeline from './Timeline';
import ResearchTeam from './Team';
import Publications from './Publications';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FacultyPage = () => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [facultyData,setFacultyData] = useState([]);
    const [error,setError] = useState(null);

    const { id } = useParams();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const fetchFacultyData = async() => {
            try {
                const response = await axios.get(`http://localhost:5000/api/faculty/${id}`);
                setFacultyData(response.data);
            } catch (err) {
                console.error('Error fetching faculty data ', err);
                setError(err);
            }
        };

        fetchFacultyData();
    },[id]);
    
    const researchInterests = facultyData.researchInterests;
    const professionalActivities = facultyData.professionalActivities;
    const teaching = facultyData.teaching;
    const projects = facultyData.projects;
    const awards = facultyData.awards;

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
                            <h1>{facultyData.name}</h1>
                                <h2 className='text-center'>Research Interests:</h2>
                                <ul>
                                    {researchInterests?.map((interest, index) => (
                                        <li key={index}>{interest}</li>
                                    ))}
                                </ul>
                                <p>His work aims to bridge the gap between theoretical advancements and real-world applications in various domains.</p>
                        </div>
                    </div>
                </div>


                <section id='edu-exp'>
                    <div className="my-5 text-center">
                        <h2>Education & Experience</h2>
                        <Timeline data={facultyData.educationAndExperience}/>
                    </div>
                </section>

                <section id='research-team'>
                    <div className='my-5 text-center'>
                        <ResearchTeam data={facultyData.researchTeam}/>
                    </div>
                </section>


                <section id='publications'>
                    <div className='my-5'>
                        <Publications data={facultyData.publications} />
                    </div>
                </section>

                <section id='prof-activities'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Professional Activities</h2>
                        {professionalActivities?.map((activity,index) => (
                            <div key={index}>
                                <h3>{activity.headings}</h3>
                                <ul>
                                    {activity.activities?.map((act,actIndex) => (
                                        <li key={actIndex}>{act}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section id='teaching'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Teaching</h2>
                        <ul>
                            {teaching?.map((teach,index) => (
                                <li key={index}>{teach}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section id='projects'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Projects</h2>
                        {projects?.map((project,index) => (
                            <div key={index}>
                                <h3>{project.projectType}</h3>
                                <ul>
                                    {project.listOfProjects?.map((projectItem,item) => (
                                        <li key={item}>{projectItem}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section id='awards'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Awards & Honors</h2>
                        <ul>
                            {awards?.map((award,index) => (
                                <li key={index}>{award}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FacultyPage;