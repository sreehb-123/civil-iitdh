import '../styles/Timeline.css';

const Timeline = () => {
    const timelineData = [
        {
            date: '2014-2017',
            title: 'Bachelors Degree in Engineering',
            description: 'ABC University - One of the top colleges in the world.'
        },
        {
            date: '2017 - 2019',
            title: 'Masters in Computer Science',
            description: 'XYZ University - Graduated with First Class Honors.',
        },
        {
            date: '2019 - 2020',
            title: 'Software Developer',
            description: 'Worked at DEF Corp., focusing on full-stack web development.',
        },
        {
            date: '2020-2022',
            title: 'Ph.D',
            description: 'Ph.D. in Artificial Intelligence from DEF University.'
        },
        {
            date: '2022 - Present',
            title: 'Assistant Professor',
            description: 'Working at ABC Institute, specializing in AI and Machine Learning.',
        },
    ];
    
    return(
        <div className="vertical-timeline">
            {timelineData.map((item, index) => (
                <div 
                    key={index} 
                    className={`timeline-item ${index % 2 == 0 ? 'left' : 'right'}`}>
                    <div className='timeline-marker'></div>
                    <div className='timeline-content'>
                        <h3 className='timeline-title'>{item.title}</h3>
                        <span className='timeline-date'>{item.date}</span>
                        <p className='title-description'>{item.description}</p>
                    </div>
                </div>
                ))}
        </div>
    )
};

export default Timeline;