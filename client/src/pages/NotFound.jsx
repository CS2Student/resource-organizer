import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
    return (
        <>
            <h1>404 Page Not Found</h1>
            <p>The page you are looking for does not exist or another error has occurred.</p>
            <p>Click <Link to="/">HERE</Link> to go back to the homepage</p>
        </>
    )
}

export default NotFound;