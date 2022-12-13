//primera preentrega


let producto = "";
let almohadones = 100;
let toallas = 100;
let mantas = 100;

let precioAlmohadas = 1500;
let precioToallas = 500;
let precioMantas = 3000;

const passAdmin = 4321;
const passCliente = 1234;

let usuario;

function stock() {
    alert("Te informo el stock de los productos en la tienda");
    alert("Almohadones = " + almohadones);
    alert("Toallas = " + toallas);
    alert("Mantas = " + mantas);
}

usuario = prompt("indique su perfil: Admin o Cliente")

if (usuario.toLocaleLowerCase() === "admin") {

    do {

        pass = parseInt(prompt("Hola " + usuario + ". Ingrese su pass"))

    } while (pass != passAdmin)

    alert("Bienvenido " + usuario);

    stock();

    let modificarStock = confirm("Quieres modificar el stock?");

    while (modificarStock == true) {

        producto = prompt("que producto quieres modificar? almohadones, toallas o mantas");

        switch (producto) {
            case 'almohadones':
                almohadones = parseInt(prompt("indica unidades disponibles"));
                alert("tu nuevo stock es de " + almohadones);
                break;
            case "toallas":
                toallas = parseInt(prompt("indica unidades disponibles"));
                alert("tu nuevo stock es de " + toallas);
                break;
            case "mantas":
                mantas = parseInt(prompt("indica unidades disponibles"));
                alert("tu nuevo stock es de " + mantas);
                break;
            default:
                alert("los datos ingresados son incorrectos");
                modificarStock = confirm("Quieres modificar el stock?")
                break;
        };


    }

    stock();

}

else if (usuario.toLocaleLowerCase() === "cliente") {

    do {

        pass = parseInt(prompt("Hola " + usuario + ". Ingrese su pass"));
    } while (pass != passCliente);
    alert("Bienvenido " + usuario);


    let confirmarCarro = confirm("Quieres comprar?");
    let precio = 0;
    let unidades = 0;
    let totalCompra = 0;

    stock();

    while (confirmarCarro == true) {

        producto = prompt("que producto quieres comprar? almohadones, toallas o mantas");
        unidades = parseInt(prompt("cuantas unidades?"));

        switch (producto) {
            case "almohadones":
                precio = 3500;
                almohadones = almohadones - unidades;
                break;
            case "toallas":
                precio = 1500;
                toallas = toallas - unidades;
                break;
            case "mantas":
                precio = 10000;
                mantas = mantas - unidades;
                break;
            default:
                alert("los datos ingresados son incorrectos");
                precio = 0;
                unidades = 0;
                break;
        }
        totalCompra = totalCompra + (precio * unidades);

        confirmarCarro = confirm("Quieres comprar algo más?");

    }

    if (totalCompra != "0") {

        alert("Su compra fue de $" + totalCompra);
        alert("Gracias por tu visita");

    } else {

        alert("Gracias por tu visita");

    }

} else {
    alert("no eres bienvenido por aquí");
    location.reload();
}



