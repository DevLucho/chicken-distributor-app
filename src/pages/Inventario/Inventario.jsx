import React, { useState } from 'react';

const Inventario = () => {
    const [productos, setProductos] = useState([
        { id: 1, nombre: "Pechuga", lote: "L001", caducidad: "2025-06-01", cantidad: 100 },
        { id: 2, nombre: "Muslo", lote: "L002", caducidad: "2025-05-15", cantidad: 80 },
    ]);

    const [nuevoProducto, setNuevoProducto] = useState({
        nombre: "",
        lote: "",
        caducidad: "",
        cantidad: "",
    });

    const [editando, setEditando] = useState(null);

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto({ ...nuevoProducto, [name]: value });
    };

    // Agregar un nuevo producto
    const agregarProducto = (e) => {
        e.preventDefault();
        if (!nuevoProducto.nombre || !nuevoProducto.lote || !nuevoProducto.caducidad || !nuevoProducto.cantidad) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        setProductos([
            ...productos,
            { id: productos.length + 1, ...nuevoProducto, cantidad: parseInt(nuevoProducto.cantidad) },
        ]);
        setNuevoProducto({ nombre: "", lote: "", caducidad: "", cantidad: "" });
    };

    // Eliminar un producto
    const eliminarProducto = (id) => {
        setProductos(productos.filter((producto) => producto.id !== id));
    };

    // Editar un producto
    const iniciarEdicion = (producto) => {
        setEditando(producto.id);
        setNuevoProducto(producto);
    };

    const guardarEdicion = (e) => {
        e.preventDefault();
        setProductos(
            productos.map((producto) =>
                producto.id === editando ? { ...producto, ...nuevoProducto } : producto
            )
        );
        setEditando(null);
        setNuevoProducto({ nombre: "", lote: "", caducidad: "", cantidad: "" });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Inventario</h1>

            {/* Formulario para agregar o editar productos */}
            <form
                onSubmit={editando ? guardarEdicion : agregarProducto}
                className="mb-4 bg-gray-100 p-4 rounded shadow-md"
            >
                <h2 className="text-xl font-semibold mb-2">
                    {editando ? "Editar Producto" : "Agregar Producto"}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={nuevoProducto.nombre}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="lote"
                        placeholder="Lote"
                        value={nuevoProducto.lote}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                    <input
                        type="date"
                        name="caducidad"
                        placeholder="Fecha de Caducidad"
                        value={nuevoProducto.caducidad}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                    <input
                        type="number"
                        name="cantidad"
                        placeholder="Cantidad"
                        value={nuevoProducto.cantidad}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {editando ? "Guardar Cambios" : "Agregar Producto"}
                </button>
            </form>

            {/* Tabla de productos */}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Nombre</th>
                        <th className="border border-gray-300 p-2">Lote</th>
                        <th className="border border-gray-300 p-2">Caducidad</th>
                        <th className="border border-gray-300 p-2">Cantidad</th>
                        <th className="border border-gray-300 p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td className="border border-gray-300 p-2">{producto.nombre}</td>
                            <td className="border border-gray-300 p-2">{producto.lote}</td>
                            <td className="border border-gray-300 p-2">{producto.caducidad}</td>
                            <td className="border border-gray-300 p-2">{producto.cantidad}</td>
                            <td className="border border-gray-300 p-2 flex gap-2">
                                <button
                                    onClick={() => iniciarEdicion(producto)}
                                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => eliminarProducto(producto.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inventario;