import '../styles/FacultyPage.css';
import facultyLogo from '../assets/download-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Faculties = () => {
    const navigate = useNavigate();

    const handleClick = (facultyId,facultyAddlRole,facultyPersonalUrl) => {
        if(facultyAddlRole === "Director"){
            window.open("https://iitdh.ac.in","_blank");
        } 
        else if(facultyPersonalUrl !== "NA"){
            window.open(facultyPersonalUrl,"_blank");   
            console.log(facultyPersonalUrl);
        }
        else {
            navigate(`/facultyPage/${facultyId}`);
        }
    };

    
    const [faculties,setFaculties] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const getFaculties = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/faculties`);
                setFaculties(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getFaculties();
    }, []);

    if(loading) return <div>Loading....</div>;
    if(error) return <div>Error: {error}</div>;

    return (
        <div className="container main-container faculties-container">
            <div className="faculty-header">
                <img src={facultyLogo} alt="Faculty" className="faculty-logo" />
                <h1 className="faculty-text-box">Faculty</h1>
            </div>
            <div className="hexagon-container">
            {faculties
                .sort((a, b) => {
                    // Remove prefixes "Dr. " or "Prof. " from the names
                    const nameA = a.name.replace(/^(Dr\. |Prof\. )/, "").toLowerCase();
                    const nameB = b.name.replace(/^(Dr\. |Prof\. )/, "").toLowerCase();
                    return nameA.localeCompare(nameB); // Sort names alphabetically
                })
                .map(faculty => (
                    <div className="hexagon" key={faculty._id} onClick={() => handleClick(faculty._id,faculty.addlRole,faculty.personalUrl)}>
                        <img src={faculty.image} alt={faculty.name} className="hexagon-img" />
                        <div className="hexagon-text">
                            <h4>{faculty.name}</h4>
                            <h5>{faculty.role}</h5>
                        </div>
                    </div>
                ))}

            </div>


            

        </div>
    );
};

export default Faculties;