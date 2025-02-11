import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfActivities = ({ professionalActivities, isEditable }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setEditedData(professionalActivities);
    }, [professionalActivities]);

    const handleAddHeading = () => {
        const newHeading = { headings: "New Heading", activities: [] };
        setEditedData([...editedData, newHeading]);
    };

    const handleAddActivity = (headingIndex) => {
        const updatedData = [...editedData];
        updatedData[headingIndex].activities.push("New Activity");
        setEditedData(updatedData);
    };

    const handleEdit = (type, headingIndex, value, activityIndex = null) => {
        const updatedData = [...editedData];
        if (type === "heading") {
            updatedData[headingIndex].headings = value;
        } else if (type === "activity") {
            updatedData[headingIndex].activities[activityIndex] = value;
        }
        setEditedData(updatedData);
    };

    const handleDeleteHeading = (headingIndex) => {
        const updatedData = editedData.filter((_, index) => index !== headingIndex);
        setEditedData(updatedData);
    };

    const handleDeleteActivity = (headingIndex, activityIndex) => {
        const updatedData = [...editedData];
        updatedData[headingIndex].activities = updatedData[headingIndex].activities.filter(
            (_, index) => index !== activityIndex
        );
        setEditedData(updatedData);
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/update`, {
                id,
                field: "activities",
                editedData: editedData,
            });
            console.log("message:", response.data.message);
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <section id="prof-activities">
            <div>
                {editedData?.map((activity, headingIndex) => (
                    <div key={headingIndex} className="mb-4">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px' }}>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={activity.headings}
                                    onChange={(e) =>
                                        handleEdit("heading", headingIndex, e.target.value)
                                    }
                                    style={{ width: 'calc(100% - 120px)', marginRight: '10px', fontWeight: 'bold' }}
                                />
                            ) : (
                                <h4 style={{ width: 'calc(100% - 120px)', marginRight: '10px' }}>{activity.headings}</h4>
                            )}

                            {isEditing && (
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteHeading(headingIndex)}
                                    style={{ width: '100px' }}
                                >
                                    Delete
                                </button>
                            )}
                        </div>

                        <ul>
                            {activity.activities?.map((act, activityIndex) => (
                                <li key={activityIndex} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={act}
                                            onChange={(e) =>
                                                handleEdit(
                                                    "activity",
                                                    headingIndex,
                                                    e.target.value,
                                                    activityIndex
                                                )
                                            }
                                            style={{ width: 'calc(100% - 120px)', marginRight: '10px' }}
                                        />
                                    ) : (
                                        <span style={{ width: 'calc(100% - 120px)', marginRight: '10px' }}>{act}</span>
                                    )}

                                    {isEditing && (
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDeleteActivity(headingIndex, activityIndex)
                                            }
                                            style={{ width: '100px'}}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="d-flex align-items-start">
                            {isEditing && (
                                <button
                                    className="btn btn-primary mb-3"
                                    style={{ display: 'block', margin: '0 auto' }}
                                    onClick={handleAddHeading}
                                >
                                    Add Heading
                                </button>
                            )}

                            {isEditing && (
                                <button
                                    className="btn btn-secondary mt-2"
                                    onClick={() => handleAddActivity(headingIndex)}
                                    style={{ display: 'block', margin: '0 auto' }}
                                >
                                    Add Activity
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {isEditable && (
                    <div className="text-center mt-4">
                        {isEditing ? (
                            <div className="d-flex justify-content-center gap-3">
                                <button onClick={handleSave} className="btn btn-success mr-2">
                                    Save
                                </button>
                                <button onClick={() => setIsEditing(false)} className="btn btn-secondary">
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProfActivities;