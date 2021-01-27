document.getElementById("btn-login").addEventListener("click", login);
document.getElementById("btn-register").addEventListener("click", register);

window.addEventListener("resize", anchopagina);

var container_login_register = document.querySelector(".container-login-register");
var formulario_login = document.querySelector(".formulario-login");
var formulario_register = document.querySelector(".formulario-register");
var back_box_login = document.querySelector(".back-box-login");
var back_box_register = document.querySelector(".back-box-register");

function anchopagina(){
  if(window.innerWidth > 850){
    back_box_login.style.display = "block";
    back_box_register.style.display = "block";
  }else{
    back_box_register.style.display = "block";
    back_box_register.style.opacity = "1";
    back_box_login.style.display = "none";
    formulario_login.style.display = "block";
    formulario_register.style.display ="none";
    container_login_register.style.left = "0px";
  }
}


anchopagina();

function login() {

  if(window.innerWidth > 850){

  formulario_register.style.display = "none";
  container_login_register.style.left = "10px";
  formulario_login.style.display = "block";
  back_box_login.style.opacity = "0";
  back_box_register.style.opacity = "1";
}else{

  formulario_register.style.display = "none";
  container_login_register.style.left = "10px";
  formulario_login.style.display = "block";
  back_box_register.style.display = "block";
  back_box_login.style.display = "none";
}

}


function register() {

   if(window.innerWidth > 850){
 
          formulario_register.style.display = "block";
          container_login_register.style.left = "410px";
          formulario_login.style.display = "none";
          back_box_register.style.opacity = "0";
          back_box_login.style.opacity = "1";
          
   }else{

        formulario_register.style.display = "block";
        container_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        back_box_register.style.display = "none";
        back_box_login.style.display = "block";
        back_box_login.style.opacity = "1";
   }
}