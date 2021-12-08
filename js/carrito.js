class Producto{//SE DEFINE EL CLASS PRODUCTO CON EL CONSTRUCTOR
    constructor({id,nombre,precio,familia,calibre,modelo}){
        this.nombre = nombre;
        this.precio = precio;
        this.familia = familia;
        this.calibre = calibre;
        this.model = modelo;
        this.id = id
    }
}
class Tienda{//SE DEFINE EL CLASS DE LA TIENDA
    constructor(){
     this.stock = []
    }//FUNCIONES
    agregarProducto(producto){//AGREGA PRODUCTO AL CARD
        this.stock.push(new Producto(producto))

    }
    agregarProductos(arrayProductos){//AGREGA VARIOS PRODUCTOS AL CARD
        arrayProductos.forEach(producto => this.agregarProducto(producto))
            
    
    }
    devolverCategorias(categorias){//DEVUELVE EL CARD POR CATEGORIA
     return this.stock.filter(producto => categorias.includes(producto.familia))
    }
    devolverCard(categorias){//DEVUELVE POR PRECIO
       let filtrado = this.devolverCategorias(categorias)
        let max = Math.max(...filtrado.map(producto => producto.precio))
        let min = Math.min(...filtrado.map(producto => producto.precio))

        return `<div class="prod-rif">
            <img src="./multimedia/rifles-eleccion.jpg" />
            <table>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>

                <tr>
                    <td>Rifles</td>
                    <td>$${min}USD - $${max}USD</td>
                </tr>
            </table>
           
            ${categorias.map(item => `<span>${item} </span>`).join("<br>")}
            
        
            <form>
                <label for="Eleccion-Rifle"></label>
                <select name="Eleccion-Rifle">
                ${filtrado.map(item => `<option>${item.nombre} </option>`).join("")}
                </select>
            </form>

            <input type="submit" value="Comprar"/>
            <input type="submit" value="Añadir al carrito"/>
            </div>`


    }
    
}


const catalogo = [//SE DEFINE EL ARRAY DEL CATALOGO
 
    {   id:1,
        familia:"Automatico",
        nombre:"Kalash Ak 47",
        precio:500,
        calibre:"7.62x39",
        modelo:"NATO"
    },{
        id:2,
        familia:"Automatico",
        nombre:"Carabina-Colt",
        precio:800,
        calibre:" 5.56",
        modelo:"NATO"
    },{ 
        id:3,
        familia:"semi-automatico",
        nombre:"FN Fal",
        precio:1000,
        calibre:"7.62x39",
        modelo:"OTAN"


    }
   

]

let anvilGuns = new Tienda()

anvilGuns.agregarProductos(catalogo)

console.log(anvilGuns.stock)


let automaticos = anvilGuns.devolverCard(["Automatico","semi-automatico"])
console.log(automaticos)
  document.getElementById("listadoProductos").innerHTML = ""
  function filtrar(){
    let categoriaUsar =prompt ("Ingrese la categoria deseada: Automatico, semi-automatico")
    document.getElementById("listadoProductos").innerHTML += anvilGuns.devolverCard([categoriaUsar])
    
  }
    document.getElementById("filtrar").onclick = ()=>filtrar()//FUNCION PARA MOSTRAR LAS CARDS
 