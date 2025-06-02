import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useState,useEffect } from "react";
import axios from "axios";

const AcadPrograms = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios
        .get("http://localhost:1337/api/program?populate=*")
        .then((res) => {
            setContent(res.data.data); // NO ".attributes" here!
            setLoading(false);
        })
        .catch((err) => {
            console.error("Failed to fetch about data", err);
            setLoading(false);
        });
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (!content) return <div>Failed to load data.</div>;
    
    return(
        <div className='container sidepage-container pb-3'>
            {content.programs && (
                <BlocksRenderer content={content.programs} />
            )}
        </div>
    )
};

export default AcadPrograms;