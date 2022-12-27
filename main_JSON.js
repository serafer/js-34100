// let mensaje = "Bienvenidos a la clase 10";

// console.log(mensaje)

//localStorage y sessionStorage
//setItem(clave, valor)

// localStorage.setItem("saludo",mensaje);

//getItem(clave)
// este codigo trae el saludo del storage
// document.getElementById("parrafo").innerText = localStorage.getItem("saludo");

// sessionStorage.setItem("temporal", "mensaje temporal")

// clear() - borra todo el local/session
//removeItem(clave) - borra solo ese

// localStorage.removeItem("saludo");
// localStorage.clear();

// localStorage.setItem("array", [1,2,3]);
// localStorage.setItem("numero", 10);
// localStorage.setItem("string", "texto");

// for(let i=0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i)
//     // console.log(clave)
//     // console.log(localStorage.getItem(clave))
//     console.log(`la clave es ${clave} y su valor es ${localStorage.getItem(clave)}`)
// }

// let numeroGuardado = localStorage.getItem("numero");

// console.log(numeroGuardado + 3);

//objeto es un texto complejo
// let producto1 = {
//     nombre: "mesa",
//     precio: 1000
// }

// localStorage.setItem("producto", producto1)

//para convertir texto complejo a texto plano - se usa JSON.stringify()

// localStorage.setItem("producto", JSON.stringify(producto1))

// let productoParseado = JSON.parse(localStorage.getItem("producto"))
// console.log(productoParseado)


// hacer nuestro petshop
const formulario = document.querySelector("#formulario");

class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad
    }
}
let divMascotas = document.querySelector("#mascotas");
const listaMascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

const nuevaMascota = () => {
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let edad = document.getElementById("edad").value;

    let mascotaNueva = new Mascota(nombre, tipo, edad);

    listaMascotas.push(mascotaNueva);
    localStorage.setItem("mascotas", JSON.stringify(listaMascotas))

    // if (localStorage.getItem("mascotas") != null) {
    //     let listaStorage = JSON.parse(localStorage.getItem("mascotas"))
    //     listaStorage.push(mascotaNueva)
    //     localStorage.setItem("mascotas", JSON.stringify(listaStorage));
    // } else {
    //     listaMascotas.push(mascotaNueva);
    //     localStorage.setItem("mascotas", JSON.stringify(listaMascotas))
    // }

    return listaMascotas;
}

formulario.onsubmit = (e) => {
    e.preventDefault();
    nuevaMascota();
    mostrarMascotas()
}

const mostrarMascotas = ()=> {
    const mascotasGuardadas = JSON.parse(localStorage.getItem("mascotas"));

    mascotasGuardadas.forEach(mascota => {
        divMascotas.innerHTML += `
                        <div class='mascota'>
                            <h3>Nombre de la mascota: ${mascota.nombre}</h3>
                            <h4>${mascota.tipo}</h4>
                            <p>Edad: ${mascota.edad}</p>
                        </div>
                        `
    })
}

