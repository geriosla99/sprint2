var nombre;
var apellido;
var email;
var contraseña;

function enviar() {

    // Variable que usaremos para determinar si el input es valido
    let isValid = false;

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("email").value;
    contraseña = document.getElementById("contraseña").value;
    // console.log("Nombre: "+nombre)
    // console.log("Apellido: "+apellido)
    // console.log("Correo: "+correo)
    // console.log("Contraseña: "+contraseña)

    // El pattern que vamos a comprobar para solo texto español
    const reExTexto = new RegExp('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,20}$', 'i');
    // RegEx Para correo
    const reExCorreo = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Validamos Nombre
    if (!reExTexto.test(nombre)) {
        alert("El Nombre debe ser solo texto, entre 1 y 20 letras.");
    } else { //Valido Nombre
    }

    // Validamos Apellido
    if (!reExTexto.test(apellido)) {
        alert("El Apellido debe ser solo texto, entre 1 y 20 letras.");
    } else { //Valido Apellido
    }

    // Validamos Correo
    if (!reExCorreo.test(correo)) {
        alert("No es válido el formato de correo electrónico.");
    } else { //Valido Correo
    }

}

// Mostrar todo de LocalStorage
var i;
console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}
function enviar() {
    
    // Variable que usaremos para determinar si el input es valido
    let isValid = false;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("email").value;
    contraseña = document.getElementById("contraseña").value;
    // console.log("Nombre: "+nombre)
    // console.log("Apellido: "+apellido)
    // console.log("Correo: "+correo)
    // console.log("Contraseña: "+contraseña)
    // El pattern que vamos a comprobar para solo texto español
    const reExTexto = new RegExp('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,20}$', 'i');
    // RegEx Para correo
    const reExCorreo = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Validamos Nombre
    if(!reExTexto.test(nombre)){ 
        alert("El Nombre debe ser solo texto, entre 1 y 20 letras.");
    }else { //Valido Nombre
    }
    // Validamos Apellido
    if(!reExTexto.test(apellido)){ 
        alert("El Apellido debe ser solo texto, entre 1 y 20 letras.");
    }else { //Valido Apellido
    }
    // Validamos Correo
    if(!reExCorreo.test(correo)){ 
        alert("No es válido el formato de correo electrónico.");
    }else { //Valido Correo
    }
    //Almacenar en LocalStorage
    // if (typeof(Storage) !== 'undefined') {
    //     // Código cuando Storage es compatible
    //     alert("Código cuando Storage es compatible.");
    // } else {
    //     // Código cuando Storage NO es compatible
    //     alert("Código cuando Storage NO es compatible.");
    // }
    localStorage.Nombre = nombre;
    localStorage.Apellido = apellido;
    localStorage.Correo = correo;
    localStorage.Contraseña = contraseña;  
}