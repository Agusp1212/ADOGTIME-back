// ------------- VALIDACION FORMULARIO ---------------
function validarFormulario() {
    var motivo = document.getElementById("selectMotivo").value.trim();
    var email = document.getElementById("inputEmail4").value.trim();
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var direccion1 = document.getElementById("inputAddress").value.trim();
    var ciudad = document.getElementById("inputCity").value.trim();
    var provincia = document.getElementById("inputState").value.trim();
    var cp = document.getElementById("inputZip").value.trim();
    
    if (motivo === "Selecciona...") {
        alert("Por favor, elige un motivo de consulta válido.");
        return false;
    }

    if(email==="" || nombre==="" || apellido==="" || direccion1==="" || ciudad==="" || cp ===""){
        alert("Debe completar los campos obligatorios (*).")
        return false
    }
  
    var nombreTest =/^[a-zA-Z]+$/.test(nombre)
    if(!nombreTest){
      alert("Debe completar el nombre con las letras del abecedario.")
      return false
    }

    var apellidoTest =/^[a-zA-Z]+$/.test(apellido)
    if(!apellidoTest){
        alert("Debe completar el apellido con las letras del abecedario.")
        return false
    }

    if (provincia === "Selecciona...") {
        alert("Por favor, elige una provincia válida.");
        return false;
    }

    if(isNaN(cp)){
      alert("Debe completar el C.P sólo con números.")
      return false
    }
    
    alert("Se enviaron los datos correctamente.")
    return true
}
// --------------- WEB STORAGE ----------------
const entradaEmail = document.getElementById("inputEmail4");
const entradaNombre = document.getElementById("nombre");
const entradaApellido = document.getElementById("apellido");
const entradaDireccion1 = document.getElementById("inputAddress");
const entradaDireccion2 = document.getElementById("inputAddress2");
const entradaCiudad = document.getElementById("inputCity");
const entradaProvincia = document.getElementById("inputState");
const entradaCP = document.getElementById("inputZip");
const botonEnviar = document.getElementById("btn-enviar");

const emailGuardado = localStorage.getItem("inputEmail4");
const nombreGuardado = localStorage.getItem("nombre");
const apellidoGuardado = localStorage.getItem("apellido");
const direccion1Guardada = localStorage.getItem("inputAddress");
const direccion2Guardada = localStorage.getItem("inputAddress2");
const ciudadGuardada = localStorage.getItem("inputCity");
const provinciaGuardada = localStorage.getItem("inputState");
const cpGuardado = localStorage.getItem("inputZip");

if (emailGuardado) entradaEmail.value = emailGuardado;
if (nombreGuardado) entradaNombre.value = nombreGuardado;
if (apellidoGuardado) entradaApellido.value = apellidoGuardado;
if (direccion1Guardada) entradaDireccion1.value = direccion1Guardada;
if (direccion2Guardada) entradaDireccion2.value = direccion2Guardada;
if (ciudadGuardada) entradaCiudad.value = ciudadGuardada;
if (provinciaGuardada) entradaProvincia.value = provinciaGuardada;
if (cpGuardado) entradaCP.value = cpGuardado;

botonEnviar.addEventListener('click', function() {
    if (entradaEmail.value !== "") localStorage.setItem("inputEmail4", entradaEmail.value);
    if (entradaNombre.value !== "") localStorage.setItem("nombre", entradaNombre.value);
    if (entradaApellido.value !== "") localStorage.setItem("apellido", entradaApellido.value);
    if (entradaDireccion1.value !== "") localStorage.setItem("inputAddress", entradaDireccion1.value);
    if (entradaDireccion2.value !== "") localStorage.setItem("inputAddress2", entradaDireccion2.value);
    if (entradaCiudad.value !== "") localStorage.setItem("inputCity", entradaCiudad.value);
    if (entradaProvincia.value !== "") localStorage.setItem("inputState", entradaProvincia.value);
    if (entradaCP.value !== "") localStorage.setItem("inputZip", entradaCP.value);
});