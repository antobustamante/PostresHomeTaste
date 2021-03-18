let carrito = [];

if (localStorage.getItem("carrito") != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  let aux = 0;
  for(let i = 0; i < carrito.length; i++){
    aux += carrito[i].precio;
  }
  $("#precio-total").html("Total: $" + aux);
}

let baseDeDatos = [];

$.get(
  "../data.json",
  function (valores) {
  baseDeDatos = valores;

  let aux = ``;

  for(let i = 0; i<baseDeDatos.length; i++){
      aux += `
      <div class="col">
        <div class="card h-100">
          <img src="${baseDeDatos[i].img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${baseDeDatos[i].nombre}</h5>
            <p class="card-text">${baseDeDatos[i].descripcion}</p>
          </div>
          <div class="card-footer">
            <input class="btn btn-primary" type="button" onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[i])}); refresh()' value="Agregar al carrito">
            <small class="text-muted">Precio: ${baseDeDatos[i].precio}</small>
          </div>
        </div>
      </div>
      `;
  }

  $("#producto").html(aux);
  }
)

let mostrarCarrito = ``;

for(let i = 0; i<carrito.length; i++){
  localStorage.getItem("carrito");
  baseDeDatos=carrito;
  mostrarCarrito += `
  <div class="card" style="width: 18rem;">
    <img src="${baseDeDatos[i].img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${baseDeDatos[i].nombre}</h5>
      <p class="card-text">Precio por unidad: ${baseDeDatos[i].precio}</p>
      <a href="#" class="btn btn-secondary" onclick='borrarUnProducto(${JSON.stringify(baseDeDatos[i])})'>Borrar del carrito</a>
    </div>
  </div>
  `
}

$("#mostrarCarrito").html(mostrarCarrito);




function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  let aux = 0;
  for(let i = 0; i < carrito.length; i++){
    aux += carrito[i].precio;
  }
  $("#precio-total").html("$" + aux);
}

function borrarUnProducto(parametro){
  let nuevoCarrito = [];
  let aux=0;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre==parametro.nombre && aux==0) {
      carrito.splice(i,1);
      aux++;
    }
  }

nuevoCarrito=carrito;


localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

let mostrarCarrito=``;

for(let i = 0; i<carrito.length; i++){
  localStorage.getItem("carrito");
  baseDeDatos=carrito;
  mostrarCarrito += `
  <div class="card" style="width: 18rem;">
    <img src="${baseDeDatos[i].img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${baseDeDatos[i].nombre}</h5>
      <p class="card-text">Precio por unidad: ${baseDeDatos[i].precio}</p>
      <a href="#" class="btn btn-secondary" onclick='borrarUnProducto(${JSON.stringify(baseDeDatos[i])})'>Borrar del carrito</a>
    </div>
  </div>
  `
}

$("#mostrarCarrito").html(mostrarCarrito);

if (localStorage.getItem("carrito") != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  let aux = 0;
  for(let i = 0; i < carrito.length; i++){
    aux += carrito[i].precio;
  }
  $("#precio-total").html("Total: $" + aux);
} 

if (carrito.length==0){
  $("#mostrarCarrito").hide();
  let aux2 = `
  <p>Tu carrito está vacío</p>
  `
  $("#precio-total").html(aux2);
}
}

function refresh() {    
  window.location.reload();
}