import React from 'react';

const Notification = ({ message }) => {
    return (
        <div className="Notification">
            <p>
                Please fill out required fields: Title, Description, Type.
            </p>
        </div>
    );
};

export default Notification;