import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const LogoutButton = () => {
    const { logout } = useContext(AppContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <button 
            onClick={handleLogout} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
            Logout
        </button>
    );
};

export default LogoutButton;