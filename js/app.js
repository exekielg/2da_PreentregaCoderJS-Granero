
// seleccionar contenedores
const shopContent = document.getElementById("container-products");
const verCarrito= document.getElementById("verCarrito");
const modalContainer= document.getElementById("modal-container");



//Creo un carro vacio
let carrito = [];



//defino funcion de Renderizado de productos
function renderProduct(product) {
    let content = document.createElement("div");
    content.classList.add('card', 'col-sm-4');
    content.innerHTML = `
    <img src="./images/shop/${product.imagen}" alt="${product.nombre}"/>
    <h3> ${product.nombre}</h3>
    <h4> $ ${product.precio } </h4>
    `
    shopContent.append(content);

    //Creo el Boton de Compra
    let comprar = document.createElement("button");
    comprar.className= "boton-comprar";
    comprar.innerText= "comprar";
    // Agrego el event listener al botón
    comprar.addEventListener("click", function() {
    // Agrega el producto al carrito
    carrito.push(product);
    // test de funcionamiento del boton.
    console.log("Producto agregado al carrito:", product);

    updateCarrito(); // Llama a la función para actualizar la interfaz del carrito
  
  });

  // finalmente Agreg el botón al elemento card del producto, junto con su logica
    content.append(comprar);
   
  }
  
  function updateCarrito() {
    // Obtiene el elemento en el que se mostrará el contenido del carrito
    let carritoContent = document.getElementById("carrito-content");
      // Limpia el contenido del carrito
    carritoContent.innerHTML = "";
     // Recorro los productos en el carrito y muestro los elementos
    for (let i = 0; i < carrito.length; i++) {
      let producto = carrito[i];
  
      let productoElement = document.createElement("div");
      productoElement.className = "producto-del-carrito";
      productoElement.innerHTML =`
      <img src="./images/shop/${producto.imagen}" alt="${producto.nombre}" style="width: 3%; height: 3%;"/>
      <div><strong>Nombre:</strong> ${producto.nombre}</div>
      <div><strong>Precio:</strong> $${producto.precio}</div>
      `        
      carritoContent.append(productoElement);
    }
  }
  
// llamada a la funcion y creacion de las card con un forEach

  productos.forEach((product)=> {
  renderProduct(product);
  });



//funcion para agregar productos 

/*function agregarAlCarrito(producto) {
  if (carrito[producto.id]) {
    // Si el producto ya está en el carrito, incrementa la cantidad.
    carrito[producto.id].cantidad ++;
  } else {
    // Si el producto no está en el carrito, agrega un nuevo producto.
    carrito[producto.id] = {
      cantidad: 1,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen
     };
  }
} */

//test agregar carrito
//agregarAlCarrito(productos[0]);
//agregarAlCarrito(productos[5]);
//console.log(carrito)

//funcion para eliminar productos, uno por id

function eliminarDelCarrito(producto) {
  if (carrito[producto.id]) {
    // Si el producto está en el carrito, decrementa la cantidad.
    carrito[producto.id].cantidad--;
    // Si la cantidad es 0, elimina el producto del carrito.
    if (carrito[producto.id].cantidad === 0) {
      delete carrito[producto.id];
      }
    }
  }

//test eliminar carrito
//eliminarDelCarrito(productos[0]);
//console.log(carrito)
      
//funcion para vaciar el todo el carrito, todos los productos
function vaciarCarrito() {
  carrito = {};
  }

//test de vaciar Carrito
//vaciarCarrito();
//console.log(carrito);


//Modal del carrito que crea la ventana
verCarrito.addEventListener("click",()=> {
    const modalHeader= document.createElement("div");  //Creo el header del modal
    modalHeader.className= "modal-header";
    modalHeader.innerHTML=`
      <h1 class= "modal-header-title"> ----Tu Carrito de Compras--- </h1>   
      `;
    modalContainer.append(modalHeader);    //cada vez que clickee el carrito se abre el modal

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className= "modal-header-button";
                       
    modalHeader.append(modalbutton);
 
});