import React from 'react';

const Dashboard = () => {
    const metrics = [
        { title: "Inventario Actual", value: "1500 kg", icon: "📦" },
        { title: "Pérdidas", value: "50 kg", icon: "❌" },
        { title: "Eficiencia de Rutas", value: "85%", icon: "🚚" },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Panel</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {metrics.map((metric) => (
                    <div
                        key={metric.title}
                        className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4"
                    >
                        <div className="text-4xl">{metric.icon}</div>
                        <div>
                            <h2 className="text-xl font-semibold">{metric.title}</h2>
                            <p className="text-2xl">{metric.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;