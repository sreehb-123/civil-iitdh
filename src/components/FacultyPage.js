import '../styles/FacultyPage.css';
import facultyImg from '../assets/intro-1587390568.jpg';
import facultyLogo from '../assets/download-removebg-preview.png';
import { useNavigate } from 'react-router-dom';

const facultyData = [
    { id: 1, name: 'Rakesh Lingam', role: 'Assistant Professor', image: facultyImg },
    { id: 2, name: 'John Doe', role: 'Professor', image: facultyImg },
    { id: 3, name: 'Jane Smith', role: 'Associate Professor', image: facultyImg },
    { id: 4, name: 'Michael Brown', role: 'Lecturer', image: facultyImg },
    { id: 5, name: 'Emily Davis', role: 'Senior Lecturer', image: facultyImg },
    { id: 6, name: 'Chris Wilson', role: 'Research Fellow', image: facultyImg },
    { id: 7, name: 'Sarah Johnson', role: 'Head of Department', image: facultyImg },
];

const FacultyPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/facultyy');
    };

    return (
        <div className="container main-container">
            <div className="faculty-header">
                <img src={facultyLogo} alt="Faculty" className="faculty-logo" />
                <h1 className="faculty-text-box">Faculty</h1>
            </div>
            <div className="hexagon-container">
                {facultyData.map(faculty => (
                    <div className="hexagon" key={faculty.id} onClick={handleClick}>
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

export default FacultyPage;