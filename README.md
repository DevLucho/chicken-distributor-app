# Distribuidora de Pollo - Gestión de Inventario, Almacenamiento y Despachos

Este proyecto es una aplicación web diseñada para gestionar el inventario, almacenamiento y despachos de una distribuidora de pollo en Zipaquirá, Cundinamarca. La aplicación permite a los empleados realizar tareas como el manejo de inventario, monitoreo de condiciones ambientales, visualización de rutas de despacho y generación de reportes.

---

## **Características Principales**
1. **Autenticación de empleados**: Formulario de inicio de sesión para acceder al sistema.
2. **Panel de control (Dashboard)**: Visualización de métricas clave como inventario actual, pérdidas y eficiencia de rutas.
3. **Gestión de inventario**: CRUD (Crear, Leer, Actualizar, Eliminar) de productos, incluyendo lectura de códigos QR simulados.
4. **Monitoreo de almacenamiento**: Visualización de datos simulados de temperatura y humedad.
5. **Despachos**: Visualización de rutas optimizadas en un mapa embebido (Google Maps).
6. **Reportes**: Descarga de reportes en formato PDF o Excel.
7. **Configuración**: Gestión de usuarios, sensores y parámetros del sistema.

---

## **Tecnologías Utilizadas**
- **Frontend**: React, TailwindCSS, React Router.
- **Simulación de datos**: Datos ficticios manejados con `useState` y funciones simuladas.
- **Estilos**: TailwindCSS para un diseño moderno y responsivo.

---

## **Estructura del Proyecto**
```plaintext
chicken-distributor-app
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── [imágenes, íconos, etc.]
│   ├── components
│   │   ├── Header
│   │   │   └── Header.jsx
│   │   ├── Sidebar
│   │   │   └── Sidebar.jsx
│   │   └── LogoutButton
│   │       └── LogoutButton.jsx
│   ├── context
│   │   └── AppContext.jsx
│   ├── pages
│   │   ├── Login
│   │   │   └── Login.jsx
│   │   ├── Dashboard
│   │   │   └── Dashboard.jsx
│   │   ├── Inventario
│   │   │   └── Inventario.jsx
│   │   ├── Almacenamiento
│   │   │   └── Almacenamiento.jsx
│   │   ├── Despachos
│   │   │   └── Despachos.jsx
│   │   ├── Reportes
│   │   │   └── Reportes.jsx
│   │   └── Configuracion
│   │       └── Configuracion.jsx
│   ├── services
│   │   └── api.js
│   ├── utils
│   │   └── helpers.js
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── routes
│       └── AppRoutes.jsx
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

```

---

## **Cómo Ejecutar el Proyecto**

### **1. Clonar el repositorio**
```bash
git clone <URL_DEL_REPOSITORIO>
cd chicken-distributor-app
```

### **2. Instalar dependencias**
Asegúrate de tener Node.js instalado. Luego, ejecuta:
```bash
npm install
```

### **3. Iniciar el servidor de desarrollo**
```bash
npm start
```
La aplicación estará disponible en: `http://localhost:3000`.

---

## **Próximas Mejoras**
- Implementar una API real para manejar datos dinámicos.
- Agregar autenticación con JWT.
- Mejorar la accesibilidad (etiquetas ARIA, navegación por teclado).
- Implementar pruebas unitarias y de integración con Jest y React Testing Library.
- Desplegar la aplicación en plataformas como Vercel o Netlify.
