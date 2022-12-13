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

    consumoStock (compra) {
        this.stock -= compra
    }
}

const productos = [];
productos.push(new Productos("A1", "allmohadon andino", "almohadones", 2500, "blanco", 10, 1));
productos.push(new Productos("CM1", "cestos organizadores multiusos", "cestos", 800, "avellana", 25, 1));
productos.push(new Productos("C1", "paño cortina Gasa", "corinas", 3900, "verde seco", 0, 0));
productos.push(new Productos( "I1", "individual austero x6", "individuales", 3000, "crudo", 5, 0));
productos.push( new Productos("M1", "manta colmena", "mantas", 2500, "elefante", 2, 0));
productos.push(new Productos("MT1", "mantel austero", "manteles", 5000, "arena", 2, 0));
productos.push(new Productos("MT2", "mantel bohemio", "manteles", 5500, "rosa viejo", 15, 0));

alert("Bienvenido a la tienda de Austero:  ");

let bienvenida = parseInt(
    prompt(
        "Elija la opción deseada; 1- Ver productos disponibles. 2- Ver solo productos en liquidación 3- Detalle de todo los productos y su stock "
    )
);

const productosEnStock = [];
const productosEnLiquidacion = [];


if (bienvenida == 1) {
    //establezco el nuevo array con los productos en stock
    const productosEnStock = productos.filter((productos) => productos.stock > 0);

    //llevo a la consola los productos en stock
    for (const producto of productosEnStock) {
        console.log(
            `${producto.nombre} - $${producto.precio} unidades diponibles ${producto.stock} - codigo ${producto.codigo}`
        );
    }

    //console.log(productosEnStock);
} else if (bienvenida == 2) {
    //establezco el nuevo array con los productos en liquidación
    const productosEnLiquidacion = productos.filter(
        (productos) => productos.sale > 0
    );
    //console.log(productosEnLiquidacion);

    console.log(`Los productos en liquidación son los siguientes`);

    //llevo a la consola los productos en liquidación
    for (const producto of productosEnLiquidacion) {
        console.log(
            `${producto.nombre} - $${producto.precio} unidades diponibles ${producto.stock} - codigo ${producto.codigo}`
        );
    }
} else if (bienvenida == 3) {
    console.log(
        `Te detallamos todos los productos de la tienda. Si no ves stock disponible, podés esperar a que se reponga o escribinos para solicitar la reposición inmediata`
    );
    for (const producto of productos) {
        console.log(
            `${producto.nombre} - $${producto.precio} unidades diponibles ${producto.stock} - codigo ${producto.codigo}`
        );
    }

}

let preguntaCompra = confirm(`deseas realizar alguna compra`);



if ((preguntaCompra = true)) {
    let busquedaUsuario = prompt("Según el listado anterior ingresa el código del producto que desea comprar");

    let cantidadesCompra = parseInt(prompt("cuantas cantidades?"));

    const busqueda = productos.find(
        (producto) => producto.codigo == busquedaUsuario)

    if (busqueda.stock < cantidadesCompra) {
        console.log(
            `No contamos con las cantidades disponibles. podés comprar hasta ${busqueda.stock}`)

            let reConfirmacion = parseInt(prompt (`Indica las nuevas cantidades a comprar`))

           busqueda.consumoStock (reConfirmacion)
           console.log (busquedaUsuario.stock)
           alert (`Su compra fue procesada. Muchas gracias por confiar en AUSTERO.`)
        ;

    } else {
        busqueda.consumoStock (cantidadesCompra)
        alert (`Su compra fue procesada. Muchas gracias por confiar en AUSTERO.`)
    }

   
}

console.log ("Muestra efecto en stock")
    console.log(productos);
