import "../styles/Home.css";
import videoFile from '../assets/videoBackground.mp4';

const Home = () => {
    return (
        <div>
            <div className="video-container">
                <video autoPlay muted loop className="video-bg">
                    <source src={videoFile} type="video/mp4"/>
                    Your browser doesn't support the video tag
                </video>
            </div>

            <section id="about" className="about-section">
                <h2>About Us</h2>
                <p>Here is some information about the department.</p>
            </section>
        </div>
    );
};

export default Home;