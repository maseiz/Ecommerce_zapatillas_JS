// burger
const menu = document.querySelector('.icono_burguer');
const menuResponsive = document.querySelector('.menu_nav');

menu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu_hidden');
})

// desplegable orden
const ordenar = document.querySelector('.icono_flecha');
const ordenResponsive = document.querySelector('.orden_nav');

ordenar.addEventListener('click', () => {
    ordenResponsive.classList.toggle('orden_hidden');
})



// carrito


//  productos.forEach((product) => {
//  let content = document.createElement("div");
//  content.innerHTML = `
//  <img src="${product.img}">
//  <h3>${product.nombre}</h3>
//  <p>${product.precio} € </p>
//  `;

//  shopContent.append(content);

//  });



