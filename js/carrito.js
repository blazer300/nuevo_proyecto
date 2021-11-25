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
sumarIVA(){ //IVA
    return this.total * 1.21
}
descuento(){ //DESCUENTO
    return this.total - (this.total * .25)}
}
var arrayProductos = [];
do{
var comprobacion = prompt("Ingrese un nombre del producto o fin para terminar de agregar");
if (comprobacion === "fin"|| comprobacion ==="FIN"|| comprobacion ==="Fin")
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

for(var producto of arrayProductos){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>")
    document.write("<li><h3>Detalle: " + producto.detalle + "</h3></li>")
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li>")
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>")
    document.write("<li><h3>Total: " + producto.total + "</h3></li>")
    document.write("<li><h3>Precio con IVA es: " + producto.sumarIVA()+"</h3></li></ul><br>" )

if(producto.sumarIVA() > 1000 ) {
    console.log(producto.sumarIVA())
    alert("tienes un descuento de %25!!,consulte a su asesor para mas informacion")
    document.write ("El precio del producto con descuento es de: " + producto.descuento())
  
}

    console.log(producto.nombre)
    console.log(producto.detalle)
    console.log(producto.cantidad)
    console.log(producto.total)
    console.log(producto.sumarIVA)
    console.log(producto.descuento)


}


//ORDENADOS POR CANTIDAD
var ordenadosCantidad = []
ordenadosCantidad = arrayProductos.map(elemento =>elemento)
ordenadosCantidad.sort(function(a,b){
    return a.cantidad- b.cantidad
})
console.log("Ordenados por cantidad ascendente: ")
console.log(ordenadosCantidad)
document.write("<h3>Lista de Productos ordenados por cantidad: </h3>")

for( var producto of ordenadosCantidad){
document.write("<ul><li><h3>Nombre: "+producto.nombre + "</h3></li>")
document.write("<li><h3>Detalle: "+producto.detalle + "</h3></li>")
document.write("<li><h3>Cantidad: "+producto.cantidad + "</h3></li></ul></br>")
}
//ORDENADOS POR PRECIO
var ordenadosPrecio = []
ordenadosPrecio = arrayProductos.map(elemento => elemento)
var ordenadosPrecio = arrayProductos
ordenadosPrecio.sort(function(a,b){
return a.precio- b.precio
})
console.log("Ordenados por precios ascendentes:")
console.log(ordenadosPrecio)
document.write("<h3>Lista de Productos ordenados por precio ascendente: </h3>")
for( var producto of ordenadosPrecio){
    document.write("<ul><li><h3>Nombre: "+producto.nombre + "</h3></li>")
    document.write("<li><h3>Detalle: "+producto.detalle + "</h3></li>")
    document.write("<li><h3>precio: "+producto.precio + "</h3></li></ul></br>")
    }



