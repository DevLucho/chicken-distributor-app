import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AppContext); // Usar la función login del contexto
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Simular lógica de autenticación
        if (username === 'admin' && password === 'password') {
            const userData = { name: 'Admin User', role: 'Administrator' }; // Datos simulados del usuario
            login(userData); // Actualizar el estado del usuario en el contexto
            navigate('/dashboard'); // Redirigir al Dashboard
        } else {
            setError('Usuario o contraseña inválidos');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4 w-full">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;