'use strict'

window.addEventListener('load',function(){
  console.log('DOM cargado');

  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");

  var hr = document.createElement('hr');
  var br = document.createElement('br');
  var span = document.createElement('span');

  box_dashed.style.display = "none";

  formulario.addEventListener('submit', function(){
    console.log("Evento submit capturado");
    
    var nombre = document.querySelector('#campo_nbre').value;
    var apellidos = document.querySelector('#campo_apellidos').value;
    var edad = parseInt(document.querySelector('#campo_edad').value);

    // Validación del formulario
    if (nombre.trim() == null || nombre.trim().length == 0) {
      alert('El nombre no es válido');
      document.querySelector('#error_nbr').innerHTML = 'El nombre no es valido';
      return false;
    } else {
      document.querySelector('#error_nbr').style.display = 'none';
    }
    if (apellidos.trim() == null || apellidos.trim().length == 0) {
      alert('El Apellido no es válido');
      return false;
    }
    if (isNaN(edad) || edad == null || edad < 0) {
      alert('La edad no es válida');
      return false;
    }


    var datos_usuario = [nombre,apellidos,edad];

    box_dashed.style.display = "block";
    
    /**
     * SOLUCION 1, SE CREAN ELEMENTOS EN EL CUERPO DEL DIV VACIO DE FORMULARIO.HTML
     */
    var parafo = document.createElement('p');

    for (let valor in datos_usuario) {
      var parafo = document.createElement('p');
      parafo.append(datos_usuario[valor]);
      box_dashed.append(parafo);
    } 

    /**
     * SOLUCION 2: SE AGREGAN LOS TEXTOS A LOS CONTENIDOS ESPECIFICIOS DEL DIV
     */
    document.querySelector('#p_nombre span').innerHTML = nombre;
    document.querySelector('#p_apellidos span').innerHTML = apellidos;
    document.querySelector('#p_edad span').innerHTML = edad;


  })









})