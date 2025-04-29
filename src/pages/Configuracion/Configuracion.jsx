import React, { useState } from 'react';

const Configuracion = () => {
    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: "Juan Pérez", rol: "Almacenista" },
        { id: 2, nombre: "Ana Gómez", rol: "Transportista" },
    ]);

    const [sensores, setSensores] = useState([
        { id: 1, tipo: "Temperatura", umbral: "4°C" },
        { id: 2, tipo: "Humedad", umbral: "85%" },
    ]);

    const [parametros, setParametros] = useState({
        empresa: "Distribuidora de Pollo Zipa",
        politicaFIFO: true,
    });

    const handleParametroChange = (e) => {
        const { name, type, value, checked } = e.target;
        setParametros({
            ...parametros,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Configuración</h1>
            <p className="mb-4">Aquí puedes gestionar usuarios, sensores y parámetros del sistema.</p>

            {/* Sección: Usuarios */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Usuarios del sistema</h2>
                <ul className="list-disc pl-6 bg-white p-4 rounded shadow-sm">
                    {usuarios.map((u) => (
                        <li key={u.id}>{u.nombre} - <span className="text-gray-600">{u.rol}</span></li>
                    ))}
                </ul>
            </div>

            {/* Sección: Sensores */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Sensores IoT</h2>
                <ul className="list-disc pl-6 bg-white p-4 rounded shadow-sm">
                    {sensores.map((s) => (
                        <li key={s.id}>{s.tipo} - Umbral: <span className="text-gray-600">{s.umbral}</span></li>
                    ))}
                </ul>
            </div>

            {/* Sección: Parámetros del sistema */}
            <div className="mb-6 bg-white p-4 rounded shadow-sm">
                <h2 className="text-lg font-semibold mb-2">Parámetros del sistema</h2>
                <div className="flex flex-col gap-3">
                    <label className="block">
                        Nombre de la empresa:
                        <input
                            type="text"
                            name="empresa"
                            value={parametros.empresa}
                            onChange={handleParametroChange}
                            className="input mt-1"
                        />
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="politicaFIFO"
                            checked={parametros.politicaFIFO}
                            onChange={handleParametroChange}
                        />
                        Aplicar política FIFO
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Configuracion;
