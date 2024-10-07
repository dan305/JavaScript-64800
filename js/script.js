const login = () => {
    let usuario;
    
    alert("Bienvenido a TecnoDan, a continuacion iniciara con su usuario:")
    while (true) {
        usuario = prompt("Ingrese su usuario:");
        if (usuario.length < 8) {
            alert("Su usuario tiene menos de 8 caracteres. Inténtelo de nuevo.");
        } else {
            alert("Bienvenido, usted ingresó como: " + usuario);
            break; 
        }
    }
}

login();

const productos = [
    { nombre: 'Monitor', precio: 15000 },
    { nombre: 'Teclado', precio: 25000 },
    { nombre: 'Mouse', precio: 10000 }
];

let carrito = [];

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach((producto, comprita) => {
        mensaje += (comprita + 1) + '. ' + producto.nombre + ' - $' + producto.precio + '\n';
    });
    return mensaje;
}

function agregarAlCarrito(comprita) {
    carrito.push(productos[comprita]);
    alert(`Agregaste ${productos[comprita].nombre} al carrito.`);
    calcularTotalCarrito();
}

function calcularTotalCarrito() {
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    alert(`El total de tu carrito es: $${total}`);
}

function mostrarProductosCaros() {
    const productosCaros = productos.filter(producto => producto.precio > 20);
    if (productosCaros.length === 0) {
        alert('No hay productos caros disponibles.');
    } else {
        let mensaje = 'Productos caros disponibles:\n';
        productosCaros.forEach((producto, comprita) => {
            mensaje += (comprita + 1) + '. ' + producto.nombre + ' - $' + producto.precio + '\n';
        });
        alert(mensaje);
    }
}

function mostrarNombresProductos() {
    const nombresProductos = productos.map(producto => producto.nombre);
    console.log('Nombres de productos:', nombresProductos);
}

function comprarProducto() {
    let seleccion;
    while (true) {
        const productosLista = mostrarProductos();
        seleccion = prompt(`Selecciona el número del producto que deseas comprar:\n${productosLista}`);
        
        if (seleccion === null) {
            
            break;
        }

        const compritaSeleccionado = parseInt(seleccion) - 1;

        if (compritaSeleccionado >= 0 && compritaSeleccionado < productos.length) {
            const confirmar = confirm(`¿Estás seguro de que quieres comprar ${productos[compritaSeleccionado].nombre}?`);
            if (confirmar) {
                agregarAlCarrito(compritaSeleccionado);
                break; 
            }
        } else {
            alert('Por favor selecciona un número válido.');
        }
    }
}

comprarProducto();

mostrarNombresProductos();
