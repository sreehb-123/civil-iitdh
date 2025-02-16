import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Awards = ({ awards, isEditable }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedAwards, setEditedAwards] = useState([]);
    const { id } = useParams();
    

    // Log awards to debug
    useEffect(() => {
        console.log("Received awards:", awards); // Debugging
        if (awards) {
            setEditedAwards(awards); // Only update when awards exist
        }
    }, [awards]);

    // Handle Adding a New Award
    const handleAddItem = () => {
        setEditedAwards([...editedAwards, ""]); // Add an empty string
    };

    // Handle Deleting an Award
    const handleDeleteItem = (index) => {
        setEditedAwards(editedAwards.filter((_, i) => i !== index));
    };

    // Handle Editing Awards
    const handleAwardChange = (index, value) => {
        const updatedAwards = [...editedAwards];
        updatedAwards[index] = value;
        setEditedAwards(updatedAwards);
    };

    // Handle Save
    const handleSave = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/update`, {
                id,
                field: "awards",
                editedData: editedAwards,
            });
            console.log("message:", response.data.message);
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    // Handle Cancel
    const handleCancel = () => {
        setEditedAwards(awards || []);
        setIsEditing(false);
    };

    return (
        <section id="awards">
            <div className="my-5">
                <h2 className="text-center pb-4">Awards & Honors</h2>
                {editedAwards.length > 0 ? (
                    <ul>
                        {editedAwards.map((award, index) => (
                            <li key={index} className="d-flex align-items-center">
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={award}
                                        onChange={(e) => handleAwardChange(index, e.target.value)}
                                        className="form-control mx-2"
                                    />
                                ) : (
                                    award
                                )}
                                {isEditing && (
                                    <button
                                        className="btn btn-danger btn-sm mx-2"
                                        onClick={() => handleDeleteItem(index)}
                                    >
                                        Delete
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center">No data available</p>
                )}

                {/* Edit Mode Buttons */}
                {isEditable && !isEditing && (
                    <button className="btn btn-primary mt-3" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                )}

                {isEditing && (
                    <div className="mt-3">
                        <button className="btn btn-success mx-2" onClick={handleAddItem}>
                            Add Item
                        </button>
                        <button className="btn btn-primary mx-2" onClick={handleSave}>
                            Save
                        </button>
                        <button className="btn btn-secondary mx-2" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Awards;