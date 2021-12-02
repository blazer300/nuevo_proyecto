//DATOS A INGRESAR
let usuarioGlobal = "ariel"
let passGlobal = 1234

function validate(){//FUNCION PARA ENVIAR Y COMPROBAR LOS DATOS

    let usuario = document.getElementById("nombreUsuario");
    let pass = document.getElementById("passUsuario");
   

        if(usuario.value == usuarioGlobal && pass.value == passGlobal){//Condicional de usuario y pass

        console.log("Bienvenido a Anvil Guns: " + usuario.value)
            let parrafo = document.createElement("p")
            //NODOS
            parrafo.innerHTML= "Bienvenido a Anvil Guns,A continuacion se Muestra su comprobante de compra: "
            parrafo.style.color="red"
            mensaje.appendChild(parrafo)
        }   
        else{
            console.log("Usuario incorrecto")
        }

  
}


class Producto 
{
constructor(nombre,precio,detalle,cantidad,total){
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.detalle = detalle;
    this.cantidad = cantidad;
    this.total= total;
    this.disponible = true;
}
sumarIVA(){ // funcion para calcular IVA con los datos ingresados por prompt
    return this.total * 1.21
}
vender(){//FUNCION DE VENDER(SIN USAR)
return this.precio * 1.21

}

}
var arrayProductos = [];// En este array de objetos guardo los productos de mi tienda
do{
    var comprobacion = prompt("Ingrese un nombre del producto o fin para terminar de agregar");
    if (comprobacion === "fin"|| comprobacion ==="FIN"|| comprobacion ==="Fin")// Si no ingresan el dato correcto este ciclo se repite hasta que se cumpla.
{
    break;
}
    else
{
            nombreP = comprobacion;
            var precioP = prompt("ingrese el precio del producto")
            var detalleP = prompt("ingrese el detalle del producto")
            var cantidadP = prompt("Ingrese cantidad comprada del producto")
            var totalP = cantidadP * precioP
            arrayProductos.push(new Producto(nombreP , precioP ,detalleP ,  cantidadP , totalP))
    }
}
while (comprobacion != "fin"|| comprobacion !="FIN"|| comprobacion !="Fin")

console.log(arrayProductos)


for(let producto of arrayProductos){

let container = document.createElement("div")
//se define el innerHTML del elemento con un template
container.innerHTML = `<p> Nombre: ${producto.nombre}<p>
                        <p> Precio: ${producto.precio}</p>   
                        <p> Cantidad: ${producto.cantidad}</p> 
                        <p> Detalle: ${producto.detalle}</p> 

`
document.body.appendChild(container)
}




//POCO STOCK MENOS DE 5 PRODUCTOS(SIN USAR)
let pocoStock = arrayProductos.filter (producto => producto.cantidad <= 5)
document.write("<h3>Lista de Productos con poco stock (menos de 5 unidades):</h3> ")
for(let producto of pocoStock){

let contenedor = document.createElement("div")
//se define el innerHTML del elemento con un template
contenedor.innerHTML =`<h3> Nombre: ${producto.nombre}</h3>
                        <p> Cantidad: ${producto.cantidad}</p> 
                        <p> Detalle: ${producto.detalle}</p>

`
document.body.appendChild(contenedor)

}


//SIN STOCK(SIN USAR)

let sinStock = arrayProductos.filter(producto => producto.cantidad == 0 && producto.disponible == false)
console.log("Sin stock") 
document.write("<h3>Lista de Productos sin Stock (cantidad = 0 o disponible = false):</h3> ")
for (let producto of sinStock){
    document.write("<h3>Lista de Productos con poco Stock (Menos de 3 unidades):</h3> ")
    let contenedor = document.createElement("div")
    //Otra vez se define el innerHTML con su template
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                             <p> Cantidad: ${producto.cantidad}</p> 
                             <p> Detalle: ${producto.detalle}</p>
    
    `
    document.body.appendChild(contenedor)

}