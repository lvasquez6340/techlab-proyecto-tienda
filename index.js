import fetch from 'node-fetch'; // 

// 1. Capturamos los argumentos de la terminal usando process.argv
// Excluimos los primeros dos elementos por defecto de Node (ruta de node y ruta del script)
const args = process.argv.slice(2);

//URL de FakeStore API
const BASE_URL = 'https://fakestoreapi.com';

// 2. Función principal (comandos de la tienda)
async function gestionarTienda() {
  if (args.length === 0) {
    console.log('⚠️ Por favor ingresa un comando. Ejemplo: npm run start GET products');
    return;
  }

  // Extraemos la acción (GET, POST, DELETE) y la ruta o recurso
  const [accion, recurso, ...restoArgs] = args;

  try {
    // CASO 1: CONSULTAR TODOS LOS PRODUCTOS O UNO ESPECÍFICO (GET)
    if (accion === 'GET' && recurso.startsWith('products')) {
      // Usamos strings methods para verificar si pide un ID específico (ej: products/15)
      const tieneId = recurso.includes('/');
      
      const url = `${BASE_URL}/${recurso}`;
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      if (tieneId) {
        console.log(`\n📦 Producto específico encontrado (ID: ${datos.id}):`);
      } else {
        console.log(`\n📋 Lista completa de productos (${datos.length} ítems cargados):`);
      }
      console.log(datos);
    }

    // CASO 2: CREAR UN NUEVO PRODUCTO (POST)
    else if (accion === 'POST' && recurso === 'products') {
      // Usamos rest/spread operator para manejar los argumentos dinámicos de texto introducidos
      // Ejemplo: T-Shirt-Rex 300 remeras -> title: 'T-Shirt-Rex', price: '300', category: 'remeras'
      const [title, price, category] = restoArgs;

      if (!title || !price || !category) {
        console.log('⚠️ Faltan datos para crear el producto. Estructura: POST products <title> <price> <category>');
        return;
      }

      // Destructuring implícito
      const nuevoProducto = {
        title,
        price: parseFloat(price),
        description: 'Producto registrado desde la consola de comandos TechLab.',
        image: 'https://pravatar.cc',
        category
      };

      const respuesta = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto)
      });
      
      const datosCreados = await respuesta.json();
      console.log('\n✅ ¡Producto creado exitosamente en el servidor simulado!');
      console.log(datosCreados);
    }

    // CASO 3: ELIMINAR UN PRODUCTO 
    else if (accion === 'DELETE' && recurso.startsWith('products/')) {
      const respuesta = await fetch(`${BASE_URL}/${recurso}`, {
        method: 'DELETE'
      });
      const datosEliminados = await respuesta.json();

      console.log(`\n🗑️ Operación realizada. Producto eliminado del servidor simulado:`);
      console.log(datosEliminados);
    }

    // MANEJO DE COMANDOS INVÁLIDOS
    else {
      console.log('❌ Comando no reconocido o sintaxis incorrecta.');
      console.log('Prueba con: GET products, GET products/15, POST products <title> <price> <category>, o DELETE products/<id>');
    }

  } catch (error) {
    console.error('🔴 Hubo un error al interactuar con el servidor de FakeStore:', error.message);
  }
}

// Ejecutamos la tienda
gestionarTienda();
