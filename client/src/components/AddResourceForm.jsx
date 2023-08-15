import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8800/resources', resource);
            navigate("/");
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <>
            <h1>Add New Resource</h1>
            <input type='text' placeholder='title' onChange={handleChange} name='title'/>
            <input type='text' placeholder='description' onChange={handleChange} name='description'/>
            <input type='text' placeholder='type' onChange={handleChange} name='type'/>
            <input type='text' placeholder='category' onChange={handleChange} name='category'/>
            <input type='text' placeholder='sub category' onChange={handleChange} name='sub_category'/>
            <input type='text' placeholder='link' onChange={handleChange} name='link'/>
            <button className="formButton" onClick={handleClick}>Save</button>
        </>
    )
}

export default AddResourceForm;