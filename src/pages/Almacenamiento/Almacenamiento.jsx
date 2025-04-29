import React from 'react';

const Almacenamiento = () => {
    // Simulated environmental data
    const environmentalData = {
        temperature: '22°C',
        humidity: '55%',
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Almacenamiento</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Condiciones Ambientales</h2>
                <p className="mb-2">Temperatura: {environmentalData.temperature}</p>
                <p>Humedad: {environmentalData.humidity}</p>
            </div>
        </div>
    );
};

export default Almacenamiento;