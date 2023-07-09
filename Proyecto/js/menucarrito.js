// SALE EL DESPLEGABLE DEL CARRITO

const verCarrito = document.querySelector(".btncarrito")

const carroContenedor = document.querySelector(".carritonuevo")

const emptyCart = document.querySelector(".empty-cart");

//contador productos

const countProducts = document.querySelector('.contador_productos');

//total pago y pintar carrito

const rowProduct = document.querySelector('.main-articulos')

const valorTotal = document.querySelector('.total-pagar');

const cartInfo = document.querySelector('.unarti')

const carritoinfo = document.querySelector('.cart-info')

const contArt = document.querySelector(".contenedor-articulos")

//constante botones sumar y restar

let btnSumar = document.querySelector(".boton__sumar")

let btnRestar = document.querySelector(".boton__restar")

//desplegar carrito

verCarrito.addEventListener("click", () => {
  carroContenedor.classList.toggle('hidden-carritonuevo');
});


//añado  -- añadir al carro?

const shopContent = document.getElementById("shopContent");

const modalContainer = document.getElementById("modal-container");

const product = document.querySelectorAll(".container-articulo")

let allProducts = []

const zapatillas = document.querySelector(".zapatillas");

//añadir al carrito

zapatillas.addEventListener("click", e => {

  const padre = e.target.parentElement;
 

  if (e.target.classList.contains("addToCart")) {
    const comprar = e.target.parentElement;
  
    const containerArticulo = comprar.parentElement;
   

    const infoProduct = {
      quantity: 1,
      title: containerArticulo.querySelector("h5").textContent,
      precio: containerArticulo.querySelector("span").textContent,
      img: containerArticulo.children[0].children[2].src,
      talla: containerArticulo.children[2].children[1].value,
    }
    // console.log(infoProduct)

    const exists = allProducts.some(product => product.title === infoProduct.title);

    if (exists) {
      const existalla = allProducts.some(product => (product.title === infoProduct.title) && (product.talla === infoProduct.talla));
      if (existalla) {
        const products = allProducts.map(product => {
          if ((product.title === infoProduct.title) && (product.talla === infoProduct.talla)) {
            product.quantity++;
            return product;
          } else {
            return product;
          }
        })
        console.log('esta');

        allProducts = [...products];
      } else {
        allProducts = [...allProducts, infoProduct];
      }
    }
    else {
      allProducts = [...allProducts, infoProduct];
    }
    console.log(allProducts);
    showHTML();

    //aqui añado
            
    //console.log(infoProduct.img);
  }
})


//carrito cerrar con X 

const cerrarCarro = document.querySelector(".close-btn");
cerrarCarro.addEventListener("click", e =>{
  carroContenedor.classList.toggle('hidden-carritonuevo');
})

//emptycart si no hay productos


const showHTML = () =>{

  if(allProducts.length==0){
      emptyCart.style.display = 'block';
  }else{
      emptyCart.style.display = 'none';
  }

  let total = 0; 
  let totalOfProducts = 0;


  // pintar productos carrito

  contArt.innerHTML = '';
  
  allProducts.forEach(product =>{
    console.log(product);

    const productoCreado = document.createElement('div');

    productoCreado.classList.add('unarti');

    productoCreado.innerHTML = `

      <div class="cart-info" >
        <img class="artic-img" src="${product.img}">
        <div class="texto-cart">
          <p class="titulo-producto-carrito">${product.title}</p>
          <span class="precio-producto-carrito">${product.precio}</span>
          <span class="talla-producto-carrito">Talla: <span class="tall">${product.talla}<span/></span>
        </div>
      </div>

      <div class="container_btn">
        <button class="boton__sumar">+</button>
        <span class="cantidad">${product.quantity}</span>
        <button class="boton__restar">-</button>
      </div>

      <div class="papelera">
        <button class="btn_papelera"><img class="papelera-img" src="img/iconopapelera.png" alt=""></button>
      </div>
      `;

      //total precio y contador productos en icono

    contArt.append(productoCreado);

    total = total + parseInt(product.quantity) * parseFloat(product.precio);

    totalOfProducts = totalOfProducts + product.quantity;

  });

  valorTotal.innerText = `€${total}`;
  
  countProducts.innerText = totalOfProducts;

};

showHTML();

// funcion de sumar restar y eliminar-papelera

