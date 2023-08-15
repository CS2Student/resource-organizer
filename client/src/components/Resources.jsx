import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Resources.css';
import updateSymbol from '../assets/images/pencil.png';
import deleteSymbol from '../assets/images/minus.png';

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
        <div className="resources-container">
            <h1 className="resources-title">All Resources</h1>
            <table className="resources-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Subcategory</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {resources.map(resource => (
                        <tr key={resource.id}>
                            <td><a href={resource.link}>{resource.title}</a></td>
                            <td>{resource.description}</td>
                            <td>{resource.type}</td>
                            <td>{resource.category}</td>
                            <td>{resource.sub_category}</td>
                            <td>
                                <button className="delete" onClick={() => handleDelete(resource.id)}>
                                    <img src={deleteSymbol} alt="delete symbol" className="symbol"/>
                                </button>
                                <button className="update">
                                    <Link to={`/update/${resource.id}`}>
                                        <img src={updateSymbol} alt="update symbol" className="symbol"/>
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/add" className="add-button">Add New Resource</Link>
        </div>
    )
}

export default Resources;