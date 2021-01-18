'use strict'

/**
 * TABLA DE MULTIPLICAR DE UN NUMERO INTRODUCIDO POR PANTALLA
 * 1. Capturar numero
 * 2. Dibuja una tabla con la tabla de multiplicar del número capturado. * 
 * 
 */

 var numero = parseInt(prompt("Introduzca numero de la tabla de multiplicar: ",1));

 document.write("<h1>la tabla de multiplicar del siguiente numero "+ numero+" es la siguiente: </h1></BR></BR>");

 document.write('<table border="1"><TR><TH>FACTOR MULTIPLICADOR</TH><TH>RESULTADO</TH></TR>');

 for (let index = 1; index <= 10; index++) {
  document.write("<TR><TD>"+numero+" x "+index+"</TD><TD>= "+(index*numero)+"</TD></TR>");
}

 document.write("</TABLE>")

 /**
  *   <table border="1">
    <tr>
      <th>Nombre</th> <!-- <th> permite escribir en negrita la cabecera-->
      <th>Apellidos</th>
      <th>País</th>
    </tr>
    <tr>
      <td>Denis</td>
      <td>Rocher</td>
      <td>Chile</td>
    </tr>
    <tr>
      <td>Valeska</td>
      <td colspan="2"> Valenzuela Lara</td>   <!-- colspan permite fusionar celdas-->
    </tr>
  </table>
  */
