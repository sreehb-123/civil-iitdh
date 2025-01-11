const Publications = ({data}) => {
    if (!data || data.length === 0) {
        return <div>No publications data available.</div>;
    }

    return(
        <div>
            <h2 className='text-center pb-4'>Publications</h2>
            {data.map((publication, index) => (
                <div key={index}>
                    <h3>{publication.types}</h3>
                    {publication.subTypes.map((subType, subIndex) => (
                        <div key={subIndex}>
                            <h4>{subType.heading}</h4>
                            <ul>
                                {subType.list.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <strong>Author:</strong> {item.author} <br />
                                        <strong>Title:</strong> {item.title} <br />
                                        <strong>Published in:</strong> {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
};

export default Publications;