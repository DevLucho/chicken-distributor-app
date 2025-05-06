import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import LogoutButton from '../LogoutButton/LogoutButton';

const Header = () => {
    const { user } = useContext(AppContext);

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center">
                {user ? (
                    <>
                        <span className="mr-4">Bienvenido, {user.name}</span>
                        <LogoutButton />
                    </>
                ) : (
                    <span className="mr-4">Por favor, inicia sesión</span>
                )}
            </div>
        </header>
    );
};

export default Header;