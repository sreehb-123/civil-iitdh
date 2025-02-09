import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Publications = ({ data = [], isEditable }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState([]);

    // console.log(data);

    // console.log(isEditable);

    const { id } = useParams();

    // console.log(id);

    useEffect(() => {
        setEditedData(data);
    }, [data]);

    const handleChange = (value, typeIndex, subTypeIndex, listIndex, field) => {
        const updatedData = [...editedData];
        updatedData[typeIndex].subTypes[subTypeIndex].list[listIndex][field] = value;
        setEditedData(updatedData);
    };

    const handleAddNew = (typeIndex, subTypeIndex) => {
        const newEntry = { author: "", title: "", name: "" };
        const updatedData = [...editedData];
        updatedData[typeIndex].subTypes[subTypeIndex].list.push(newEntry);
        setEditedData(updatedData);
    };

    const handleAddNewSubType = (typeIndex) => {
        const newSubType = {
            heading: "New Subtype",
            list: [{ author: "", title: "", name: "" }],
        };
        const updatedData = [...editedData];
        updatedData[typeIndex].subTypes.push(newSubType);
        setEditedData(updatedData);
    };

    const handleAddNewType = () => {
        const newType = {
            types: "New Type",
            subTypes: [
                {
                    heading: "New Subtype",
                    list: [{ author: "", title: "", name: "" }],
                },
            ],
        };
        setEditedData([...editedData, newType]);
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


    if (!data || data.length === 0) {
        return <div className="text-center">No publications data available.</div>;
    }

    return (
        <div>
            {editedData.map((publication, typeIndex) => (
                <div key={typeIndex}>
                    <h3>
                        {isEditing ? (
                            <input
                                type="text"
                                value={publication.types}
                                onChange={(e) => {
                                    const updatedData = [...editedData];
                                    updatedData[typeIndex].types = e.target.value;
                                    setEditedData(updatedData);
                                }}
                            />
                        ) : (
                            publication.types
                        )}
                    </h3>
                    {publication.subTypes?.map((subType, subTypeIndex) => (
                        <div key={subTypeIndex}>
                            <h4>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={subType.heading}
                                        onChange={(e) => {
                                            const updatedData = [...editedData];
                                            updatedData[typeIndex].subTypes[subTypeIndex].heading = e.target.value;
                                            setEditedData(updatedData);
                                        }}
                                    />
                                ) : (
                                    subType.heading
                                )}
                            </h4>
                            <ul>
                                {subType.list?.map((item, listIndex) => (
                                    <li key={listIndex}>
                                        {isEditing ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    value={item.author}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            e.target.value,
                                                            typeIndex,
                                                            subTypeIndex,
                                                            listIndex,
                                                            "author"
                                                        )
                                                    }
                                                    placeholder="Author"
                                                />
                                                <input
                                                    type="text"
                                                    value={item.title}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            e.target.value,
                                                            typeIndex,
                                                            subTypeIndex,
                                                            listIndex,
                                                            "title"
                                                        )
                                                    }
                                                    placeholder="Title"
                                                />
                                                <input
                                                    type="text"
                                                    value={item.name}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            e.target.value,
                                                            typeIndex,
                                                            subTypeIndex,
                                                            listIndex,
                                                            "name"
                                                        )
                                                    }
                                                    placeholder="Published In"
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                {item.author}, "{item.title}", {item.name}
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            {isEditing && (
                                <button
                                    onClick={() => handleAddNew(typeIndex, subTypeIndex)}
                                    className="btn btn-link"
                                >
                                    + Add New Publication
                                </button>
                            )}
                        </div>
                    ))}
                    {isEditing && (
                        <button
                            onClick={() => handleAddNewSubType(typeIndex)}
                            className="btn btn-link"
                        >
                            + Add New Subtype
                        </button>
                    )}
                </div>
            ))}
            {isEditing && (
                <button onClick={handleAddNewType} className="btn btn-link">
                    + Add New Type
                </button>
            )}
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

export default Publications;