// filepath: c:\Users\luisd\Desktop\proyecto\chicken-distributor-app\src\context\AppContext.jsx
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Valor inicial de user es null
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(false);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const updateInventory = (newInventory) => {
        setInventory(newInventory);
    };

    return (
        <AppContext.Provider value={{ user, login, logout, inventory, updateInventory, loading, setLoading }}>
            {children}
        </AppContext.Provider>
    );
};