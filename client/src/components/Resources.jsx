import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Resources.css';

const Resources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const res = await axios.get('http://localhost:8800/resources');
                setResources(res.data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchResources();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/resources/${id}`);
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <Link to="/add">Add New Resource</Link><h1>All Resources</h1>
            <table className="resources-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Link</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {resources.map(resource => (
                        <tr clasName="resource" key={resource.id}>
                            <td>{resource.title}</td>
                            <td>{resource.description}</td>
                            <td>{resource.type}</td>
                            <td>{resource.category}</td>
                            <td>{resource.sub_category}</td>
                            <td>{resource.link}</td>
                            <td>
                                <button className="delete" onClick={() => handleDelete(resource.id)}>Delete</button>
                                <button className="update"><Link to={`/update/${resource.id}`}>Update</Link></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Resources;