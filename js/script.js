var opcion=0;
var cantidad=0; 
var valorTotal=0; 
var indicador='ND'; 
var contadorA=0; 
var contadorN=0; 
/*Arrays para Registro de Compra Diaria de Entradas Adulto y Niño*/
const arrayComprasA=[]; 
const arrayComprasN=[]; 

/*Antiguos Objetos
const entrada = {
                        indicador:'AD',
                        stock:10,
                        precioDom:20000,
                        precioSab:15000,
                        nombre:'Entrada Adulto'
                    };
const entradaNino = {
                        indicador:'NI',
                        cantInicial:10,
                        precioDom:15000,
                        precioSab:13000,
                        nombre:'Entrada Niño'
                    };*/

/*Objeto Entrada*/
function Entrada(indicadorArg,stockArg,precioDomArg,precioSabArg,nombreArg){
    this.indicador=indicadorArg;
    this.stock=stockArg;
    this.precioDom=precioDomArg;
    this.precioSab=precioSabArg;
    this.nombre=nombreArg;
    /*Metodos del Objeto */
    this.cantidad=function(){
        alert('Stock '+this.nombre+': '+ this.stock);
    };
    this.venta=function(cantidad){
        this.stock=this.stock-cantidad;
    };
    this.compra=function(cantidad){
        this.stock=this.stock+cantidad;
    }      
}
/*
function CompraEntrada(consecutivoArg,clienteIDArg,entradaIDArg,cantidadArg,valorTotalArg,fechaArg){
    this.consecutivo=consecutivoArg;
    this.clienteID=clienteIDArg;
    this.entradaID=entradaIDArg;
    this.cantidad=cantidadArg;
    this.valorTotal=valorTotalArg;
    this.fecha=fechaArg;
    /*M+etodos del Objeto 
    this.venta=function(){
        this.consecutivo=this.consecutivo+1;
    };
}*/

const entradaAdulto = new Entrada('AD',20,20000,15000,'Entrada Adulto');
const entradaNino = new Entrada('NI',20,15000,13000,'Entrada Niño');

/*Funcion para presentar el menu de opciones*/
function menu(opcion){
    while(opcion!=6)
    {
        opcion=prompt('Ingrese su opción: \n 1. Comprar Entradas Adulto \n 2. Comprar Entradas Niño \n 3. Ver Registro de Compras Adultos \n 4. Ver Registro de Compras Niños \n 5. Ver Entradas Disponibles \n 6. Salir');

        switch(opcion){
            case '1':/*Compra de Entradas Adultos */
                cantidad=prompt('Cantidad de Entradas Adulto:');
                if(entradaAdulto.stock>0 && cantidad<=entradaAdulto.stock){
                    entradaAdulto.venta(cantidad);
                    valorTotal=entradaAdulto.precioDom*cantidad;
                    contadorA++;
                    alert('Venta de '+cantidad+' '+entradaAdulto.nombre+' por valor de $'+valorTotal);
                    registraCompras(valorTotal,'AD',contadorA);
                    valorTotal=0;
                }
                else
                {
                    alert(entradaAdulto.nombre+' tiene stock de: '+entradaAdulto.stock+'\nAumente Stock o Modifique Cantidad');
                }
                break;
            case '2':/*Compra de Entradas Niños */
                cantidad=prompt('Cantidad de Entradas Niño:');
                if(entradaNino.stock>0 && cantidad<=entradaNino.stock){
                    entradaNino.venta(cantidad);
                    valorTotal=entradaNino.precioDom*cantidad;
                    contadorN++;
                    alert('Venta de '+cantidad+' '+entradaNino.nombre+' por valor de $'+valorTotal);
                    registraCompras(valorTotal,'NI',contadorN);
                    valorTotal=0;
                }
                else
                {
                    alert(entradaNino.nombre+' tiene stock de: '+entradaNino.stock+'\nAumente Stock o Modifique Cantidad');
                }
                break;
            case '3':/*Consulta Registro de Compras Adultos */
                verRegistroCompras('AD');
                break;
            case '4':/*Consulta Registro de Compras Niños*/
                verRegistroCompras('NI');
                break;
            case '5':
                alert('Stock Entradas Adultos: '+entradaAdulto.stock+'\nStock Entradas Niños: '+entradaNino.stock);
                break;
            case '6':
                alert('Gracias por Preferirnos');
                break;
            default: 
                alert('Opcion No Válida')
                break;
        }
    }
}
/*Funcion para Registro de Compras diarias con Arrays*/
function registraCompras(valorTotal,indicador,contador){
    if(indicador=='AD' && valorTotal>0){
        arrayComprasA.push(valorTotal);
        alert('Se registra en ArrayCompras Adultos\n Compra por: $ '+arrayComprasA[contador-1]);
    }
    else
    {
        arrayComprasN.push(valorTotal);
        alert('Se registra en ArrayCompras Niños\n Compra por: $ '+arrayComprasN[contador-1]);
    }
}
/*Funcion para ver Registro de Compras diarias con Arrays*/
function verRegistroCompras(indicador){
    if(indicador=='AD'){
        if (arrayComprasA.length==0){
            alert('No se han registrado compras para Adultos ');
            return;
        }
        else
        {
            for(let i=1;i<=arrayComprasA.length;i++){
                alert('Compra '+i+' por: $'+arrayComprasA[i-1]);
            }
        }
    }
    if(indicador=='NI'){
        if (arrayComprasN.length==0){
            alert('No se han registrado compras para Niños ');
            return;
        }
        else
        {
            for(let i=1;i<=arrayComprasA.length;i++){
                alert('Compra '+i+' por: $'+arrayComprasN[i-1]);
            }
        }
    }
}

menu(opcion);

/*Funcion para Compra de Entradas
function comprarEntradas(cantidad,precio,indicador){
    if(cantidad>0){
        if(validaAforo(cantidad,indicador)==true){
            if(indicador=='AD'){
                aforoAdultos=aforoAdultos-cantidad;
                valorTotal=valorTotal+(precioAdulto*cantidad);
                alert('Compra Realizada\n Entradas Adulto: '+cantidad+'\n Precio Total: $'+ valorTotal);
                contadorA++;
                registraCompras(valorTotal,indicador,contadorA);
            }
            else
            {
                aforoNinos=aforoNinos-cantidad;
                valorTotal=valorTotal+(precioNino*cantidad);
                alert('Compra Realizada\n Entradas Niño: '+cantidad+'\n Precio Total: $'+ valorTotal);
                contadorN++;
                registraCompras(valorTotal,indicador,contadorN);
            }
        }
        else{
            if(indicador=='AD'){
                alert('Cantidad supera aforo permitido. Disponibles: '+aforoAdultos+ ' entradas.');
            }
            else
            {
                alert('Cantidad supera aforo permitido. Disponibles: '+aforoNinos+ ' entradas.');
            }
            
        }
    }
    else{
        alert('Cantidad a comprar debe ser mayor a 0');
    }
}*/
/*Funcion para Validar Aforo
function validaAforo(cantidad,indicador){
    if(indicador='AD'){
        if(cantidad>aforoAdultos){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        if(cantidad>aforoNinos){
            return false;
        }
        else{
            return true;
        }
    }
}*/
/*Funcion para Validar Stock
function verStock(){
    alert('Stock Entradas Adultos: '+aforoAdultos+'\nStock Entradas Niños: '+aforoNinos);
}*/

