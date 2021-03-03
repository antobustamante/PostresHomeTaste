let carrito = [];

if (localStorage.getItem("carrito") != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  let aux = 0;
  for(let i = 0; i < carrito.length; i++){
    aux += carrito[i].precio;
  }
  $("#precio-total").html("$" + aux);
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
}
)

function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  let aux = 0;
  for(let i = 0; i < carrito.length; i++){
    aux += carrito[i].precio;
  }
  $("#precio-total").html("$" + aux);
}

  

