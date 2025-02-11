import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Teaching = ({ teaching, isEditable }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setEditedData(teaching);
    }, [teaching]);

    const handleAddTeaching = () => {
        setEditedData([...editedData, "New Teaching Item"]);
    };

    const handleEdit = (index, value) => {
        const updatedData = [...editedData];
        updatedData[index] = value;
        setEditedData(updatedData);
    };

    const handleDeleteTeaching = (index) => {
        const updatedData = editedData.filter((_, idx) => idx !== index);
        setEditedData(updatedData);
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/update`, {
                id,
                field: "teaching",
                editedData: editedData,
            });
            console.log("message:", response.data.message);
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <section id="teaching">
            <div>
            <ul style={{ listStyleType: 'disc', padding: '0', margin: '0' }}>                    
                {editedData?.map((teach, index) => (
                        <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={teach}
                                    onChange={(e) => handleEdit(index, e.target.value)}
                                    style={{ width: 'calc(100% - 120px)', marginRight: '10px' }}
                                />
                            ) : (
                                <span style={{ width: 'calc(100% - 120px)', marginRight: '10px' }}>{teach}</span>
                            )}
                            {isEditing && (
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteTeaching(index)}
                                    style={{ width: '100px' }}
                                >
                                    Delete
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
                {isEditing && (
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={handleAddTeaching}
                        style={{ display: 'block', margin: '0 auto' }}
                    >
                        Add Teaching Item
                    </button>
                )}
                {isEditable && (
                    <div className="text-center mt-4">
                        {isEditing ? (
                            <>
                                <button onClick={handleSave} className="btn btn-success mr-2">
                                    Save
                                </button>
                                <button onClick={() => setIsEditing(false)} className="btn btn-secondary">
                                    Cancel
                                </button>
                            </>
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

export default Teaching;