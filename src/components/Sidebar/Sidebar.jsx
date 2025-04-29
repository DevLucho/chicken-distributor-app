import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const menuItems = [
        { name: "Panel", path: "/dashboard", icon: "📊" },
        { name: "Inventario", path: "/inventario", icon: "📦" },
        { name: "Almacenamiento", path: "/almacenamiento", icon: "🌡️" },
        { name: "Despachos", path: "/despachos", icon: "🚚" },
        { name: "Reportes", path: "/reportes", icon: "📄" },
        { name: "Configuración", path: "/configuracion", icon: "⚙️" },
    ];

    return (
        <div className="bg-gray-800 text-white w-64 h-screen flex flex-col">
            <div className="p-4 text-center text-2xl font-bold border-b border-gray-700">
                Distribuidora de Pollo
            </div>
            <nav className="flex-1 mt-4">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.name} className="hover:bg-gray-700">
                            <NavLink
                                to={item.path}
                                className="flex items-center gap-3 p-4 text-lg"
                                activeClassName="bg-gray-700"
                            >
                                <span>{item.icon}</span>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;