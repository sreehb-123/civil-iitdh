import "../styles/Home.css";
// import videoFile from '../assets/videoBackground.mp4';
import Carousel from "../components/Carousel";

const Home = () => {
    return (
        <div>
            {/* <div className="video-container">
                <video autoPlay muted loop className="video-bg">
                    <source src={videoFile} type="video/mp4"/>
                    Your browser doesn't support the video tag
                </video>
            </div> */}
            <div className="carousel-home-container">
                <Carousel />
            </div>

            <section id="about" className="about-section">
                <div className="container my-5">
                    <h1 className="mb-4" style={{ fontFamily: 'Georgia, serif',fontSize: "40px"}}>About Us: Department of Civil and Infrastructure Engineering</h1>

                    {/* <h2 className="mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Department of Civil and Infrastructure Engineering
                    </h2> */}

                    <p>
                        From towering skyscrapers and robust bridges to efficient water systems and next-generation transportation,
                        civil and infrastructure engineering shapes our world. As climate challenges intensify and technology transforms
                        the way and quality of life, the demand for smart, sustainable, climate-resilient, and energy-efficient
                        infrastructure has never been more urgent.
                    </p>
                    <p>
                        Realizing such infrastructures requires a multidisciplinary, cross-cutting approach that bridges traditional civil
                        engineering with emerging technologies and innovative design strategies. A flexible interdisciplinary curriculum is
                        key to preparing future civil engineers to tackle these challenges holistically, ensuring infrastructure that endures
                        the test of time while embracing social, economic, and environmental sustainability.
                    </p>
                    <p>
                        Founded in 2022, the Department of Civil &amp; Infrastructure Engineering at IIT Dharwad offers a comprehensive
                        four-year B.Tech program that blends core civil engineering principles with modern advancements in sustainable
                        energy-efficient construction, smart materials, and infrastructure resilience. At the postgraduate level, the
                        department offers a Ph.D. program across diverse research areas as mentioned below. With state-of-the-art
                        laboratories and cutting-edge research facilities, the department empowers its researchers to develop innovative,
                        real-world solutions that drive progress in both industry and society.
                    </p>

                    <h4 className="mt-4">Key Thrust Areas of the Department:</h4>
                    <ul className="list-unstyled ms-3">
                        <li>• Structural Engineering and Materials</li>
                        <li>• Net-Zero Energy-Efficient Infrastructures</li>
                        <li>• Transportation Engineering</li>
                        <li>• Geotechnical Engineering</li>
                        <li>• Water Resources Engineering</li>
                    </ul>

                    <p>
                        The department actively collaborates with public and private sector organizations, providing consultancy services
                        in the aforementioned domains, along with expertise in infrastructure design, construction management, and
                        sustainability solutions. These engagements foster strong industry-academia partnerships while offering students
                        valuable exposure to real-world challenges.
                    </p>

                    <h4 className="mt-4">Vision</h4>
                    <p>
                        To be a global leader in civil and infrastructure engineering education and research, contributing to the sustainable
                        development of society.
                    </p>

                    <h4 className="mt-4">Mission</h4>
                    <ul className="list-unstyled ms-3">
                        <li>• Develop a curriculum based on the present and future challenges of civil infrastructure.</li>
                        <li>• Conduct impactful research to build a smart, sustainable and resilient civil infrastructure.</li>
                        <li>• Establish strong collaborations with civil engineering industries to address the challenges of built environment.</li>
                        <li>• Foster the potential of students to excel as future entrepreneurs in the construction industry.</li>
                    </ul>
                </div>
            </section>

        </div>
    );
};

export default Home;