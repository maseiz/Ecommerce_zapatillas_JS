//BURGUER
const menu = document.querySelector('.container__hamburguer');
const menuResponsive = document.querySelector('.menu__nav');


menu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu__hidden');
})

//CARRITO

const articulos = document.querySelector('.articulo1');
const carrito = docuement.querySelector('.main__articulos');
const resumenPedido = document.querySelector('.main__pagos');


 articulos.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn_papelera')){

      

      
    }
 })













//

// Seleccionar los botones de suma y resta y la etiqueta de cantidad
//const botonSumar = document.querySelector(".boton__sumar");
//const botonRestar = document.querySelector(".boton__restar");
//const cantidadEtiqueta = document.querySelector(".cantidad");
 

// Agregar evento click al botón de suma
//botonSumar.addEventListener("click", () => {
  // Obtener la cantidad actual de productos en el carrito
//  let cantidad = parseInt(cantidadEtiqueta.innerText);
  // Aumentar la cantidad en 1
//  cantidad += 1;
  // Actualizar la etiqueta de cantidad con el nuevo valor
//  cantidadEtiqueta.innerText = cantidad;
//});

// Agregar evento click al botón de resta
//botonRestar.addEventListener("click", () => {
  // Obtener la cantidad actual de productos en el carrito
//  let cantidad = parseInt(cantidadEtiqueta.innerText);
  // Disminuir la cantidad en 1, pero no puede ser menor que 1
//  cantidad = Math.max(cantidad - 1, 1);
  // Actualizar la etiqueta de cantidad con el nuevo valor
//  cantidadEtiqueta.innerText = cantidad;
//});
