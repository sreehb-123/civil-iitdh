import Timeline from '../../components/Common/Timeline';
import FacultyTeam from '../../components/Faculty/AltTeam';
import Publications from '../../components/Faculty/AltPub';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FacultyActivities from '../../components/Faculty/FacultyActivities';
import Teaching from '../../components/Faculty/AltTeach';
import Sidebar from '../../components/Layout/Sidebar';
import { useParams } from 'react-router-dom';

const FacultyPage = () => {
    const [facultyData, setFacultyData] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const fetchFacultyData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_STRAPI_URL}/faculties/${id}?populate=*`);
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
        <>
        <Sidebar />
        <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-14 sm:pt-16 pb-6">
            <section id="profile" className="w-full max-w-5xl mx-auto mb-10">
                <div className="rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
                    <img
                        src={facultyData.imageUrl}
                        alt="Faculty"
                        className="w-40 h-40 rounded-full object-cover border-2 border-[#faa519] shadow-md"
                        onError={e => { e.target.src = "https://via.placeholder.com/160?text=No+Image"; }}
                    />
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">{facultyData.name}</h2>
                        <h4 className="text-xl text-gray-600 font-semibold mb-3">{facultyData.role}</h4>
                        <p className="mb-2">
                            <span className="font-semibold">Office Address: </span>
                            <span>{facultyData.address?.length > 0 ? facultyData.address : "Address not available"}</span>
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Email: </span>
                            <a href={`mailto:${facultyData.email}`} className="hover:underline">{facultyData.email}</a>
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
                    </div>
                </div>
            </section>

            <section id='edu-exp' className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-xl shadow-2xl p-6">
                    <h2 className='text-3xl text-center font-bold mb-6 text-black'>Education & Experience</h2>
                    <Timeline data={facultyData.educationAndExperience}/>
                </div>
            </section>

            <section id='research-team' className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                    {/* <h2 className='text-2xl font-bold mb-6 text-indigo-700'>Research Team</h2> */}
                    <FacultyTeam/>
                </div>
            </section>

            <section id="publications" className='w-full max-w-5xl mx-auto my-10'>
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                    {/* <h2 className="text-2xl font-bold mb-6 text-indigo-700">Publications</h2> */}
                    <Publications />
                </div>
            </section>

            <section id="prof-activities" className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                    {/* <h2 className="text-2xl font-bold mb-6 text-indigo-700">Professional Activities</h2> */}
                    <FacultyActivities />
                </div>
            </section>

            <section id="teaching" className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <h2 className="text-2xl font-bold mb-6 text-black">Teaching</h2>
                    <Teaching data={teaching}/>
                </div>
            </section>

            <section id="awards" className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <h2 className="text-2xl font-bold mb-6 text-black">Awards & Honours</h2>
                    <Teaching data={awards}/>
                </div>
            </section>
        </div>
        </>
    );
};

export default FacultyPage;