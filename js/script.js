//Definimos items de producto
let productos = []

//Definimos un carrito vacio
let carrito = []

//Comprobamos si el carro esta vacio al guardar en localStorage
let carritoViejo = localStorage.getItem('savedcarrito')
if (carritoViejo !== null) {
    carrito = JSON.parse(carritoViejo)
    mostrarCarrito(carrito);
}

//Agregaoms items al carrito
productos.push({ id: 1, nombre: 'Remera rayada', precio: 12000, cantidad: 1, img: 'remera italy.png' });
productos.push({ id: 2, nombre: 'Remera negra', precio: 9000, cantidad: 1, img: 'remera M.png' });
productos.push({ id: 3, nombre: "Pantalon Cargo", precio: 25000, cantidad: 1, img: 'cargo.png' });
productos.push({ id: 4, nombre: "Pantalon jean", precio: 39000, cantidad: 1, img: 'Jean1.png' });

//Un contenedor para trabajar el HTML desde JS
const contenedor = document.getElementById("contenedor");

//Funcion agregar producto por el usuario
function agregarItem(producto) {
    let index = carrito.findIndex(p => p.id == producto.id)
    if (index >= 0) carrito[index].cantidad++;
    else carrito.push(producto);
    //console.debug(carrito);
    guardar(carrito)
    mostrarCarrito(carrito);
}

//Funcion quitar el producto por el usuario
function quitarItem(producto) {
    let index = carrito.findIndex(p => p.id == producto.id);
    if (index >= 0) carrito.splice(index, 1);
    //console.debug(carrito);
    guardar(carrito);
    mostrarCarrito(carrito);
}

//Guarda en memoria localStorage
function guardar(carroNuevo) {
    localStorage.setItem('savedcarrito', JSON.stringify(carroNuevo));
}

//Mostrar los productos desde la pagina
productos.forEach(producto => {
    const div = document.createElement("div")
    div.innerHTML =
        `<div class="card">
    <div class="card-body">
      <img class= "imagen" src="./assets/img/${producto.img}">
    </div>
     <div class="card-title">
      <h2>${producto.nombre}</h2>
    </div>
    <div class="card-footer">
      <div class="price">
        <span>$ARS ${producto.precio}</span>
      </div class="buttons">
      <button id="agregar" class="add">Agregar al carrito</button>
      <button id="quitar" class="quit">Quitar del carrito</button>
    </div>
  </div>`;
    div.querySelector('button.add').addEventListener('click', () => { agregarItem(producto) });
    div.querySelector('button.quit').addEventListener('click', () => { quitarItem(producto) });
    contenedor.append(div);
})

//Mostrar el carrito del usuario desde la pagina
function mostrarCarrito(carro) {
    const elemento = document.getElementById('carrito');
    elemento.innerHTML = "";

    carro.forEach(producto => {
        const p = document.createElement('p');
        p.innerHTML = `
        ${producto.id} | ${producto.nombre} | Cantidad: ${producto.cantidad} | Precio: $${producto.precio} | Total: $${producto.precio * producto.cantidad}
      `;
        elemento.append(p);
    });
}