contArt.addEventListener("click", (e) =>{
  console.log("entra evento")

  if (e.target.classList.contains("boton__sumar")) {
    console.log("entra sumar")

    const padre = e.target.parentElement;

    const abuelo = padre.parentElement;

    let titulo = abuelo.querySelector(".titulo-producto-carrito").textContent.trim();

    let talla = abuelo.querySelector(".tall").textContent.trim();
    console.log(titulo);
    console.log(talla);

    const products = allProducts.map(product => {
      if ((product.title.trim() === titulo) && (product.talla.trim() === talla)) {
        console.log("entra");
        product.quantity++;
        return product;
      } else {
        return product;
      }
    })
    console.log('esta');

    allProducts = [...products];
    console.log(allProducts);
    showHTML();

  }else{

    if (e.target.classList.contains("boton__restar")){

    const padre = e.target.parentElement;

    const abuelo = padre.parentElement;

    let titulo = abuelo.querySelector(".titulo-producto-carrito").textContent.trim();

    let talla = abuelo.querySelector(".tall").textContent.trim();

    let cantidad = abuelo.querySelector(".cantidad");

    console.log(titulo);
    console.log(talla);
    const products = allProducts.map(product => {
      if ((product.quantity !== 1) && (product.title.trim() === titulo) && (product.talla.trim() === talla)) {
        console.log("resta");
        product.quantity--;
        return product;
      } else {
        return product;
      }
  })
  allProducts = [...products];
  console.log(allProducts);
  showHTML();

  }}

  });

  contArt.addEventListener("click", (e) =>{

    if (e.target.classList.contains("papelera-img")) {
      console.log("basura");
  
      const padre = e.target.parentElement;
  
      const abuelo = padre.parentElement;

      const bisabuelo = abuelo.parentElement;
      console.log("carajo");
      let titulo = bisabuelo.querySelector(".titulo-producto-carrito").textContent.trim();
      console.log("prueba");
      
      allProducts = allProducts.filter(
        product => product.title.trim() !== titulo
      );

    }

    showHTML();
      console.log(allProducts);
  });


//like y no like (toggle)

zapatillas.addEventListener("click", (e) =>{

  if (e.target.classList.contains("foto-like1"))  {
    console.log("like")

    const padre = e.target.parentElement;

    const abuelo = padre.parentElement;

    const like = abuelo.querySelector(".foto-like2");

    like.classList.toggle('hidden-foto');

    e.target.style.display= "none";
  }
    });

    zapatillas.addEventListener("click", (e) =>{

      if (e.target.classList.contains("foto-like2"))  {
        console.log("ea")
    
        const padre = e.target.parentElement;
    
        const abuelo = padre.parentElement;
    
        const likeo = abuelo.querySelector(".foto-like1");
    
        likeo.style.display= "flex";
    
        e.target.classList.toggle('hidden-foto');
        
      }
        });

    //Pintar wishlist

    // Creamos una variable para verificar si el modal está visible o no
let modalVisible = false;

// Creamos el elemento del header del modal y el botón para cerrar el modal
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header"
modalHeader.innerHTML = `
  <p class="modal-header-title">WishList😍❤️❤️😍</p>
`;

const modalButton = document.createElement("h1");
modalButton.innerText = "X";
modalButton.className = "modal-header-button";

// Agregamos el evento click al botón para cerrar el modal
modalButton.addEventListener("click", () => {
  modalVisible = false;
  modalContainer.style.display = "none";
});

modalHeader.append(modalButton);

// Definimos la función que muestra u oculta el modal
const wishList = () => {
  // Verificamos si el modal está visible o no
  if (!modalVisible) {
    // Si el modal no está visible, creamos el header del modal y lo agregamos al contenedor
    modalContainer.innerHTMl = "";
    modalContainer.style.display = "flex";
    modalContainer.append(modalHeader);
  } else {
    // Si el modal ya está visible, simplemente lo ocultamos
    modalContainer.style.display = "none";
  }

  // Cambiamos el valor de la variable modalVisible para que la próxima vez que se haga clic en el botón,
  // se realice la acción opuesta (es decir, si el modal está visible, se ocultará y viceversa)
  modalVisible = !modalVisible;
}
// Agregamos el manejador de eventos click al botón que abre el modal

const verWishlist = document.querySelector(".like")
verWishlist.addEventListener("click", wishList);

