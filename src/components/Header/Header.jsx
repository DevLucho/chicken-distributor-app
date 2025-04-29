import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Header = () => {
    const { user } = useContext(AppContext);

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">Distribuidora de Pollo</h1>
            <div className="flex items-center">
                {user ? (
                    <span className="mr-4">Bienvenido, {user.name}</span>
                ) : (
                    <span className="mr-4">Bienvenido, Invitado</span>
                )}
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                    Cerrar Sesión
                </button>
            </div>
        </header>
    );
};

export default Header;