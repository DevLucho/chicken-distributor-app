import React from 'react';

const Reportes = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Reportes</h1>
            <p className="mb-4">Descarga los reportes en formato PDF o Excel.</p>
            <div className="flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Descargar PDF
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                    Descargar Excel
                </button>
            </div>
        </div>
    );
};

export default Reportes;