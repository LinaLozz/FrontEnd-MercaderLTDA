//Accion en el boton Sign In
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
//Accion en el boton Accept (register)
document.getElementById("btn__registrarse").addEventListener("click", register);


//Declara variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");


//Funcion transicion de los formularios

function iniciarSesion() {

    //cuando se de click en Sign In muestre el formulario para iniciar sesion
    formulario_register.style.display = "none";

    //Para que el formulario se desplace
    contenedor_login_register.style.left = "10px";

    //Ocultar formulario Registrarse 
    formulario_login.style.display = "block";

    //Oculta la caja trasera register
    caja_trasera_register.style.opacity = "1";

    //mostrar la caja trasera Login
    caja_trasera_login.style.opacity = "0";
}

function register() {

    //cuando se de click en aceptar muestre el formulario para registrarse
    formulario_register.style.display = "block";

    //Para que el formulario se desplace
    contenedor_login_register.style.left = "410px";

    //Ocultar formulario Login 
    formulario_login.style.display = "none";

    //Oculta la caja trasera register
    caja_trasera_register.style.opacity = "0";

    //mostrar la caja trasera Login
    caja_trasera_login.style.opacity = "1";
}