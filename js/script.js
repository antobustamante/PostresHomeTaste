let carrito = [];

if (localStorage.getItem("carrito") != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  let aux = 0;
  for(let i = 0; i < carrito.length; i++){
    aux += carrito[i].precio;
  }
  $("#precio-total").html("$" + aux);
}

class Producto {
    constructor(
        nombreTorta,
        precioTorta,
        porcionesTorta,
        stockTorta,
        imgTorta
    )

    {
        this.nombre = nombreTorta;
        this.precio = precioTorta;
        this.porciones = porcionesTorta;
        this.stock = stockTorta;
        this.img = imgTorta;
    }
}

let baseDeDatos = [];

let productoUno = new Producto ("Torta de Chocolate", 500, 8, 3, "img/tortachoco.jpg");
let productoDos = new Producto ("Cheesecake de Frutos Rojos", 600, 6, 5, "img/cheesecake.jpg");
let productoTres = new Producto ("Chocotorta", 400, 10, 8, "img/chocotorta.jpg");
let productoCuatro = new Producto ("Torta Home Taste", 500, 8, 4, "img/tortafrutillas.jpg");
let productoCinco = new Producto ("Lemon Pie", 450, 6, 9, "img/lemonpie.jpg");
let productoSeis = new Producto ("Tiramisú", 600, 8, 2, "img/tiramisu.jpg");

baseDeDatos.push(productoUno);
baseDeDatos.push(productoDos);
baseDeDatos.push(productoTres);
baseDeDatos.push(productoCuatro);
baseDeDatos.push(productoCinco);
baseDeDatos.push(productoSeis);

let aux = ``;

for(let i = 0; i<baseDeDatos.length; i++){
    aux += `
    <div class="col">
      <div class="card h-100">
        <img src="${baseDeDatos[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${baseDeDatos[i].nombre}</h5>
          <p class="card-text">Descripción del producto</p>
        </div>
        <div class="card-footer">
          <input class="btn btn-primary" type="button" onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[i])})' value="Agregar al carrito">
          <small class="text-muted">Precio: ${baseDeDatos[i].precio}</small>
        </div>
      </div>
    </div>
    `;
}

$("#producto").html(aux);

function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  let aux = 0;
  for(let i = 0; i < carrito.length; i++){
    aux += carrito[i].precio;
  }
  $("#precio-total").html("$" + aux);
}
