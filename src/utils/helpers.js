export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-CO', options);
};

export const calculateInventoryValue = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const handleApiError = (error) => {
    console.error('API Error:', error);
    return { success: false, message: 'An error occurred. Please try again later.' };
};