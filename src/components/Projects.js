import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Projects = ({ projects, isEditable }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setEditedData(projects);
    }, [projects]);

    const handleAddProjectType = () => {
        setEditedData([...editedData, { projectType: "New Project Type", listOfProjects: [] }]);
    };

    const handleAddProjectItem = (projectIndex) => {
        const updatedData = [...editedData];
        updatedData[projectIndex].listOfProjects.push("New Project Item");
        setEditedData(updatedData);
    };

    const handleEdit = (type, projectIndex, value, itemIndex = null) => {
        const updatedData = [...editedData];
        if (type === "projectType") {
            updatedData[projectIndex].projectType = value;
        } else if (type === "projectItem") {
            updatedData[projectIndex].listOfProjects[itemIndex] = value;
        }
        setEditedData(updatedData);
    };

    const handleDeleteProjectType = (projectIndex) => {
        const updatedData = editedData.filter((_, index) => index !== projectIndex);
        setEditedData(updatedData);
    };

    const handleDeleteProjectItem = (projectIndex, itemIndex) => {
        const updatedData = [...editedData];
        updatedData[projectIndex].listOfProjects = updatedData[projectIndex].listOfProjects.filter(
            (_, index) => index !== itemIndex
        );
        setEditedData(updatedData);
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/update`, {
                id,
                field: "projects",
                editedData: editedData,
            });
            console.log("message:", response.data.message);
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <section id="projects">
            <div className="my-5">
                <h2 className="text-center pb-4">Projects</h2>
                {editedData?.map((project, projectIndex) => (
                    <div key={projectIndex} className="mb-4">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={project.projectType}
                                    onChange={(e) =>
                                        handleEdit("projectType", projectIndex, e.target.value)
                                    }
                                    style={{ width: 'calc(100% - 120px)', marginRight: '10px' }}
                                />
                            ) : (
                                <h3 style={{ width: 'calc(100% - 120px)', marginRight: '10px' }}>{project.projectType}</h3>
                            )}
                            {isEditing && (
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteProjectType(projectIndex)}
                                    style={{ width: '100px' }}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                        <ul>
                            {project.listOfProjects?.map((projectItem, itemIndex) => (
                                <li key={itemIndex} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={projectItem}
                                            onChange={(e) =>
                                                handleEdit(
                                                    "projectItem",
                                                    projectIndex,
                                                    e.target.value,
                                                    itemIndex
                                                )
                                            }
                                            style={{ width: 'calc(100% - 120px)', marginRight: '10px' }}
                                        />
                                    ) : (
                                        <span style={{ width: 'calc(100% - 120px)', marginRight: '10px' }}>{projectItem}</span>
                                    )}
                                    {isEditing && (
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDeleteProjectItem(projectIndex, itemIndex)
                                            }
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
                                onClick={() => handleAddProjectItem(projectIndex)}
                                style={{ display: 'block', margin: '0 auto' }}
                            >
                                Add Project Item
                            </button>
                        )}
                    </div>
                ))}
                {isEditing && (
                    <button
                        className="btn btn-primary mb-3"
                        style={{ display: 'block', margin: '0 auto' }}
                        onClick={handleAddProjectType}
                    >
                        Add Project Type
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

export default Projects;