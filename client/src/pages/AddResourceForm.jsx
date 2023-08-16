import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import '../styles/Form.css';

const AddResourceForm = () => {
    const [resource, setResource] = useState({
        title:"",
        description:"",
        type:"",
        category:"",
        sub_category:"",
        link:""
    });

    const navigate = useNavigate();

    // Update resource properties on user input
    const handleChange = (e) => {
        setResource(prevResource => ({ ...prevResource, [e.target.name]: e.target.value}));
    }

    // Create new resource
    const handleSave = async (e) => {
        e.preventDefault();

        if (!resource.title) {
            alert('Title is required')
        } else if (!resource.description) {
            alert('Description is required')
        } else if (!resource.type) {
            alert('Type is required')
        } else {
            try {
                await axios.post('http://localhost:8800/resources', resource);
                navigate("/");
            } catch(err) {
                console.error(err);
            }
        }
    }

    const handleCancel = () => {
        navigate("/");
    }

    return (
        <>
            <h1 className="form-title">Add New Resource</h1>
            <form className="form-container">
                <input type='text' placeholder='title' onChange={handleChange} name='title' required/>
                <input type='text' placeholder='description' onChange={handleChange} name='description' required/>
                <input type='text' placeholder='type' onChange={handleChange} name='type' required/>
                <input type='text' placeholder='category' onChange={handleChange} name='category'/>
                <input type='text' placeholder='sub category' onChange={handleChange} name='sub_category'/>
                <input type='text' placeholder='link' onChange={handleChange} name='link'/>
                <button className="button" onClick={handleCancel}>Cancel</button>
                <button className="button" onClick={handleSave}>Save</button>
            </form>
        </>
    )
}

export default AddResourceForm;