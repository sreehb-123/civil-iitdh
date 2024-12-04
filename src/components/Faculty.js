import facultyImg from '../assets/intro-1587390568.jpg';
import '../styles/Faculty.css';
import Timeline from './Timeline';

const Faculty = () => {
    return(
        <div className="d-flex">
            <nav className="bg-light sidebar">
                <ul className="nav flex-column">
                    <li className="nav-item"><a className="nav-link" href='#research-item'>Research Team</a></li>
                    <li className="nav-item"><a className="nav-link" href='#publications'>Publications</a></li>
                    <li className="nav-item"><a className="nav-link" href='#prof-activities'>Professional Activites</a></li>
                    <li className="nav-item"><a className="nav-link" href='#teaching'>Teaching</a></li>
                    <li className="nav-item"><a className="nav-link" href='#'>Projects</a></li>
                    <li className="nav-item"><a className="nav-link">Awards</a></li>
                </ul>
            </nav>

            <div className="main-content container-fluid">
                <div className="text-center my-4">
                    <img 
                        src={facultyImg}
                        alt='Faculty'
                        className='rounded-circle mb-3'
                        style={{width: '150px', height: '150px'}}
                    />
                    <h1>Dr. Rakesh Lingam</h1>
                    <p>Currently researching in [Field]</p>
                </div>

                <div className="my-5 text-center">
                    <h2>Education & Experience</h2>
                    <Timeline />
                </div>
            </div>
        </div>
    )
};

export default Faculty;