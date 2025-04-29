// Simulated delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Simulated user data
const mockUser = {
    id: 1,
    name: "Admin User",
    role: "Administrator",
};

// Simulated inventory data
const mockInventory = [
    { id: 1, name: "Pollo Entero", lote: "A123", fechaCaducidad: "2025-05-01", cantidad: 100, qr: "QR123" },
    { id: 2, name: "Pechuga", lote: "B456", fechaCaducidad: "2025-05-10", cantidad: 200, qr: "QR456" },
];

// Simulated dispatch data
const mockDispatches = [
    { id: 1, route: "Zipaquirá - Bogotá", status: "En camino" },
    { id: 2, route: "Zipaquirá - Chía", status: "Entregado" },
];

// Simulated report data
const mockReports = [
    { id: 1, name: "Reporte de Inventario", format: "PDF" },
    { id: 2, name: "Reporte de Despachos", format: "Excel" },
];

// Simulated login function
export const loginUser = async (credentials) => {
    await delay(500); // Simulate network delay
    if (credentials.username === "admin" && credentials.password === "password") {
        return { success: true, user: mockUser };
    } else {
        throw new Error("Credenciales inválidas");
    }
};

// Simulated fetch inventory function
export const fetchInventory = async () => {
    await delay(500); // Simulate network delay
    return mockInventory;
};

// Simulated add product function
export const addProduct = async (product) => {
    await delay(500); // Simulate network delay
    const newProduct = { id: mockInventory.length + 1, ...product };
    mockInventory.push(newProduct);
    return newProduct;
};

// Simulated update product function
export const updateProduct = async (productId, updatedProduct) => {
    await delay(500); // Simulate network delay
    const index = mockInventory.findIndex((item) => item.id === productId);
    if (index !== -1) {
        mockInventory[index] = { ...mockInventory[index], ...updatedProduct };
        return mockInventory[index];
    } else {
        throw new Error("Producto no encontrado");
    }
};

// Simulated delete product function
export const deleteProduct = async (productId) => {
    await delay(500); // Simulate network delay
    const index = mockInventory.findIndex((item) => item.id === productId);
    if (index !== -1) {
        const deletedProduct = mockInventory.splice(index, 1);
        return deletedProduct[0];
    } else {
        throw new Error("Producto no encontrado");
    }
};

// Simulated fetch dispatches function
export const fetchDispatches = async () => {
    await delay(500); // Simulate network delay
    return mockDispatches;
};

// Simulated fetch reports function
export const fetchReports = async () => {
    await delay(500); // Simulate network delay
    return mockReports;
};