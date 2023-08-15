import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    return (
        <>
            <h1>All Resources</h1>
            <div className="resources">
                {resources.map(resource => (
                    <div className="resource" key={resource.id}>
                        <h2>Title</h2>
                        <p>Desription</p>
                        <p>Type</p>
                        <p>Category</p>
                        <p>Sub_Category</p>
                        <p>Link</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Resources;