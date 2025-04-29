import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Inventario from '../pages/Inventario/Inventario';
import Almacenamiento from '../pages/Almacenamiento/Almacenamiento';
import Despachos from '../pages/Despachos/Despachos';
import Reportes from '../pages/Reportes/Reportes';
import Configuracion from '../pages/Configuracion/Configuracion';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const AppRoutes = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/inventario" element={<Inventario />} />
                    <Route path="/almacenamiento" element={<Almacenamiento />} />
                    <Route path="/despachos" element={<Despachos />} />
                    <Route path="/reportes" element={<Reportes />} />
                    <Route path="/configuracion" element={<Configuracion />} />
                </Routes>
            </div>
        </div>
    );
};

export default AppRoutes;