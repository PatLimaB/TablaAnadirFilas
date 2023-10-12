//Creamos la lista con nombres de persona
let nombres = ["Pedro", "May", "Alejandro", "Alba", "Patri", "Fran"];

//Creamos la función para generar números aleatorios para la edad
function numeroAleatorio () {
    return Math.floor(Math.random()*101);
}

//Creamos el div principal
let contenedor = document.createElement("div");

//Lo agregamos al body
document.body.appendChild(contenedor);

//Creamos un título con su texto y clase
let titulo = document.createElement("h1");
titulo.textContent = "Alumnos";
titulo.className = "tituloTabla";

//Agregamos el título al contenedor
contenedor.appendChild(titulo);

//Creamos un botón para añadir filas
let boton = document.createElement("button");

//Le damos atributos
boton.innerHTML = "Añade una fila";
boton.setAttribute("id", "boton");

//Añadimos el botón al contenedor
contenedor.appendChild(boton);

//Creamos la tabla
let tabla = document.createElement("table");
tabla.className = "tablaAlumnos";

//Creamos la cabecera de la tabla y le añadimos contenido
let cabecera = tabla.createTHead();
let cabeceraFila = cabecera.insertRow();
let cabeceraCampo1 = cabeceraFila.insertCell(0);
let cabeceraCampo2 = cabeceraFila.insertCell(1);
cabeceraCampo1.innerHTML = "Nombre";
cabeceraCampo2.innerHTML = "Edad";

//Y la añadimos a la tabla
tabla.appendChild(cabecera);

//Creamos el cuerpo de la tabla y lo añadimos a la propia tabla
let cuerpo = tabla.createTBody();
tabla.appendChild(cuerpo);

//Añadimos la tabla al contenedor
contenedor.appendChild(tabla);

//Creamos la función que añadirá filas a la tabla
let indiceNombre = 0;   //indice que recorrerá la lista de nombres
function agregarFila(){
    let nombreNuevo = nombres[indiceNombre]; //Se tomará el nombre con el índice actual
    let numeroNuevo = numeroAleatorio(); //Se genera un número aleatorio para la edad

    let nuevaFila = cuerpo.insertRow(); //Agregamos una fila
    let campo1 = nuevaFila.insertCell(0); //Y el primer campo
    let campo2 = nuevaFila.insertCell(1); //Y también el segundo

    //Contenido de cada campo
    campo1.innerHTML = nombreNuevo;
    campo2.innerHTML = numeroNuevo;

    //incrementamos el índice para que pase al siguiente nombre al darle al botón
    indiceNombre++;

    //Al llegar al último nombre, volvemos al primer nombre de nuevo
    if (indiceNombre>=nombres.length){
        indiceNombre=0;
    }
}

//Manejamos el evento del botón
boton.addEventListener("click", agregarFila);

