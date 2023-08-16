import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Resources.css';
import FilteredResources from '../components/FilteredResources';

// Return queried items
const getFilteredItems = (query, items) => {
    query = query.toUpperCase();
    if (!query) {
        return items;
    }
    return items.filter(resource => 
        resource.title.toUpperCase().includes(query) ||
        resource.description.toUpperCase().includes(query) ||
        resource.type.toUpperCase().includes(query) ||
        resource.category.toUpperCase().includes(query) ||
        resource.sub_category.toUpperCase().includes(query)                 
    );
}

const Resources = () => {
    const [resources, setResources] = useState([]);
    const [query, setQuery] = useState('');

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

    const FilteredItems = getFilteredItems(query, resources);
    

    return (
        <>
            <h1 className="resources-title">Resource Database</h1>
            <div className="resources-container">
                <div className="navbar">
                    <Link to="/add" className="button add-btn">Add New Resource</Link>
                    <input
                    type='text' 
                    placeholder='Search...' 
                    onChange={e => setQuery(e.target.value)}
                    className="button search-btn"
                    />
                </div>
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
                        <FilteredResources resources={FilteredItems}/>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Resources;