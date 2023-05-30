const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

productos.forEach((producto) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.producto}</h3>
    <p class="price">${producto.precio}$</p>
    `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerHTML = "Agregar al carrito";
  comprar.className = "button";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    carrito.push({
      id: producto.id,
      img: producto.img,
      producto: producto.producto,
      precio: producto.precio,
    });
    console.log(carrito);
  });
});
