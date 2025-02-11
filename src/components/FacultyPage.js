import '../styles/Faculty.css';
import Timeline from './Timeline';
import ResearchTeam from './Team';
import Publications from './Publications';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import Logout from './Logout';
import ProfActivities from './ProfActivities';
import Teaching from './Teaching';
import Projects from './Projects';

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
    //const professionalActivities = facultyData.professionalActivities;
    const teaching = facultyData.teaching;
    const projects = facultyData.projects;
    const awards = facultyData.awards;
    const addlRole = facultyData.addlRole;

    // const handleSave = async (fieldType,editedData) => {
    //     try {
    //         console.log(editedData);

    //         const response = await axios.put("http://localhost:5000/api/update", {
    //             id,
    //             field: fieldType,
    //             editedData: editedData,
    //         });
    //         console.log("message:" , response.data.message);
    //         console.log(editedData);
    //     } catch (error) {
    //         console.error("Error saving data:", error);
    //     }
    // };

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
                            {/* <h2>{facultyData.name}</h2>
                            <h4>{facultyData.role}</h4> */}
                            <div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className='prof-container'>
                                {/* <h1>{facultyData.name}</h1> */}
                                <div className='prof-basic'>
                                    <h2>{facultyData.name}</h2>
                                    <h4>{facultyData.role}</h4>
                                    <ul>
                                        {addlRole?.map((resp,index)=>(
                                            <li key={index}>{resp}</li>
                                        ))}
                                    </ul>
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
                                    <h4>Research Interests:</h4>
                                    <ul>
                                        {researchInterests?.map((interest, index) => (
                                            <li key={index}>{interest}</li>
                                        ))}
                                    </ul>   
                                </div>

                                <Logout />
                                {/* <p>His work aims to bridge the gap between theoretical advancements and real-world applications in various domains.</p> */}
                            </div>
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
                        <h2 className='pb-4'>Research Team</h2>
                        <ResearchTeam data={facultyData.researchTeam}/>
                    </div>
                </section>


                <section id='publications'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Publications</h2>
                        <Publications data={facultyData.publications} isEditable={isEditable}/>
                    </div>
                </section>

                <section id="prof-activities">
                    <div className="my-5">
                        <h2 className="text-center pb-4">Professional Activities</h2>
                        <ProfActivities professionalActivities={facultyData.professionalActivities} isEditable={isEditable} />
                    </div>
                </section>

                {/* <section id="teaching">
                    <div className="my-5">
                        <h2 className="text-center pb-4">Teaching</h2>
                        {isEditable && <button className="btn btn-primary mb-3" onClick={() => handleAdd("teaching")}>Add</button>}
                        {teaching?.length > 0 ? (
                            <ul>
                                {teaching.map((teach, index) => (
                                    <li key={index}>
                                        {teach}
                                        {isEditable && (
                                            <button
                                                className="btn btn-link text-primary"
                                                onClick={() => handleEdit("teaching", index)}
                                            >
                                                Edit
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center">No teaching data available</p>
                        )}
                    </div>
                </section>

                <section id="projects">
                    <div className="my-5">
                        <h2 className="text-center pb-4">Projects</h2>
                        {isEditable && <button className="btn btn-primary mb-3" onClick={() => handleAdd("projects")}>Add</button>}
                        {projects?.length > 0 ? (
                            projects.map((project, index) => (
                                <div key={index}>
                                    <h3>
                                        {project.projectType}
                                        {isEditable && (
                                            <button
                                                className="btn btn-link text-primary"
                                                onClick={() => handleEdit("projects", index)}
                                            >
                                                Edit
                                            </button>
                                        )}
                                    </h3>
                                    <ul>
                                        {project.listOfProjects?.map((projectItem, item) => (
                                            <li key={item}>
                                                {projectItem}
                                                {isEditable && (
                                                    <button
                                                        className="btn btn-link text-primary"
                                                        onClick={() => handleEdit("projects", index, item)}
                                                    >
                                                        Edit
                                                    </button>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No projects data available</p>
                        )}
                    </div>
                </section>

                <section id="awards">
                    <div className="my-5">
                        <h2 className="text-center pb-4">Awards & Honors</h2>
                        {isEditable && <button className="btn btn-primary mb-3" onClick={() => handleAdd("awards")}>Add</button>}
                        {awards?.length > 0 ? (
                            <ul>
                                {awards.map((award, index) => (
                                    <li key={index}>
                                        {award}
                                        {isEditable && (
                                            <button
                                                className="btn btn-link text-primary"
                                                onClick={() => handleEdit("awards", index)}
                                            >
                                                Edit
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center">No awards & honors data available</p>
                        )}
                    </div>
                </section> */}

                {/*<section id='prof-activities'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Professional Activities</h2>
                        {professionalActivities?.map((activity,index) => (
                            <div key={index}>
                                <h4>{activity.headings}</h4>
                                <ul>
                                    {activity.activities?.map((act,actIndex) => (
                                        <li key={actIndex}>{act}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>*/}

                {/* <section id='teaching'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Teaching</h2>
                        <ul>
                            {teaching?.map((teach,index) => (
                                <li key={index}>{teach}</li>
                            ))}
                        </ul>
                    </div>
                </section> */}
                
                <section id='teaching'>
                    <div className='my-5'>
                        <h2 className='text-center pb-4'>Teaching</h2>
                        <Teaching teaching={teaching} isEditable={isEditable}/>
                    </div>
                </section>

                <section id='projects'>
                    <Projects projects={projects} isEditable={isEditable}/>
                </section>

                {/* <section id='projects'>
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
                </section> */}

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