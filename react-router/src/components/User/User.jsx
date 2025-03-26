import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userid } = useParams();
    return (
        <div className="bg-secondary text-white fs-1 p-3">
            User: {userid}
        </div>
    );
}

export default User;
