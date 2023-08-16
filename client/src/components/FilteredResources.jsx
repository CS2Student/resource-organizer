import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Resources.css';
import updateSymbol from '../assets/images/pencil.png';
import deleteSymbol from '../assets/images/minus.png';

const FilteredResources = ({ resources }) => {

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
            {resources.map(resource => (
                <tr key={resource.id}>
                    <td><a href={resource.link}>{resource.title}</a></td>
                    <td>{resource.description}</td>
                    <td>{resource.type}</td>
                    <td>{resource.category}</td>
                    <td>{resource.sub_category}</td>
                    <td>
                        <button className="button" onClick={() => handleDelete(resource.id)}>
                            <img src={deleteSymbol} alt="delete symbol" className="symbol"/>
                        </button>
                        <button className="button">
                            <Link to={`/update/${resource.id}`}>
                                <img src={updateSymbol} alt="update symbol" className="symbol"/>
                            </Link>
                        </button>
                    </td>
                </tr>
            ))}
        </>
    )
}

export default FilteredResources;