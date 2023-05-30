verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
      <h1 class="modal-header-title">Carrito</h1>
    `;
  
    modalContainer.append(modalHeader);
  
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
  
    modalbutton.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });
  
    modalHeader.append(modalbutton);
  
    carrito.forEach((producto) => {
      let carritoContent = document.createElement("div");
      carritoContent.className = "modal-content";
      carritoContent.innerHTML = `
          <img src="${producto.img}">
          <h3>${producto.producto}</h3>
          <p> ${producto.precio}$</p>
      `;
  
      modalContainer.append(carritoContent);
    });
  
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  
    const compraTotal = document.createElement("div");
    compraTotal.className = "total-content";
    compraTotal.innerHTML = `Total a pagar: ${total}$`;
    modalContainer.append(compraTotal);
  });
  