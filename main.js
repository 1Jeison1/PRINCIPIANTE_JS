//console.log("cualquier cosa")

const miTitulo = document.querySelector('h1');
miTitulo.textContent = 'INSSA';
document.querySelector('img').onclick = function() {
  alert('compraaaaa!!!'); //alerta de push en imagen
}
//{
//let miImage= document.querySelector('img');
//miImage.onclick = function () {
  //  let miSrc = miImage.getAttribute('src');
    //if (miSrc === 'images/inssa-logo.png') {
      //miImage.setAttribute('src','images/compra.png');
   // }else{
     // miImage.setAttribute('src', 'images/inssa-logo.png');
    //}
 //}
//}


var fotoMostrada = "inssa-logo";

function miFuncion() //boton 1 muestra alerta de compra - aceptar - imagen de gerente.
{
  var imagen = document.getElementById("foto1")

 if(fotoMostrada == "inssa-logo"){
  imagen.src = "images/Javier-Ossa.png";
     imagen.style.width = '400px';
     imagen.style.height = 'auto';
  fotoMostrada = "inssa-logo";
  alert('¿Quieres comprar?'); //alerta de push en imagen
 }
 
} 
var fotoNueva = "Javier"
function miFuncion2() //boton 2 muestra alerta gracias - aceptar - imagen dispensado.
{
  var imagen = document.getElementById("foto1");

 if(fotoNueva == "Javier"){
  imagen.src = "images/compra.png";
  fotoMostrada = "Javier-Ossa";
  alert('GRACIAS!!!'); //alerta de push en imagen
 }
}
document.querySelector('img').onclick = function() {
  alert('compraaaaa!!!'); //alerta de push en imagen
}