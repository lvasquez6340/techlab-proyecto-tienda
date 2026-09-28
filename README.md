# TechLab - Proyecto Tienda CLI (Pre-Entrega)

¡Hola! Este es el repositorio de mi pre-entrega para el proyecto de **TechLab**. Desarrollé una aplicación de consola (CLI) interactiva en **JavaScript** utilizando **Node.js** que se conecta directamente con un servidor externo para administrar los productos de una tienda virtual.

El proyecto pone en práctica conceptos avanzados del lenguaje como el manejo de la asincronía (`async/await`), el consumo de APIs a través de peticiones HTTP con `fetch`, y el procesamiento de argumentos dinámicos mediante la terminal de comandos con `process.argv`.

---

## 🛠️ Tecnologías utilizadas

* **JavaScript (ES6+)** como lenguaje principal.
* **Node.js** como entorno de ejecución local (Configurado con `"type": "module"`).
* **node-fetch** para la comunicación asíncrona con el servidor.
* **FakeStore API** como base de datos y servidor simulado para el catálogo.

---

## 🚀 Guía de Comandos para Probar la Aplicación

Para evaluar el correcto funcionamiento del sistema CRUD, puedes ejecutar los siguientes comandos directamente desde la terminal del editor:

### 1. Consultar todos los productos (GET)
Muestra en pantalla el catálogo completo con los 20 ítems precargados de la tienda (Ropa, Electrónica, Joyería):
```bash
npm run start GET products
```

### 2. Consultar un producto específico por ID (GET)
Filtra la base de datos y extrae únicamente la información de un solo producto (por ejemplo, el ID 15):
```bash
npm run start GET products/15
```

### 3. Crear un nuevo producto (POST)
Envía un objeto estructurado en formato JSON hacia el servidor para dar de alta un artículo. La API simula la creación asignándole automáticamente el ID 21:
```bash
npm run start POST products Camiseta-TechLab 150 ropa
```

### 4. Eliminar un producto (DELETE)
Envía una orden de baja para un recurso específico utilizando su número de identificador (por ejemplo, el ID 7):
```bash
npm run start DELETE products/7
```

---

## 📦 Instalación y Configuración Local

Si clonas este repositorio en tu computadora, recuerda ejecutar el siguiente comando en la raíz del proyecto para instalar las dependencias necesarias antes de testearlo:

```bash
npm install
```
