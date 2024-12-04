import facultyImg from '../assets/intro-1587390568.jpg';

const researchTeam = [
    {
        name: "Alice Smith",
        img: facultyImg,
        phd: "Ph.D. (2020 - 2024), Artificial Intelligence, MIT, USA",
        mtech: "M.Tech (2018 - 2020), Computer Science, Stanford University, USA",
        btech: "B.Tech (2014 - 2018), Computer Engineering, University of California, USA",
        email: "alice.smith@gmail.com",
        linkedin: "https://linkedin.com/in/"
    },
    {
        name: "Bob Johnson",
        img: facultyImg,
        phd: "Ph.D. (2021 - 2025), Robotics, ETH Zurich, Switzerland",
        mtech: "M.Tech (2019 - 2021), Mechanical Engineering, IIT Bombay, India",
        btech: "B.Tech (2015 - 2019), Mechatronics, IIT Kharagpur, India",
        email: "bob.johnson@gmail.com",
        linkedin: "https://linkedin.com/in/"
    },
    {
        name: "Catherine Lee",
        img: facultyImg,
        phd: "Ph.D. (2019 - 2023), Ethical AI, Harvard University, USA",
        mtech: "M.Tech (2017 - 2019), Data Science, University of Toronto, Canada",
        btech: "B.Tech (2013 - 2017), Computer Science, Nanyang Technological University, Singapore",
        email: "catherine.lee@gmail.com",
        linkedin: "https://linkedin.com/in/"
    },
    {
        name: "David Brown",
        img: facultyImg,
        phd: "Ph.D. (2018 - 2022), Automation Systems, University of Oxford, UK",
        mtech: "M.Tech (2016 - 2018), Control Systems, University of Cambridge, UK",
        btech: "B.Tech (2012 - 2016), Electrical Engineering, IIT Delhi, India",
        email: "david.brown@gmail.com",
        linkedin: "https://linkedin.com/in/"
    }
];

const ResearchTeam = () => {
    return (
        <section id="research-team" className="my-5">
            <div className="container">
                <h2 className="text-center pb-4">Research Team</h2>
                <div className="row">
                    {researchTeam.map((member, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card mb-3">
                                <div className="d-flex justify-content-center py-3">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            objectFit: "cover"
                                        }}
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="card-body text-left">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p>
                                        <strong>Ph.D.:</strong> {member.phd}
                                    </p>
                                    <p>
                                        <strong>M.Tech:</strong> {member.mtech}
                                    </p>
                                    <p>
                                        <strong>B.Tech:</strong> {member.btech}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {member.email}
                                    </p>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`LinkedIn Profile of ${member.name}`}
                                    >
                                        <i className="fab fa-linkedin fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchTeam;