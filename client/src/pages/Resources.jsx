import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FilteredResources from '../components/FilteredResources';
import '../styles/Resources.css';

// Return queried items
const getFilteredItems = (query, items) => {
    if (!query) {
        return items;
    }
    return items.filter(resource => resource.title.includes(query));
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
        <div className="resources-container">
            <h1 className="resources-title">Resource Organizer</h1>
            <div className="navbar">
                <Link to="/add" className="add-button">Add New Resource</Link>
                <input
                type='text' 
                placeholder='search...' 
                onChange={e => setQuery(e.target.value)}
                className="searchBar"
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
    )
}

export default Resources;