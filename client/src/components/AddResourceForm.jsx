import React from 'react';
import { useState } from 'react';
// import axios from 'axios';
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

    return (
        <>
            <h1>Add New Resource</h1>
            <input type='text' placeholder='title' name='title'/>
            <input type='text' placeholder='description' name='description'/>
            <input type='text' placeholder='type' name='type'/>
            <input type='text' placeholder='category' name='category'/>
            <input type='text' placeholder='sub_category' name='sub category'/>
            <input type='text' placeholder='link' name='link'/>
        </>
    )
}

export default AddResourceForm;