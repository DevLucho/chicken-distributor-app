import React, { useContext } from 'react';
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
import PrivateRoute from './PrivateRoute';
import { AppContext } from '../context/AppContext';

const AppRoutes = () => {
    const { user } = useContext(AppContext); // Obtener el estado del usuario desde el contexto

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <Routes>
                    {/* Redirección inicial basada en el estado del usuario */}
                    <Route
                        path="/"
                        element={<Navigate to={user ? "/dashboard" : "/login"} />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/inventario"
                        element={
                            <PrivateRoute>
                                <Inventario />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/almacenamiento"
                        element={
                            <PrivateRoute>
                                <Almacenamiento />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/despachos"
                        element={
                            <PrivateRoute>
                                <Despachos />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/reportes"
                        element={
                            <PrivateRoute>
                                <Reportes />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/configuracion"
                        element={
                            <PrivateRoute>
                                <Configuracion />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};

export default AppRoutes;