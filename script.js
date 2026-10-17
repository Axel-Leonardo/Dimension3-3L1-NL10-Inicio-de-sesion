// Usuario y contraseña correctos (de ejemplo)
var usuarioCorrecto = "admin";
var contrasenaCorrecta = "1234";

// Elementos de la página
var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensaje");
var bienvenida = document.getElementById("bienvenida");
var textoBienvenida = document.getElementById("textoBienvenida");
var botonLimpiar = document.getElementById("botonLimpiar");
var botonSalir = document.getElementById("botonSalir");

// Cuando se presiona "Iniciar sesión"
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Evita que la página se recargue

  var usuario = document.getElementById("usuario").value.trim();
  var contrasena = document.getElementById("contrasena").value;

  // 1. Revisar que no estén vacíos
  if (usuario === "" || contrasena === "") {
    mostrarMensaje("Escribe el usuario y la contraseña.", "error");
    return;
  }

  // 2. Comparar con los datos correctos
  if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
    formulario.style.display = "none";
    bienvenida.style.display = "block";
    textoBienvenida.textContent = "¡Bienvenido, " + usuario + "!";
  } else {
    mostrarMensaje("Usuario o contraseña incorrectos.", "error");
  }
});

// Botón "Limpiar": borra los campos y el mensaje
botonLimpiar.addEventListener("click", function () {
  formulario.reset();
  mostrarMensaje("", "");
});

// Botón "Cerrar sesión": regresa al formulario
botonSalir.addEventListener("click", function () {
  bienvenida.style.display = "none";
  formulario.style.display = "block";
  formulario.reset();
  mostrarMensaje("", "");
});

// Muestra un mensaje con el estilo indicado (error o exito)
function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = tipo;
}
