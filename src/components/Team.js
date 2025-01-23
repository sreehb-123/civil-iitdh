// import { useEffect, useState } from 'react';
// import facultyImg from '../assets/intro-1587390568.jpg';


const ResearchTeam = ({data}) => {
    if (!data || data.length === 0) {
        return <div>No research team data available.</div>;
    }

    return (
        <section id="research-team" className="my-5">
            <div className="container">
                <div className="row">
                    {data.map((member, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card mb-3">
                                <div className="d-flex justify-content-center py-3">
                                    {/* <img
                                        src={member.img}
                                        alt={member.name}
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            objectFit: "cover"
                                        }}
                                        className="rounded-circle"
                                    /> */}
                                </div>
                                <div className="card-body text-left">
                                    <h4 className="card-title">{member.name}</h4>
                                    <p>
                                        <strong>Email:</strong> {member.email}
                                    </p>
                                    <p> <strong>Education:</strong> </p>
                                    <ul>
                                        {member.education.map((edu, eduIndex) => (
                                            <li key={eduIndex}>
                                                <strong>{edu.degree} from {edu.college} ({edu.duration})</strong>
                                            </li>
                                        ))}
                                    </ul>

                                    
                                    <a
                                        href={member.linkedinUrl}
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