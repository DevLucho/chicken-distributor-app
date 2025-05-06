import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const LogoutButton = () => {
    const { logout, user } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Limpiar el estado del usuario
        navigate('/login'); // Redirigir a la pantalla de inicio de sesión
    };

    if (!user) return null; // No mostrar el botón si no hay sesión activa

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
            Cerrar Sesión
        </button>
    );
};

export default LogoutButton;