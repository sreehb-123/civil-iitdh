const PublicationsArray = ({ data }) => {
    return (
        <div>
            <ul>
                {data?.map((publication, index) => (
                    <li key={index}>{publication}</li>
                ))}
            </ul>
        </div>
    );
};

export default PublicationsArray;