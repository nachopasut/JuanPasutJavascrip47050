class Item {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}
const pocion = new Item("Poción de Vida", 100, "pocion.png");
const espada = new Item("Espada", 180, "espada.png");
const escudo = new Item("Escudo", 90, "escudo.png");

const inventario = [];
let plata = 500;
const elDinero = document.querySelector("#Dinero span");
elDinero.innerText = plata; 
const elInventario = document.getElementById("inventario");

function comprar(itemDelJuego) {
  
  if (plata - itemDelJuego.precio >= 0) {
    inventario.push(itemDelJuego);
    plata -= itemDelJuego.precio; 
    actualizarHTML();
  } else {
    alert(`No tenés la plata suficiente para comprar ${itemDelJuego.nombre}.`);
  }
}
function vender(nombreDelItem) {
 
  const itemEncontrado = inventario.find((item) => item.nombre == nombreDelItem);

  if (itemEncontrado) {
    // Actualizamos el oro
    oro += itemEncontrado.precio;
   
    const indice = inventario.indexOf(itemEncontrado);
    inventario.splice(indice, 1);
   
    actualizarHTML();
  }
}

function actualizarHTML() {
  elInventario.innerHTML = "";
  for (const itemDelJuego of inventario) {
    const li = `
    <li onclick="vender('${itemDelJuego.nombre}')">
      <img src="img/${itemDelJuego.imagen}" alt="${itemDelJuego.imagen}" />
    </li>
    `;
   
    elInventario.innerHTML += li;
  }

  elDinero.innerText = plata;
}