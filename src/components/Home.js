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
                <h2>Civil and Infrastructure Engineering</h2>
                <p>
                    The Department of Civil and Infrastructure Engineering at [University Name] is dedicated to advancing knowledge and technology in the fields of civil engineering, infrastructure development, and sustainable construction. We offer a comprehensive range of programs that prepare students for careers in the design, construction, and management of critical infrastructure systems. Our faculty members are leaders in their fields, conducting cutting-edge research and engaging in collaborations with industry partners to address global challenges related to urbanization, environmental sustainability, and infrastructure resilience.
                </p>
                <p>
                    Our department is committed to providing a dynamic learning environment that combines theoretical knowledge with hands-on experience. Our students have access to state-of-the-art facilities, including laboratories, research centers, and advanced computational tools. We offer a variety of undergraduate, graduate, and doctoral programs that equip students with the skills necessary to tackle the complex challenges of modern civil and infrastructure engineering.
                </p>
                <p>
                    The department is also a hub for research, with faculty and students working on a wide range of topics, including but not limited to structural engineering, geotechnical engineering, transportation systems, and water resources management. We are committed to addressing the pressing infrastructure needs of our society, both locally and globally.
                </p>
                <p>
                    Our programs are designed to provide students with a strong foundation in engineering principles, critical thinking, and problem-solving skills, while also offering opportunities to specialize in areas such as construction management, urban planning, and environmental engineering. Our graduates go on to work in a variety of sectors, including public infrastructure, private consulting, research, and development.
                </p>

                <h3>A Message from the Head of the Department</h3>
                <div className="head-message">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Head of Department" 
                        className="head-of-department-img" 
                    />
                    <div className="message-text">
                        <p>
                            "Welcome to the Department of Civil and Infrastructure Engineering at [University Name]. As the Head of the Department, I am proud to lead a team of exceptional faculty, staff, and students who are dedicated to advancing the field of civil engineering and contributing to the development of sustainable and resilient infrastructure worldwide. Our department is at the forefront of research and innovation, tackling some of the most pressing challenges of our time, including climate change, urbanization, and infrastructure decay.
                        </p>
                        <p>
                            At [University Name], we offer a dynamic and collaborative learning environment where students are encouraged to think critically, engage with industry leaders, and participate in hands-on projects that address real-world issues. Our goal is to produce graduates who are not only technically proficient but also innovative thinkers and leaders in the field of civil engineering.
                        </p>
                        <p>
                            I invite you to explore our programs, research initiatives, and the many opportunities we offer to help shape the future of infrastructure and the built environment. Together, we can make a lasting impact on the world around us."
                        </p>
                        <p>
                            — Dr. [Head's Full Name], Head of the Department of Civil and Infrastructure Engineering
                        </p>
                    </div>
                </div>

                <h4>Department Highlights</h4>
                <ul>
                    <li>State-of-the-art laboratories and research facilities</li>
                    <li>Active partnerships with industry leaders and global organizations</li>
                    <li>Research focus on sustainable construction practices and infrastructure resilience</li>
                    <li>Opportunities for student internships and real-world project experience</li>
                    <li>Distinguished faculty with expertise in a wide range of civil engineering disciplines</li>
                </ul>
                <p>
                    Our department plays a key role in shaping the future of civil and infrastructure engineering, and we are proud of our commitment to excellence in education, research, and community engagement. We encourage prospective students, industry professionals, and researchers to connect with us and explore the many opportunities for collaboration and growth.
                </p>
            </section>

        </div>
    );
};

export default Home;