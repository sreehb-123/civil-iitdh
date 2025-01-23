//import { useEffect, useState } from 'react';
import '../styles/Timeline.css';
//import axios from 'axios';

const Timeline = ({data}) => {
    if (!data || data.length === 0) {
        return <div>No education or experience data available.</div>;
    }

    return(
        <div className="vertical-timeline">
            {data.map((item, index) => (
                <div 
                    key={index} 
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className='timeline-marker'></div>
                    <div className='timeline-content'>
                        <h3 className='timeline-title'>{item.role}</h3>
                        <span className='timeline-date'>{item.duration}</span>
                        <p className='title-description'>{item.description}</p>
                    </div>
                </div>
                ))}
        </div>
    )
};

export default Timeline;