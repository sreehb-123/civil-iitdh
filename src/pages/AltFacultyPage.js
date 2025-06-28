import Timeline from '../components/Timeline';
import AltTeam from '../components/AltTeam';
import AltPub from '../components/AltPub';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import AltAct from '../components/AltAct';
import Teaching from '../components/Teaching';
import Projects from '../components/Projects';
import PublicationsArray from '../components/PublicationsArray';
import Awards from '../components/Awards';
import AltTeach from '../components/AltTeach';

const FacultyPage = () => {
    const [facultyData, setFacultyData] = useState({});

    useEffect(() => {
        const fetchFacultyData = async () => {
            try {
                const response = await axios.get("http://localhost:1337/api/faculties/xtbcl55dj7wi98zr1ey42vl2?populate=*");
                setFacultyData(response.data.data);
            } catch (err) {
                console.error('Error fetching faculty data ', err);
            }
        };

        fetchFacultyData();
    },[]);

    const researchInterests = facultyData.researchInterests || [];
    const teaching = facultyData.teaching || [];
    const awards = facultyData.awards || [];


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6">
            {/* Profile Section */}
            <section className="w-full max-w-5xl mx-auto mb-10">
                <div className="rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
                    <img
                        src={facultyData.imageUrl}
                        alt="Faculty"
                        className="w-40 h-40 rounded-full object-cover border-4 border-indigo-200 shadow-md"
                        onError={e => { e.target.src = "https://via.placeholder.com/160?text=No+Image"; }}
                    />
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">{facultyData.name}</h2>
                        <h4 className="text-xl text-indigo-600 font-semibold mb-3">{facultyData.role}</h4>
                        <p className="mb-2">
                            <span className="font-semibold">Address: </span>
                            <span>{facultyData.address?.length > 0 ? facultyData.address : "Address not available"}</span>
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Email: </span>
                            <a href={`mailto:${facultyData.email}`} className="text-blue-600 hover:underline">{facultyData.email}</a>
                        </p>
                        <div>
                            <h4 className="font-semibold mb-1 mt-4">Research Interests</h4>
                            {researchInterests.length > 0 ? (
                                <ul className="list-disc list-inside text-gray-700">
                                    {researchInterests.map((interest, index) => (
                                        <li key={index}>{interest.string}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="italic text-gray-400">No research interests listed.</p>
                            )}
                        </div>
                        {/* Social Links */}
                        {/* <div className="flex space-x-4 mt-4">
                            {facultyData.linkedin && (
                                <a href={facultyData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                            )}
                            {facultyData.googleScholar && (
                                <a href={facultyData.googleScholar} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">
                                    <i className="fab fa-google fa-2x"></i>
                                </a>
                            )}
                            {facultyData.researchGate && (
                                <a href={facultyData.researchGate} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800">
                                    <i className="fab fa-researchgate fa-2x"></i>
                                </a>
                            )}
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Sections */}
            <section id='edu-exp' className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-xl shadow-2xl p-6">
                    <h2 className='text-2xl font-bold mb-6 text-indigo-700'>Education & Experience</h2>
                    <Timeline data={facultyData.educationAndExperience}/>
                </div>
            </section>

            <section id='research-team' className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <h2 className='text-2xl font-bold mb-6 text-indigo-700'>Research Team</h2>
                    <AltTeam/>
                </div>
            </section>

            <section id="publications" className='w-full max-w-5xl mx-auto my-10'>
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <h2 className="text-2xl font-bold mb-6 text-indigo-700">Publications</h2>
                    <AltPub />
                </div>
            </section>

            

            <section id="prof-activities" className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <h2 className="text-2xl font-bold mb-6 text-indigo-700">Professional Activities</h2>
                    <AltAct />
                </div>
            </section>

            <section id="teaching" className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <h2 className="text-2xl font-bold mb-6 text-indigo-700">Teaching</h2>
                    <AltTeach data={teaching}/>
                </div>
            </section>

            <section id="awards" className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <h2 className="text-2xl font-bold mb-6 text-indigo-700">Awards & Honours</h2>
                    <AltTeach data={awards}/>
                </div>
            </section>

             {/*

            <section id='teaching' className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className='text-2xl font-bold mb-6 text-indigo-700'>Teaching</h2>
                    <Teaching teaching={teaching} isEditable={isEditable}/>
                </div>
            </section>

            <section id='projects' className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold mb-6 text-indigo-700">Projects</h2>
                    <Projects projects={projects} isEditable={isEditable}/>
                </div>
            </section>

            <section id="awards" className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold mb-6 text-indigo-700">Awards</h2>
                    <Awards awards={facultyData.awards} isEditable={isEditable}/>
                </div>
            </section> */}
        </div>
    );
};

export default FacultyPage;