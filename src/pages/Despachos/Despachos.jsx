import React from 'react';

const Despachos = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Despachos</h1>
            <p className="mb-2">Visualiza las rutas optimizadas para los despachos de pollo.</p>
            <div className="border rounded-lg p-4">
                <h2 className="text-xl font-semibold">Mapa de Rutas</h2>
                <iframe
                    title="Mapa de Rutas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789!2d-74.123456789!3d5.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a1234567890ab%3A0x1234567890abcdef!2sZipaquir%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1234567890123"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Despachos;