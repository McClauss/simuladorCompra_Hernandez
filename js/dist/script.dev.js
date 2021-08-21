"use strict";

var opcion = 0;
var cantidad = 0;
var precioAdulto = 20000;
var precioNino = 15000;
var valorTotal = 0;
var aforoAdultos = 10;
var aforoNinos = 10;
var indicador = 'ND';

function menu(opcion) {
  /*Funcion para presentar el menu de opciones*/
  while (opcion != 3) {
    opcion = prompt('Ingrese su opción: \n 1. Comprar Entradas Adulto \n 2. Comprar Entradas Niño \n 3. Salir');

    switch (opcion) {
      case '1':
        cantidad = prompt('Digite Cantidad de Entradas Adulto:');
        comprarEntradas(parseInt(cantidad), parseInt(precioAdulto), 'AD');
        valorTotal = 0;
        break;

      case '2':
        cantidad = prompt('Digite Cantidad de Entradas Niño:');
        comprarEntradas(parseInt(cantidad), parseInt(precioNino), 'NI');
        valorTotal = 0;
        break;

      case '3':
        alert('Gracias por Preferirnos');
        break;

      default:
        alert('Opcion No Válida');
        break;
    }
  }
}

function comprarEntradas(cantidad, precio, indicador) {
  if (cantidad > 0) {
    if (validaAforo(cantidad, indicador) == true) {
      if (indicador == 'AD') {
        aforoAdultos = aforoAdultos - cantidad;
        valorTotal = valorTotal + precioAdulto * cantidad;
        alert('Compra Realizada\n Entradas Adulto: ' + cantidad + '\n Precio Total: $' + valorTotal);
      } else {
        aforoNinos = aforoNinos - cantidad;
        valorTotal = valorTotal + precioNino * cantidad;
        alert('Compra Realizada\n Entradas Adulto: ' + cantidad + '\n Precio Total: $' + valorTotal);
      }
    } else {
      if (indicador == 'AD') {
        alert('Cantidad supera aforo permitido. Disponibles: ' + aforoAdultos + ' entradas.');
      } else {
        alert('Cantidad supera aforo permitido. Disponibles: ' + aforoNinos + ' entradas.');
      }
    }
  } else {
    alert('Cantidad a comprar debe ser mayor a 0');
  }
}

function validaAforo(cantidad, indicador) {
  if (indicador = 'AD') {
    if (cantidad > aforoAdultos) {
      return false;
    } else {
      return true;
    }
  } else {
    if (cantidad > aforoNinos) {
      return false;
    } else {
      return true;
    }
  }
}

menu(opcion);
//# sourceMappingURL=script.dev.js.map
