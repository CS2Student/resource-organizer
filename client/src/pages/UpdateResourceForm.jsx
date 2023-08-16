import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Form.css';

const UpdateResourceForm = () => {
    const [resource, setResource] = useState({
        title:"",
        description:"",
        type:"",
        category:"",
        sub_category:"",
        link:""
    });

    const navigate = useNavigate();
    const location = useLocation();
    const resourceId = location.pathname.split("/")[2];

    // Populate resource properties with current values
    useEffect(() => {
        const fetchResources = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/resources/${resourceId}`);
                setResource(prevResource => ({
                    ...prevResource, 
                    ...res.data[0]
                }));
            } catch (err) {
                console.error(err);
            }
        }

        fetchResources();
    }, [resourceId]);

    console.log(resource);

    // Update resource properties on user input
    const handleChange = (e) => {
        setResource(prevResource => ({ ...prevResource, [e.target.name]: e.target.value}));
    }

    // Update current resource
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/resources/${resourceId}`, resource);
            navigate("/");
        } catch(err) {
            console.error(err);
        }
    }

    const handleCancel = () => {
        console.log('canceled');
    }

    return (
        <>
            <h1 className="form-title">Update Resource</h1>
            <form className="form-container">
                <input type='text' placeholder={resource.title} onChange={handleChange} name='title'/>
                <input type='text' placeholder={resource.description} onChange={handleChange} name='description'/>
                <input type='text' placeholder={resource.type} onChange={handleChange} name='type'/>
                <input type='text' placeholder={resource.category} onChange={handleChange} name='category'/>
                <input type='text' placeholder={resource.sub_category} onChange={handleChange} name='sub_category'/>
                <input type='text' placeholder={resource.link} onChange={handleChange} name='link'/>
                <button className="button" onClick={handleCancel}>Cancel</button>
                <button className="button" onClick={handleSave}>Save</button>
            </form>
        </>
    )
}

export default UpdateResourceForm;