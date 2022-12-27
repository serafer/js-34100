//Tercer preentrega

const consultarStock = document.getElementById("consultarStock");
const consultarLiquidacion = document.getElementById("consultarLiquidacion");
const consultarCatalogo = document.getElementById("consultarCatalogo");
const visorAPintar = document.getElementById("visorAPintar");
const cleanVisor = document.getElementById("cleanVisor");
const newProducto = document.getElementById("newProducto");
const formulario = document.getElementById('formulario');




//Constructor

class Productos {
  constructor(codigo, nombre, categoria, precio, color, stock, sale) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.color = color;
    this.stock = stock;
    this.sale = sale;
  }

  consumoStock(compra) {
    this.stock -= compra;
  }
}

//Array

const productos = JSON.parse(localStorage.getItem("producto")) || [];

productos.push( new Productos("A1", "almohadon andino", "almohadones", 2500, "blanco", 10, "0"));
productos.push( new Productos("CM1","cestos organizadores multiusos","cestos", 800,"avellana", 25,"0"));
productos.push( new Productos("C1", "paño cortina Gasa", "corinas", 3900, "verde seco", 0, "1"));
productos.push( new Productos("I1","individual austero x6","individuales", 3000,"crudo",5,"0"));
productos.push( new Productos("M1", "manta colmena", "mantas", 2500, "elefante", 2, "0"));
productos.push( new Productos("MT1", "mantel austero", "manteles", 5000, "arena", 2, "1"));
productos.push( new Productos("MT2", "mantel bohemio", "manteles", 5500, "rosa viejo", 15, "0"));

const productosEnStock = [];

const productosEnLiquidacion = [];

//funciones
 

//btn limpiar
cleanVisor.addEventListener("click", () => {
  visorAPintar.innerHTML = ``;
  formulario.innerHTML = ``;
});

//btn alta producto

newProducto.addEventListener("click", () => {
    
    visorAPintar.innerHTML = ``;
    formulario.innerHTML = ``;

    formulario.innerHTML += `

            
            <div class="mb-3">
                <label class="form-label">Nombre del Producto</label>
                <input type="text" class="form-control"  placeholder="Nombre del Producto" id="formNombre" required>

                
            </div>


            <div class="row g-3 mb-3">
                <div class="col">
                    <input type="text"  class="form-control" placeholder="Código" aria-label="Código" id = "formCodigo" required>
                </div>
      

                <div class="col">
                    <label class="visually-hidden" for="specificSizeSelect">Categoría</label>
                    <select class="form-select" id="formCategoria" required>
                        <option selected>Elige...</option>
                        <option value="1">almohadones</option>
                        <option value="2">cestos</option>
                        <option value="3">individuales</option>
                        <option value="4">mantas</option>
                        <option value="5">manteles</option>
                    </select>
                </div>

                <div class="col">
                    <input type="text"  class="form-control" placeholder="Color" aria-label="Color" id = "formColor" required>
                </div>

            </div>



            <div class="row g-3 mb-3">
                <div class="col">
                    <input type="number" class="form-control" placeholder="Precio" aria-label="Precio" id = "formPrecio" required>
                </div>
                <div class="col">
                    <input type="number" class="form-control" placeholder="Stock" aria-label="Stock" id = "formStock" required>
                </div>
      
                <div class="col">
                <label class="visually-hidden" for="specificSizeSelect">Categoría</label>
                <select class="form-select" id="formSale" required>
                    <option selected>Elige...</option>
                    <option value=1>En liquidación</option>
                    <option value=0>En venta</option>
                </select>
                </div>

                
                
            <div class="col-12">
            <button class="btn btn-primary" type="submit">Crear</button>
            </div>
            
            `;
});

function verStock() {

    visorAPintar.innerHTML = ``;
    formulario.innerHTML = ``;

    let productosEnStock = JSON.parse(localStorage.getItem("productos"));
    productosEnStock = productos.filter((productos) => productos.stock > 0);
  
    productosEnStock.forEach((productos) => {
    visorAPintar.innerHTML += `
        <div class='productos container'>
            <h3>${productos.nombre}</h3>
            <p>${productos.categoria}</p>
            <p class = "price">Precio: ${productos.precio}</p>
            <p>Stock: ${productos.stock}</p>
            <p>Código: ${productos.codigo}</p>

        </div>
        `;
  });
}




//Btn con stock
consultarStock.addEventListener("click", () => {
    // Obtener la información del stock de los productos
    const stock = verStock();  
});
  


function liquidacion() {

    visorAPintar.innerHTML = ``;
    formulario.innerHTML = ``;

    let productosEnLiquidacion = JSON.parse(localStorage.getItem("productos"));
    productosEnLiquidacion = productos.filter( (productos) => productos.sale > 0)

    productosEnLiquidacion.forEach((productos) => {
    visorAPintar.innerHTML += `
        <div class='productos container'>
            <h3>${productos.nombre}</h3>
            <p>${productos.categoria}</p>
            <p class = "price">Precio: ${productos.precio}</p>
            <p>Stock: ${productos.stock}</p>
            <p>Código: ${productos.codigo}</p>

            
        </div>
        `;
  });
}




//Btn con stock
consultarLiquidacion.addEventListener("click", () => {
    // Obtener la información del stock de los productos
    const stock = liquidacion();  
});  


function verCatalogo() {

    visorAPintar.innerHTML = ``;
    formulario.innerHTML = ``;

    let catalogo = JSON.parse(localStorage.getItem("productos"));
    
    catalogo.forEach((productos) => {
    visorAPintar.innerHTML += `
        <div class='productos container'>
            <h3>${productos.nombre}</h3>
            <p>${productos.categoria}</p>
            <p class = "price">Precio: ${productos.precio}</p>
            <p>Stock: ${productos.stock}</p>
            <p>Código: ${productos.codigo}</p>

        </div>
        `;
  });
}




//Btn con stock
consultarCatalogo.addEventListener("click", () => {
    // Obtener la información del stock de los productos
    const stock = verCatalogo();  
});





formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarProducto();
  });
  
    function agregarProducto() {
    const codigo = document.getElementById('formCodigo').value;
    const nombre = document.getElementById('formNombre').value;
    const categoria = document.getElementById('formCategoria').value;
    const precio = document.getElementById('formPrecio').value;
    const color = document.getElementById('formColor').value;
    const stock = document.getElementById('formStock').value;
    const sale = document.getElementById('formSale').value;
    const nuevoProducto = new Productos(codigo, nombre, categoria, precio, color, stock, sale);
    productos.push(nuevoProducto);



    //Agrego al LocalStorage
    localStorage.setItem('productos', JSON.stringify(productos));
    formulario.reset();
    return productos;
}

