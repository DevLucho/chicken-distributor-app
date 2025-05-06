import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado del usuario

    const login = (userData) => {
        setUser(userData); // Establecer usuario al iniciar sesión
    };

    const logout = () => {
        setUser(null); // Limpiar usuario al cerrar sesión
    };

    return (
        <AppContext.Provider value={{ user, login, logout }}>
            {children}
        </AppContext.Provider>
    );
};