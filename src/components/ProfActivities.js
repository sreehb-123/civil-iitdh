import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfActivities = ({ data, isEditable}) => {
    console.log(data);

    const [editedData, setEditedData] = useState([]);
    const [isEditing,setIsEditing] = useState(false);

    useEffect(() => {
            if (data !== editedData) {
                setEditedData(data);
            }
    }, [data]);

    console.log(isEditable);
    console.log(editedData);



    const {id} = useParams();

    const handleAddHeading = () => {
        if (!isEditable) return;
        const newHeading = { heading: "New Heading", activities: [] };
        setEditedData([...editedData, newHeading]);
    };

    const handleAddActivity = (headingIndex) => {
        if (!isEditable) return;
        const updatedData = [...editedData];
        updatedData[headingIndex].activities.push("New Activity");
        setEditedData(updatedData);
    };

    const handleEdit = (type, headingIndex, value, activityIndex = null) => {
        if (!isEditable) return;
        const updatedData = [...editedData];
        if (type === "heading") {
            updatedData[headingIndex].heading = value;
        } else if (type === "activity") {
            updatedData[headingIndex].activities[activityIndex] = value;
        }
        setEditedData(updatedData);
    };

    const handleDeleteHeading = (headingIndex) => {
        if (!isEditable) return;
        const updatedData = editedData.filter((_, index) => index !== headingIndex);
        setEditedData(updatedData);
    };

    const handleDeleteActivity = (headingIndex, activityIndex) => {
        if (!isEditable) return;
        const updatedData = [...editedData];
        updatedData[headingIndex].activities = updatedData[headingIndex].activities.filter(
            (_, index) => index !== activityIndex
        );
        setEditedData(updatedData);
    };

    const handleSave = async () => {
        try {
            console.log(editedData);

            const response = await axios.put("http://localhost:5000/api/update", {
                id,
                field: "publications",
                editedData: editedData,
            });
            console.log("message:" , response.data.message);
            console.log(editedData);
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <div>
            {isEditable && (
                <button className="btn btn-primary mb-3" onClick={handleAddHeading}>
                    Add Heading
                </button>
            )}

            {editedData?.map((item, headingIndex) => (
                <div key={headingIndex} className="mb-4">
                    <div>
                        {isEditable ? (
                            <input
                                type="text"
                                value={item.heading}
                                onChange={(e) =>
                                    handleEdit("heading", headingIndex, e.target.value)
                                }
                            />
                        ) : (
                            <h3>{item.heading}</h3>
                        )}

                        {isEditable && (
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDeleteHeading(headingIndex)}
                            >
                                Delete Heading
                            </button>
                        )}
                    </div>

                    <ul>
                        {item.activities?.map((activity, activityIndex) => (
                            <li key={activityIndex}>
                                {isEditable ? (
                                    <input
                                        type="text"
                                        value={activity}
                                        onChange={(e) =>
                                            handleEdit(
                                                "activity",
                                                headingIndex,
                                                e.target.value,
                                                activityIndex
                                            )
                                        }
                                    />
                                ) : (
                                    <span>{activity}</span>
                                )}

                                {isEditable && (
                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            handleDeleteActivity(headingIndex, activityIndex)
                                        }
                                    >
                                        Delete Activity
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>

                    {isEditable && (
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={() => handleAddActivity(headingIndex)}
                        >
                            Add Activity
                        </button>
                    )}
                </div>
            ))}

            {isEditable && (
                <div className="text-center mt-4">
                    {isEditing ? (
                        <>
                            <button onClick={handleSave} className="btn btn-success">
                                Save
                            </button>
                            <button onClick={() => setIsEditing(false)} className="btn btn-secondary ml-2">
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className="btn btn-primary">
                            Edit
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProfActivities;