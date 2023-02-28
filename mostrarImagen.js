//function show() {
//   document.getElementById('img2').style.display = 'block';
//
//    document.getElementById('boton1').style.display = 'none';
//};

//document.getElementById('boton1').addEventListener('click', function() (
//    document.getElementById('img2').style.display = "block";
//    document.getElementById('boton1').style.display = "none";
//));

//document.getElementById('boton1').onclick = function (){
//    document.getElementById('img2').style.css.display ='block'
//    document.getElementById('boton1').style.css.display = "none";
//}

function mostrarImagen(idBoton){
        if (idBoton === "boton1") {
            document.getElementById('img2').style.display = 'block'
        }
        if (idBoton === "boton2") {
            document.getElementById('img3').style.display = 'block'
        }
}

//document.getElementById('boton2').addEventListener('click', function() (
//    document.getElementById('img3').style.display = 'block';
//));

//document.getElementById('boton3').addEventListener('click', function() (
//    document.getElementById('columna').style.display = '';
//));